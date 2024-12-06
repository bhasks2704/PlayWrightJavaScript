import { test} from '@playwright/test'

test("Test case for Mouse Hover", async ({page})=>{

    await page.goto('https://www.flipkart.com/')

    let fashion = await page.locator("//span[@class='_1XjE3T']/span[text()='Fashion']")
    let kids = await page.locator("//a[text()='Kids']")
    let girls = await page.locator("//a[text()='Girls Dresses']")

    fashion.hover()
    kids.hover()
    girls.hover()

    await page.waitForTimeout(5000)
})