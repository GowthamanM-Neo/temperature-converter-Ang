const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto('http://localhost:4200/', { waitUntil: 'networkidle0' }) // check networkidle0 parameter and others here: https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-pagegotourl-options
  const pageClicked = await page.evaluate(() => {
    return !!document.querySelector('body > app-root > app-header > div > div > div.submit > button') // !! converts anything to boolean
  })
  if (pageClicked) { // you had the condition reversed. Not sure if it was intended.
    console.log('True')
  } else {
    console.log('False')
  }
  await browser.close()
})()