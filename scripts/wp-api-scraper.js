const fs = require('fs');
const path = require('path');

async function scrapeWordPressAPI() {
  const baseUrl = 'https://trimtab.guide/wp-json/wp/v2';
  const outputDir = path.join(__dirname, '../scraped-content/api');
  
  // Create output directories
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  const postsDir = path.join(outputDir, 'posts');
  const pagesDir = path.join(outputDir, 'pages');
  const mediaDir = path.join(outputDir, 'media');
  
  [postsDir, pagesDir, mediaDir].forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
  
  try {
    console.log('🔍 Checking WordPress REST API availability...');
    
    // Test API availability
    const testResponse = await fetch(`${baseUrl}/posts?per_page=1`);
    if (!testResponse.ok) {
      throw new Error(`API not available: ${testResponse.status} ${testResponse.statusText}`);
    }
    
    console.log('✅ WordPress REST API is available!');
    
    // Fetch all posts with pagination
    let allPosts = [];
    let page = 1;
    let hasMore = true;
    
    console.log('📄 Fetching posts...');
    while (hasMore) {
      const postsResponse = await fetch(`${baseUrl}/posts?per_page=100&page=${page}`);
      if (!postsResponse.ok) break;
      
      const posts = await postsResponse.json();
      if (posts.length === 0) {
        hasMore = false;
      } else {
        allPosts = [...allPosts, ...posts];
        console.log(`   Fetched page ${page} (${posts.length} posts)`);
        page++;
      }
    }
    
    // Fetch all pages with pagination
    let allPages = [];
    page = 1;
    hasMore = true;
    
    console.log('📑 Fetching pages...');
    while (hasMore) {
      const pagesResponse = await fetch(`${baseUrl}/pages?per_page=100&page=${page}`);
      if (!pagesResponse.ok) break;
      
      const pages = await pagesResponse.json();
      if (pages.length === 0) {
        hasMore = false;
      } else {
        allPages = [...allPages, ...pages];
        console.log(`   Fetched page ${page} (${pages.length} pages)`);
        page++;
      }
    }
    
    // Fetch categories and tags
    console.log('🏷️  Fetching categories and tags...');
    const categoriesResponse = await fetch(`${baseUrl}/categories?per_page=100`);
    const categories = categoriesResponse.ok ? await categoriesResponse.json() : [];
    
    const tagsResponse = await fetch(`${baseUrl}/tags?per_page=100`);
    const tags = tagsResponse.ok ? await tagsResponse.json() : [];
    
    // Fetch media
    console.log('🖼️  Fetching media...');
    const mediaResponse = await fetch(`${baseUrl}/media?per_page=100`);
    const media = mediaResponse.ok ? await mediaResponse.json() : [];
    
    // Process and save posts
    console.log('💾 Saving posts...');
    allPosts.forEach((post, index) => {
      const content = {
        id: post.id,
        title: post.title.rendered,
        slug: post.slug,
        content: post.content.rendered,
        excerpt: post.excerpt.rendered,
        date: post.date,
        modified: post.modified,
        status: post.status,
        author: post.author,
        categories: post.categories,
        tags: post.tags,
        featured_media: post.featured_media,
        link: post.link,
        format: post.format || 'standard',
        meta: post.meta || {},
        yoast_head: post.yoast_head || null
      };
      
      const filename = `${String(index + 1).padStart(3, '0')}-${post.slug || `post-${post.id}`}.json`;
      fs.writeFileSync(
        path.join(postsDir, filename),
        JSON.stringify(content, null, 2)
      );
    });
    
    // Process and save pages
    console.log('💾 Saving pages...');
    allPages.forEach((page, index) => {
      const content = {
        id: page.id,
        title: page.title.rendered,
        slug: page.slug,
        content: page.content.rendered,
        excerpt: page.excerpt.rendered,
        date: page.date,
        modified: page.modified,
        status: page.status,
        author: page.author,
        parent: page.parent,
        menu_order: page.menu_order,
        link: page.link,
        featured_media: page.featured_media,
        template: page.template || '',
        meta: page.meta || {},
        yoast_head: page.yoast_head || null
      };
      
      const filename = `${String(index + 1).padStart(3, '0')}-${page.slug || `page-${page.id}`}.json`;
      fs.writeFileSync(
        path.join(pagesDir, filename),
        JSON.stringify(content, null, 2)
      );
    });
    
    // Save metadata
    const metadata = {
      scrapedAt: new Date().toISOString(),
      source: 'WordPress REST API',
      baseUrl: baseUrl,
      counts: {
        posts: allPosts.length,
        pages: allPages.length,
        categories: categories.length,
        tags: tags.length,
        media: media.length
      },
      categories: categories.map(cat => ({
        id: cat.id,
        name: cat.name,
        slug: cat.slug,
        description: cat.description,
        count: cat.count
      })),
      tags: tags.map(tag => ({
        id: tag.id,
        name: tag.name,
        slug: tag.slug,
        description: tag.description,
        count: tag.count
      })),
      media: media.map(item => ({
        id: item.id,
        title: item.title.rendered,
        slug: item.slug,
        source_url: item.source_url,
        media_type: item.media_type,
        mime_type: item.mime_type,
        media_details: item.media_details
      }))
    };
    
    fs.writeFileSync(
      path.join(outputDir, 'metadata.json'),
      JSON.stringify(metadata, null, 2)
    );
    
    console.log('\n🎉 WordPress API scraping completed!');
    console.log(`📊 Results:`);
    console.log(`   Posts: ${allPosts.length}`);
    console.log(`   Pages: ${allPages.length}`);
    console.log(`   Categories: ${categories.length}`);
    console.log(`   Tags: ${tags.length}`);
    console.log(`   Media: ${media.length}`);
    console.log(`📁 Content saved to: ${outputDir}`);
    
  } catch (error) {
    console.error('❌ Error scraping WordPress API:', error.message);
    console.log('💡 Trying HTML scraping as fallback...');
    return false;
  }
  
  return true;
}

if (require.main === module) {
  scrapeWordPressAPI();
}

module.exports = { scrapeWordPressAPI };
