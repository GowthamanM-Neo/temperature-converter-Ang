const puppeteer = require('puppeteer');

(async () => {

  // 1. Launch the browser
  const browser = await puppeteer.launch();

  // 2. Open a new page
  const page = await browser.newPage();

  // 3. Navigate to URL
  await page.goto('http://localhost:4200/');

	// 4. Take screenshot
  await page.screenshot({path: 'screenshot.png'});

  await browser.close();
})();