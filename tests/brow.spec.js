import {test,expect} from '@playwright/test'
const { chromium } = require('playwright');  // Or 'chromium' or 'webkit'.

test("ttest",async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://www.google.com');
  await browser.close();
});