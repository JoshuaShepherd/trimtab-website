const fs = require('fs');
const path = require('path');

function cleanHTML(html) {
  if (!html) return '';
  
  // Remove WordPress-specific elements
  let cleaned = html
    .replace(/<!--[\s\S]*?-->/g, '') // Remove comments
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '') // Remove scripts
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '') // Remove inline styles
    .replace(/style=["'][^"']*["']/gi, '') // Remove style attributes
    .replace(/class=["']wp-[^"']*["']/gi, '') // Remove WP classes
    .replace(/class=["'][^"']*["']/gi, '') // Remove all classes for now
    .replace(/id=["'][^"']*["']/gi, '') // Remove ids
    .replace(/<div[^>]*>\s*<\/div>/gi, '') // Remove empty divs
    .replace(/<p[^>]*>\s*<\/p>/gi, '') // Remove empty paragraphs
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();
  
  return cleaned;
}

function extractPlainText(html) {
  if (!html) return '';
  
  return html
    .replace(/<[^>]*>/g, '') // Remove all HTML tags
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim()
    .substring(0, 160); // Limit to 160 characters for meta description
}

function toPascalCase(str) {
  if (!str) return 'Page';
  return str
    .replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '')
    .replace(/^[a-z]/, c => c.toUpperCase());
}

