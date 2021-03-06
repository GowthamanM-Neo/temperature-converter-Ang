const puppeteer = require('puppeteer');

const checkIfClassExists = (str = '') => {
  return document.getElementsByClassName(str).length > 0;

}

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto('http://localhost:4200/', { waitUntil: 'networkidle0' }) // check networkidle0 parameter and others here: https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-pagegotourl-options

  try {
    await page.waitForSelector('#heading', { timeout: 1000 });
    let element = await page.$('#heading');
    let value = await page.evaluate(el => el.textContent, element);
    if (value === "Temperature Converter") {
      console.log('TESTCASE:test_case1:success');
    }else{
      console.log('TESTCASE:test_case1:failure');
    }
  }catch{
    console.log('TESTCASE:test_case1:failure');
  }

  await browser.close()
})();

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto('http://localhost:4200/', { waitUntil: 'networkidle0' }) // check networkidle0 parameter and others here: https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-pagegotourl-options

  try {
    await page.waitForSelector('#centigradeButton', { timeout: 1000 });
    let element = await page.$('#centigradeButton');
    let value = await page.evaluate(el => el.textContent, element);
    if (value === "Convert to Centigrade") {
      console.log('TESTCASE:test_case2:success');
    }else{
      console.log('TESTCASE:test_case2:failure');
    }
  }catch{
    console.log('TESTCASE:test_case2:failure');
  }

  await browser.close()
})();

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto('http://localhost:4200/', { waitUntil: 'networkidle0' }) // check networkidle0 parameter and others here: https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-pagegotourl-options

  try {
    await page.waitForSelector('#fahrenheitButton', { timeout: 1000 });
    let element = await page.$('#fahrenheitButton');
    let value = await page.evaluate(el => el.textContent, element);
    if (value === "Covert to Fahrenheit") {
      console.log('TESTCASE:test_case3:success');
    }else{
      console.log('TESTCASE:test_case3:failure');
    }
  }catch{
    console.log('TESTCASE:test_case3:failure');
  }

  await browser.close()
})();