import {test,expect} from '@playwright/test'

test("radio button Test case", async ({page})=>{

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    let radio1 = await page.locator("//label[@for='radio1']/input[@name='radioButton']")
    let radio2 = await page.locator("//label[@for='radio2']/input[@name='radioButton']")

    radio1.check()

    await expect(radio1).toBeChecked()
    await expect(radio1.isChecked()).toBeTruthy()

    // await expect(radio2.isChecked()).toBeFalsy()

    await page.waitForTimeout(3000)
})