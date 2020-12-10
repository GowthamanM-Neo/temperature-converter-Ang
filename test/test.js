const puppeteer = require('puppeteer');

puppeteer.launch().then(async browser => {
  const page = await browser.newPage();
  page.goto("http://localhost:4200");
  page
    .waitForSelector('#result')
    .then(() => console.log('got it'));
    browser.close();
});