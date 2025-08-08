const fs = require('fs');
const path = require('path');

// We'll use node's built-in fetch and a simple HTML parser
async function fetchPage(url) {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; ContentMigrationBot/1.0)'
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    return await response.text();
  } catch (error) {
    console.error(`Error fetching ${url}:`, error.message);
    return null;
  }
}

// Simple HTML parser without external dependencies
function parseHTML(html) {
  // Extract title
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  const title = titleMatch ? titleMatch[1].replace(/\s+/g, ' ').trim() : '';
  
  // Extract meta description
  const metaDescMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
  const metaDescription = metaDescMatch ? metaDescMatch[1] : '';
  
  // Extract main content (try multiple selectors)
  const contentSelectors = [
    /<main[^>]*>([\s\S]*?)<\/main>/i,
    /<article[^>]*>([\s\S]*?)<\/article>/i,
    /<div[^>]*class=["'][^"']*content[^"']*["'][^>]*>([\s\S]*?)<\/div>/i,
    /<div[^>]*class=["'][^"']*post[^"']*["'][^>]*>([\s\S]*?)<\/div>/i,
    /<div[^>]*id=["']content["'][^>]*>([\s\S]*?)<\/div>/i
  ];
  
  let content = '';
  for (const selector of contentSelectors) {
    const match = html.match(selector);
    if (match) {
      content = match[1];
      break;
    }
  }
  
  // If no content found, try to get body content
  if (!content) {
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    content = bodyMatch ? bodyMatch[1] : html;
  }
  
  // Clean up content - remove script and style tags
  content = content.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
  content = content.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
  content = content.replace(/<!--[\s\S]*?-->/g, '');
  
  // Extract links from the page
  const linkMatches = [...html.matchAll(/<a\s+[^>]*href=["']([^"']+)["'][^>]*>([^<]*)<\/a>/gi)];
  const links = linkMatches.map(match => ({
    url: match[1],
    text: match[2].trim()
  }));
  
  return {
    title: title.replace(/\s*\|\s*.*$/, '').trim(), // Remove site name from title
    metaDescription,
    content: content.trim(),
    links: links.filter(link => link.url.includes('trimtab.guide'))
  };
}

async function discoverPages(baseUrl) {
  console.log('🔍 Discovering pages from sitemap and navigation...');
  
  const discoveredUrls = new Set([baseUrl]);
  
  // Try to fetch sitemap
  try {
    const sitemapUrls = [`${baseUrl}/sitemap.xml`, `${baseUrl}/wp-sitemap.xml`];
    
    for (const sitemapUrl of sitemapUrls) {
      const sitemapResponse = await fetch(sitemapUrl);
      if (sitemapResponse.ok) {
        const sitemapText = await sitemapResponse.text();
        const urlMatches = [...sitemapText.matchAll(/<loc>([^<]+)<\/loc>/g)];
        
        urlMatches.forEach(match => {
          const url = match[1].trim();
          if (url.includes('trimtab.guide') && !url.includes('.xml')) {
            discoveredUrls.add(url);
          }
        });
        
        console.log(`   Found ${urlMatches.length} URLs in sitemap`);
        break;
      }
    }
  } catch (error) {
    console.log('   Sitemap not found, will crawl manually');
  }
  
  // Add common page URLs
  const commonPaths = [
    '/',
    '/about',
    '/about/',
    '/contact',
    '/contact/',
    '/blog',
    '/blog/',
    '/services',
    '/services/',
    '/resources',
    '/resources/',
    '/ebook',
    '/ebook/'
  ];
  
  commonPaths.forEach(path => {
    discoveredUrls.add(`${baseUrl}${path}`);
  });
  
  return Array.from(discoveredUrls);
}

async function scrapePage(url, outputDir, delay = 1000) {
  console.log(`   Scraping: ${url}`);
  
  const html = await fetchPage(url);
  if (!html) return null;
  
  const parsed = parseHTML(html);
  
  // Create filename from URL
  const urlObj = new URL(url);
  let filename = urlObj.pathname.replace(/\/$/, '') || 'home';
  filename = filename.replace(/\//g, '-').replace(/^-/, '') || 'home';
  filename = filename.replace(/[^a-zA-Z0-9-]/g, '') || 'home';
  
  const pageData = {
    url,
    title: parsed.title,
    metaDescription: parsed.metaDescription,
    content: parsed.content,
    links: parsed.links,
    scrapedAt: new Date().toISOString(),
    filename
  };
  
  // Save to file
  fs.writeFileSync(
    path.join(outputDir, `${filename}.json`),
    JSON.stringify(pageData, null, 2)
  );
  
  // Add delay to be respectful
  if (delay > 0) {
    await new Promise(resolve => setTimeout(resolve, delay));
  }
  
  return pageData;
}

async function scrapeWebsiteHTML() {
  const baseUrl = 'https://trimtab.guide';
  const outputDir = path.join(__dirname, '../scraped-content/html');
  
  // Create output directory
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  console.log('🌐 Starting HTML scraping...');
  
  try {
    // Discover all pages
    const urls = await discoverPages(baseUrl);
    console.log(`📋 Found ${urls.length} URLs to scrape`);
    
    const scrapedPages = [];
    const errors = [];
    
    // Scrape each page
    for (let i = 0; i < urls.length; i++) {
      const url = urls[i];
      try {
        const pageData = await scrapePage(url, outputDir, 1500); // 1.5 second delay
        if (pageData) {
          scrapedPages.push(pageData);
          console.log(`   ✅ ${pageData.title || 'Untitled'}`);
        }
      } catch (error) {
        console.log(`   ❌ Failed: ${error.message}`);
        errors.push({ url, error: error.message });
      }
    }
    
    // Create index file
    const indexData = {
      scrapedAt: new Date().toISOString(),
      source: 'HTML Scraping',
      baseUrl,
      totalPages: scrapedPages.length,
      errors: errors.length,
      pages: scrapedPages.map(page => ({
        url: page.url,
        title: page.title,
        filename: page.filename,
        hasContent: page.content.length > 0
      })),
      errorLog: errors
    };
    
    fs.writeFileSync(
      path.join(outputDir, 'index.json'),
      JSON.stringify(indexData, null, 2)
    );
    
    console.log('\n🎉 HTML scraping completed!');
    console.log(`📊 Results:`);
    console.log(`   Successfully scraped: ${scrapedPages.length} pages`);
    console.log(`   Errors: ${errors.length}`);
    console.log(`📁 Content saved to: ${outputDir}`);
    
    return scrapedPages;
    
  } catch (error) {
    console.error('❌ Error during HTML scraping:', error);
    return [];
  }
}

if (require.main === module) {
  scrapeWebsiteHTML();
}

module.exports = { scrapeWebsiteHTML };
