const puppeteer = require('puppeteer');

const checkIfClassExists = (str = '') => {
  return document.getElementsByClassName(str).length > 0;

}

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto('http://localhost:4200/', { waitUntil: 'networkidle0' }) // check networkidle0 parameter and others here: https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-pagegotourl-options
  console.log(checkIfClassExists("submit"));
  await browser.close()
})()