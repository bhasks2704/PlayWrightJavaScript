import {test,expect} from '@playwright/test'

test("radio button Test case", async ({page})=>{

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    let radio1 = await page.locator("//label[@for='radio1']/input[@name='radioButton']")

    radio1.check()

    await page.waitForTimeout(3000)
})