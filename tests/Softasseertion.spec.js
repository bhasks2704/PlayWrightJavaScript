import {test,expect} from '@playwright/test'

test("Soft Assertion ", async({page}) =>{

        await page.goto("https://www.demoblaze.com")

        // Hard Assertions ->  if anything fail in assertion then rest of script won't be executed.
        // await expect(page).toHaveTitle('STORE')
        // await expect(page).toHaveURL('https://www.demoblaze.com')
        // await expect(page.locator('.navbar-brand')).toBeVisible()

        // Soft Assertion ->  If anything is fail in assertion it will execute rest of the script.

        await expect.soft(page).toHaveTitle('STORE1')
        await expect.soft(page).toHaveURL('https://www.demoblaze.com')
        await expect.soft(page.locator('.navbar-brand')).toBeVisible()
        

})