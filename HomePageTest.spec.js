const {test, expect} = require('@playwright/test')

test('Getting Home Page Tittle ',async({page})=>{

    await page.goto("https://www.demoblaze.com");
    const pageTitle = page.title();

    await expect(page).toHaveTitle('STORE');

    const pageUrl = page.url();
    console.log('Page URL is:',pageUrl)

    await expect(page).toHaveURL("https://www.demoblaze.com");

    await page.close();



})

