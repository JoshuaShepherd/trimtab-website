const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Create screenshots directory if it doesn't exist
const screenshotsDir = path.join(__dirname, '..', 'website-screenshots');
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

// Define all your website pages
const pages = [
  {
    name: 'home',
    url: 'http://localhost:3000/',
    description: 'Homepage'
  },
  {
    name: 'about',
    url: 'http://localhost:3000/about',
    description: 'About Page'
  },
  {
    name: 'ebook-landing',
    url: 'http://localhost:3000/ebook',
    description: 'eBook Landing Page'
  },
  {
    name: 'ebook-chapter-1',
    url: 'http://localhost:3000/ebook/chapter/1',
    description: 'eBook Chapter 1: Current State of Ministry'
  },
  {
    name: 'ebook-chapter-2',
    url: 'http://localhost:3000/ebook/chapter/2',
    description: 'eBook Chapter 2: Christ as Chief Cornerstone'
  },
  {
    name: 'services',
    url: 'http://localhost:3000/services',
    description: 'Services Page'
  },
  {
    name: 'consulting',
    url: 'http://localhost:3000/consulting',
    description: 'Consulting Page'
  },
  {
    name: 'coaching',
    url: 'http://localhost:3000/coaching',
    description: 'Coaching Page'
  },
  {
    name: 'resources',
    url: 'http://localhost:3000/resources',
    description: 'Resources Page'
  },
  {
    name: 'contact',
    url: 'http://localhost:3000/contact',
    description: 'Contact Page'
  },
  {
    name: 'blog',
    url: 'http://localhost:3000/blog',
    description: 'Blog Page'
  }
];

async function takeScreenshots() {
  console.log('🚀 Starting website screenshot process...');
  console.log(`📁 Screenshots will be saved to: ${screenshotsDir}`);
  
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: {
      width: 1200,
      height: 800
    }
  });

  const page = await browser.newPage();
  
  // Set a reasonable timeout
  page.setDefaultTimeout(30000);

  const results = [];
  
  for (const pageInfo of pages) {
    try {
      console.log(`📸 Taking screenshot of: ${pageInfo.description} (${pageInfo.url})`);
      
      await page.goto(pageInfo.url, { 
        waitUntil: 'networkidle0',
        timeout: 30000 
      });
      
      // Wait a bit for any animations or dynamic content
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Take full page screenshot
      const filename = `${pageInfo.name}-full.png`;
      const fullPath = path.join(screenshotsDir, filename);
      
      await page.screenshot({ 
        path: fullPath, 
        fullPage: true,
        type: 'png'
      });
      
      // Take viewport screenshot (above the fold)
      const viewportFilename = `${pageInfo.name}-viewport.png`;
      const viewportPath = path.join(screenshotsDir, viewportFilename);
      
      await page.screenshot({ 
        path: viewportPath, 
        fullPage: false,
        type: 'png'
      });
      
      results.push({
        page: pageInfo.name,
        description: pageInfo.description,
        url: pageInfo.url,
        status: 'success',
        fullScreenshot: filename,
        viewportScreenshot: viewportFilename
      });
      
      console.log(`✅ Success: ${pageInfo.description}`);
      
    } catch (error) {
      console.log(`❌ Failed: ${pageInfo.description} - ${error.message}`);
      results.push({
        page: pageInfo.name,
        description: pageInfo.description,
        url: pageInfo.url,
        status: 'failed',
        error: error.message
      });
    }
  }

  await browser.close();
  
  // Generate a summary report
  const report = {
    timestamp: new Date().toISOString(),
    totalPages: pages.length,
    successful: results.filter(r => r.status === 'success').length,
    failed: results.filter(r => r.status === 'failed').length,
    results: results
  };
  
  const reportPath = path.join(screenshotsDir, 'screenshot-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  
  console.log('\n📊 Screenshot Summary:');
  console.log(`✅ Successful: ${report.successful}`);
  console.log(`❌ Failed: ${report.failed}`);
  console.log(`📁 Screenshots saved to: ${screenshotsDir}`);
  console.log(`📋 Report saved to: ${reportPath}`);
  
  return report;
}

// Run the screenshot process
takeScreenshots()
  .then((report) => {
    console.log('\n🎉 Screenshot process completed!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('💥 Screenshot process failed:', error);
    process.exit(1);
  });
