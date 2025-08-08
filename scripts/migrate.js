#!/usr/bin/env node

const { scrapeWordPressAPI } = require('./wp-api-scraper');
const { scrapeWebsiteHTML } = require('./html-scraper');
const { convertContent } = require('./content-converter');
const fs = require('fs');
const path = require('path');

async function main() {
  console.log('🎯 TrimTab Content Migration Tool');
  console.log('==================================\n');
  
  const args = process.argv.slice(2);
  const command = args[0];
  
  switch (command) {
    case 'api':
      console.log('🔄 Running WordPress API scraper...');
      await scrapeWordPressAPI();
      break;
      
    case 'html':
      console.log('🔄 Running HTML scraper...');
      await scrapeWebsiteHTML();
      break;
      
    case 'convert':
      console.log('🔄 Converting scraped content to Next.js pages...');
      await convertContent();
      break;
      
    case 'full':
    case 'all':
      console.log('🔄 Running full migration pipeline...');
      
      // Try API scraping first
      console.log('\n📡 Step 1: Attempting WordPress API scraping...');
      const apiSuccess = await scrapeWordPressAPI();
      
      // If API fails, try HTML scraping
      if (!apiSuccess) {
        console.log('\n🌐 Step 2: Attempting HTML scraping as fallback...');
        await scrapeWebsiteHTML();
      }
      
      // Convert content to Next.js pages
      console.log('\n🔄 Step 3: Converting content to Next.js pages...');
      await convertContent();
      
      // Generate summary
      await generateSummary();
      break;
      
    case 'summary':
      await generateSummary();
      break;
      
    case 'clean':
      await cleanScrapedContent();
      break;
      
    default:
      showHelp();
  }
}

async function generateSummary() {
  console.log('\n📊 Generating migration summary...');
  
  const scrapedDir = path.join(__dirname, '../scraped-content');
  const appDir = path.join(__dirname, '../src/app');
  
  const summary = {
    timestamp: new Date().toISOString(),
    scrapedContent: {},
    generatedPages: {},
    recommendations: []
  };
  
  // Check scraped content
  const apiDir = path.join(scrapedDir, 'api');
  const htmlDir = path.join(scrapedDir, 'html');
  
  if (fs.existsSync(apiDir)) {
    const postsDir = path.join(apiDir, 'posts');
    const pagesDir = path.join(apiDir, 'pages');
    
    summary.scrapedContent.api = {
      posts: fs.existsSync(postsDir) ? fs.readdirSync(postsDir).filter(f => f.endsWith('.json')).length : 0,
      pages: fs.existsSync(pagesDir) ? fs.readdirSync(pagesDir).filter(f => f.endsWith('.json')).length : 0
    };
    
    // Load metadata if available
    const metadataPath = path.join(apiDir, 'metadata.json');
    if (fs.existsSync(metadataPath)) {
      const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
      summary.scrapedContent.metadata = metadata.counts;
    }
  }
  
  if (fs.existsSync(htmlDir)) {
    const htmlFiles = fs.readdirSync(htmlDir).filter(f => f.endsWith('.json') && f !== 'index.json');
    summary.scrapedContent.html = {
      pages: htmlFiles.length
    };
  }
  
  // Check generated pages
  if (fs.existsSync(appDir)) {
    const appContents = fs.readdirSync(appDir, { withFileTypes: true });
    const pageDirectories = appContents
      .filter(item => item.isDirectory() && !item.name.startsWith('.'))
      .map(item => item.name);
    
    summary.generatedPages = {
      directories: pageDirectories,
      count: pageDirectories.length
    };
  }
  
  // Generate recommendations
  if (summary.scrapedContent.api && summary.scrapedContent.api.posts > 0) {
    summary.recommendations.push('✅ WordPress API scraping successful - high quality content extracted');
  }
  
  if (summary.scrapedContent.html && summary.scrapedContent.html.pages > 0) {
    summary.recommendations.push('✅ HTML scraping completed - content may need manual review');
  }
  
  if (summary.generatedPages.count > 0) {
    summary.recommendations.push(`✅ Generated ${summary.generatedPages.count} Next.js page(s)`);
  }
  
  if (summary.scrapedContent.metadata && summary.scrapedContent.metadata.media > 0) {
    summary.recommendations.push(`⚠️  ${summary.scrapedContent.metadata.media} media files found - consider downloading images`);
  }
  
  if (summary.generatedPages.directories.includes('blog')) {
    summary.recommendations.push('✅ Blog section created - review individual posts for formatting');
  }
  
  summary.recommendations.push('💡 Next steps: Review generated pages, update navigation, and style with Tailwind CSS');
  
  // Save summary
  const summaryPath = path.join(scrapedDir, 'migration-summary.json');
  fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
  
  // Display summary
  console.log('\n📋 Migration Summary');
  console.log('===================');
  
  if (summary.scrapedContent.api) {
    console.log(`📡 API Content: ${summary.scrapedContent.api.posts} posts, ${summary.scrapedContent.api.pages} pages`);
  }
  
  if (summary.scrapedContent.html) {
    console.log(`🌐 HTML Content: ${summary.scrapedContent.html.pages} pages`);
  }
  
  if (summary.generatedPages.count > 0) {
    console.log(`📄 Generated Pages: ${summary.generatedPages.count}`);
    console.log(`   Directories: ${summary.generatedPages.directories.join(', ')}`);
  }
  
  console.log('\n💡 Recommendations:');
  summary.recommendations.forEach(rec => console.log(`   ${rec}`));
  
  console.log(`\n📁 Full summary saved to: ${summaryPath}`);
}

async function cleanScrapedContent() {
  const scrapedDir = path.join(__dirname, '../scraped-content');
  
  if (fs.existsSync(scrapedDir)) {
    console.log('🧹 Cleaning scraped content directory...');
    fs.rmSync(scrapedDir, { recursive: true, force: true });
    console.log('✅ Scraped content cleaned');
  } else {
    console.log('📁 No scraped content to clean');
  }
}

function showHelp() {
  console.log('TrimTab Content Migration Tool');
  console.log('==============================\n');
  console.log('Usage: node migrate.js <command>\n');
  console.log('Commands:');
  console.log('  api      - Scrape content using WordPress REST API');
  console.log('  html     - Scrape content using HTML parsing');
  console.log('  convert  - Convert scraped content to Next.js pages');
  console.log('  full     - Run complete migration pipeline (API → HTML → Convert)');
  console.log('  summary  - Show migration summary');
  console.log('  clean    - Clean scraped content directory');
  console.log('  help     - Show this help message\n');
  console.log('Examples:');
  console.log('  node migrate.js full     # Complete migration');
  console.log('  node migrate.js api      # API scraping only');
  console.log('  node migrate.js convert  # Convert existing scraped content');
}

// Handle uncaught errors
process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ Unhandled Promise Rejection:', reason);
  process.exit(1);
});

process.on('uncaughtException', (error) => {
  console.error('❌ Uncaught Exception:', error);
  process.exit(1);
});

if (require.main === module) {
  main().catch(error => {
    console.error('❌ Error:', error);
    process.exit(1);
  });
}

module.exports = { main };