function toKebabCase(str) {
  if (!str) return 'page';
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function createNextJSPage(content, type = 'page') {
  const title = content.title || 'Untitled Page';
  const description = content.metaDescription || 
                     extractPlainText(content.excerpt) || 
                     extractPlainText(content.content);
  
  const cleanedContent = cleanHTML(content.content);
  const componentName = toPascalCase(content.slug || content.filename || title);
  
  const pageTemplate = `import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '${title.replace(/'/g, "\\'")}',
  description: '${description.replace(/'/g, "\\'")}'
}

export default function ${componentName}() {
  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">${title.replace(/'/g, "\\'")}</h1>
          ${content.date ? `<time className="text-gray-600" dateTime="${content.date}">
            ${new Date(content.date).toLocaleDateString()}
          </time>` : ''}
        </header>
        
        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: \`${cleanedContent.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />
        </div>
        
        ${content.tags && content.tags.length > 0 ? `
        <footer className="mt-8 pt-8 border-t">
          <div className="flex flex-wrap gap-2">
            ${content.tags.map(tag => `
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              ${typeof tag === 'object' ? tag.name : tag}
            </span>`).join('')}
          </div>
        </footer>` : ''}
      </article>
    </div>
  )
}
`;

  return pageTemplate;
}

function createBlogIndexPage(posts) {
  const postsData = posts.map(post => ({
    slug: post.slug || toKebabCase(post.title),
    title: post.title,
    excerpt: extractPlainText(post.excerpt || post.content),
    date: post.date,
    link: `/blog/${post.slug || toKebabCase(post.title)}`
  }));
  
  const indexTemplate = `import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Articles and insights from TrimTab'
}

const posts = ${JSON.stringify(postsData, null, 2)}

export default function BlogIndex() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-gray-600">Articles and insights from TrimTab</p>
      </header>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.slug} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>
                <Link href={post.link} className="hover:text-blue-600">
                  {post.title}
                </Link>
              </CardTitle>
              {post.date && (
                <time className="text-sm text-gray-500">
                  {new Date(post.date).toLocaleDateString()}
                </time>
              )}
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{post.excerpt}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
`;

  return indexTemplate;
}

async function convertAPIContent() {
  const apiDir = path.join(__dirname, '../scraped-content/api');
  const outputDir = path.join(__dirname, '../src/app');
  
  if (!fs.existsSync(apiDir)) {
    console.log('❌ No API content found. Run wp-api-scraper.js first.');
    return;
  }
  
  console.log('🔄 Converting API content to Next.js pages...');
  
  const postsDir = path.join(apiDir, 'posts');
  const pagesDir = path.join(apiDir, 'pages');
  
  let convertedCount = 0;
  
  // Convert posts
  if (fs.existsSync(postsDir)) {
    const postFiles = fs.readdirSync(postsDir).filter(f => f.endsWith('.json'));
    const posts = [];
    
    // Create blog directory
    const blogDir = path.join(outputDir, 'blog');
    if (!fs.existsSync(blogDir)) {
      fs.mkdirSync(blogDir, { recursive: true });
    }
    
    console.log(`📝 Converting ${postFiles.length} blog posts...`);
    
    postFiles.forEach(file => {
      const content = JSON.parse(fs.readFileSync(path.join(postsDir, file), 'utf8'));
      const slug = content.slug || toKebabCase(content.title);
      
      // Create individual post page
      const postDir = path.join(blogDir, slug);
      if (!fs.existsSync(postDir)) {
        fs.mkdirSync(postDir, { recursive: true });
      }
      
      const pageContent = createNextJSPage(content, 'post');
      fs.writeFileSync(path.join(postDir, 'page.tsx'), pageContent);
      
      posts.push(content);
      convertedCount++;
      console.log(`   ✅ ${content.title}`);
    });
    
    // Create blog index page
    const blogIndexContent = createBlogIndexPage(posts);
    fs.writeFileSync(path.join(blogDir, 'page.tsx'), blogIndexContent);
    console.log(`   ✅ Blog index page created`);
  }
  
  // Convert pages
  if (fs.existsSync(pagesDir)) {
    const pageFiles = fs.readdirSync(pagesDir).filter(f => f.endsWith('.json'));
    
    console.log(`📄 Converting ${pageFiles.length} pages...`);
    
    pageFiles.forEach(file => {
      const content = JSON.parse(fs.readFileSync(path.join(pagesDir, file), 'utf8'));
      const slug = content.slug || toKebabCase(content.title);
      
      // Skip home page (handled separately)
      if (slug === 'home' || slug === '' || content.slug === '') {
        console.log(`   ⏭️  Skipping home page (${content.title})`);
        return;
      }
      
      // Create page directory
      const pageDir = path.join(outputDir, slug);
      if (!fs.existsSync(pageDir)) {
        fs.mkdirSync(pageDir, { recursive: true });
      }
      
      const pageContent = createNextJSPage(content, 'page');
      fs.writeFileSync(path.join(pageDir, 'page.tsx'), pageContent);
      
      convertedCount++;
      console.log(`   ✅ ${content.title}`);
    });
  }
  
  console.log(`\n🎉 API content conversion completed!`);
  console.log(`📊 Converted ${convertedCount} files to Next.js pages`);
}

async function convertHTMLContent() {
  const htmlDir = path.join(__dirname, '../scraped-content/html');
  const outputDir = path.join(__dirname, '../src/app');
  
  if (!fs.existsSync(htmlDir)) {
    console.log('❌ No HTML content found. Run html-scraper.js first.');
    return;
  }
  
  console.log('🔄 Converting HTML content to Next.js pages...');
  
  const files = fs.readdirSync(htmlDir).filter(f => f.endsWith('.json') && f !== 'index.json');
  let convertedCount = 0;
  
  files.forEach(file => {
    const content = JSON.parse(fs.readFileSync(path.join(htmlDir, file), 'utf8'));
    const slug = content.filename || toKebabCase(content.title);
    
    // Skip home page
    if (slug === 'home') {
      console.log(`   ⏭️  Skipping home page (${content.title})`);
      return;
    }
    
    // Create page directory
    const pageDir = path.join(outputDir, slug);
    if (!fs.existsSync(pageDir)) {
      fs.mkdirSync(pageDir, { recursive: true });
    }
    
    const pageContent = createNextJSPage(content, 'page');
    fs.writeFileSync(path.join(pageDir, 'page.tsx'), pageContent);
    
    convertedCount++;
    console.log(`   ✅ ${content.title || 'Untitled'}`);
  });
  
  console.log(`\n🎉 HTML content conversion completed!`);
  console.log(`📊 Converted ${convertedCount} files to Next.js pages`);
}

async function convertContent() {
  console.log('🚀 Starting content conversion...');
  
  // Try API content first, then HTML content
  const apiDir = path.join(__dirname, '../scraped-content/api');
  const htmlDir = path.join(__dirname, '../scraped-content/html');
  
  if (fs.existsSync(apiDir)) {
    await convertAPIContent();
  } else if (fs.existsSync(htmlDir)) {
    await convertHTMLContent();
  } else {
    console.log('❌ No scraped content found. Run a scraper first.');
    console.log('💡 Available scrapers:');
    console.log('   - node scripts/wp-api-scraper.js');
    console.log('   - node scripts/html-scraper.js');
  }
}

if (require.main === module) {
  convertContent();
}

module.exports = { 
  convertContent, 
  convertAPIContent, 
  convertHTMLContent,
  toPascalCase,
  toKebabCase
};
