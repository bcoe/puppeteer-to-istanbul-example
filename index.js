const path = require('path')
const pti = require('puppeteer-to-istanbul')

;(async () => {
  const puppeteer = require('puppeteer')
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  // Enable both JavaScript and CSS coverage
  await Promise.all([
    page.coverage.startJSCoverage(),
    page.coverage.startCSSCoverage()
  ])

  // Navigate to page
  let url = 'file:///' + path.resolve('./index.html')
  await page.goto(url)

  // Disable JavaScript coverage
  const jsCoverage = await page.coverage.stopJSCoverage()
  pti.write(jsCoverage)
  await browser.close()
})()
