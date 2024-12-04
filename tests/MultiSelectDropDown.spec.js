import {test,expect} from '@playwright/test'

test("Multi Select drop down Test case", async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    // select multiple options from multi select dropdown
    // await page.selectOption('#colors',['Blue','Red','Yellow'])

    // assertions
    // 1.Check number of options in dropdown
    // const options = await page.locator('#colors option')
    // await expect(options).toHaveCount(7)

    // 2.Check number of optionsin dropdown using JS Array
    // const options = await page.$$('#colors option')
    // console.log('Number of options:',options.length)
    // await expect(options.length).toBe(7)

    // 3.check presence of value in the dropdown
    

    await page.waitForTimeout(3000)
})