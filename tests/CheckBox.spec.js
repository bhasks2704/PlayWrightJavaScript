import {test,expect} from '@playwright/test'

test('Testing CheckBox Test Case', async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    // single checkbox 
    let option1 = await page.locator('#checkBoxOption1')
    option1.check()

    await  expect(option1).toBeChecked()
    await expect(option1.isChecked()).toBeTruthy()


    // Multiple Checkboxes 
    const Checkboxes = ['#checkBoxOption1','#checkBoxOption2','#checkBoxOption3']

    for(let checkbox of Checkboxes){
        await page.locator(checkbox).check()
    }

    await page.waitForTimeout(5000)

    for(const uncheck of Checkboxes){
        if(await page.locator(uncheck).isChecked())
            await page.locator(uncheck).uncheck()
    }

    await page.waitForTimeout(5000)
})

    