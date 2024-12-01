import {test,expect} from '@playwright/test'

test("input Actions", async ({page})=>{

    await page.goto('https://rahulshettyacademy.com/practice-project')

    let Username = await page.getByPlaceholder("Your Name*")
    
    await expect(Username).toBeEmpty()
    await expect(Username).toBeEnabled()
    await expect(Username).toBeVisible()
    await expect(Username).toBeEditable()

    Username.fill("Bhaskar")

    await page.waitForTimeout(5000)
})