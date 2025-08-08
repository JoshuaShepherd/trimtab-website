const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function screenshotLiveWebsite() {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: {
      width: 1200,
      height: 800
    }
  });

  const page = await browser.newPage();
  
  // Create screenshots directory
  const screenshotsDir = path.join(__dirname, '..', 'live-website-screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  // Define the live website URLs to screenshot
  const urls = [
    { path: '', name: 'home' },
    { path: '/about', name: 'about' },
    { path: '/services', name: 'services' },
    { path: '/consulting', name: 'consulting' },
    { path: '/coaching', name: 'coaching' },
    { path: '/resources', name: 'resources' },
    { path: '/contact', name: 'contact' },
    { path: '/ebook', name: 'ebook' },
    { path: '/courses', name: 'courses' },
    { path: '/blog', name: 'blog' },
    { path: '/apest-quiz', name: 'apest-quiz' },
    { path: '/shop', name: 'shop' },
    { path: '/teacher-description', name: 'teacher-description' },
    { path: '/shepherd-description', name: 'shepherd-description' },
    { path: '/evangelist-description', name: 'evangelist-description' },
    { path: '/prophet-description', name: 'prophet-description' },
    { path: '/apostle-description', name: 'apostle-description' }
  ];

  console.log(`Starting to screenshot ${urls.length} pages from https://trimtab.guide...`);
  
  let successCount = 0;
  let errorCount = 0;

  for (const url of urls) {
    try {
      const fullUrl = `https://trimtab.guide${url.path}`;
      console.log(`📷 Screenshotting: ${fullUrl}`);
      
      await page.goto(fullUrl, { 
        waitUntil: 'networkidle0',
        timeout: 30000 
      });
      
      // Wait a moment for any dynamic content to load
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Take viewport screenshot
      await page.screenshot({
        path: path.join(screenshotsDir, `${url.name}-viewport.png`),
        fullPage: false
      });
      
      // Take full page screenshot
      await page.screenshot({
        path: path.join(screenshotsDir, `${url.name}-fullpage.png`),
        fullPage: true
      });
      
      console.log(`✅ Successfully captured: ${url.name}`);
      successCount++;
      
    } catch (error) {
      console.error(`❌ Error capturing ${url.name}:`, error.message);
      errorCount++;
    }
  }

  await browser.close();
  
  console.log(`\n📊 Screenshot Summary:`);
  console.log(`✅ Successful: ${successCount}/${urls.length} pages`);
  console.log(`❌ Errors: ${errorCount}/${urls.length} pages`);
  console.log(`📁 Screenshots saved to: ${screenshotsDir}`);
  
  if (successCount > 0) {
    console.log(`\n🎉 Screenshots completed! Check the live-website-screenshots directory.`);
  }
}

// Run the screenshot function
screenshotLiveWebsite().catch(console.error);
