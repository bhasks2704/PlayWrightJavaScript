import { test,expect} from '@playwright/test'

let page;

test.beforeAll(async ({browser})=>{

    page = await browser.newPage();
    await page.goto('https://www.demoblaze.com/index.html')
    // login
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator('//button[normalize-space()="Log in"]').click()
    console.log(" Test Before All")
})

test.afterAll(async ()=>{
    await page.locator('#logout2').click()
    console.log(" Test After All")

})



test('Home Page Test', async () =>{

    // Home Page
    const products = await page.$$('.hrefch')
    expect(products).toHaveLength(9)
    console.log("Home Page")
})

test('Add Product to Cart Page Test case', async ()=>{

    await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click()
    // await page.waitForSelector('/a[normalize-space()="Add to cart"]')
    await page.locator('//a[normalize-space()="Add to cart"]').click()
    console.log("Add Product Page")

    page.on('dialog', async dialog =>{

        expect(dialog.message()).toContain('Product added.')
        await dialog.accecpt()
    })
})