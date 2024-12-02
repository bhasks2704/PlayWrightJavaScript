import {test,expect} from '@playwright/test'

test('Drop downs Test cases', async ({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    // Multiple ways to select option from the dropdown

    // await page.locator('#country').selectOption({label:'India'}); //label /visibile text

    // await page.locator("#country").selectOption('India') //Visible txt

    // await page.locator("#country").selectOption({value:'uk'}) // value 

    // await page.locator("#country").selectOption({index:1})//by index

    // await page.selectOption("#country",'India') //by text

    //Assertions 
    // 1-> check number of options in dropdown - Approach 1

    // const options = await page.locator('#country option')
    // await expect(options).toHaveCount(10)

    // 2.check number of options by collecting all of them from dropwdown - Approach 2

    const options = await page.$$('#country option')
    console.log('Number of options: ',options.length)

    await page.waitForTimeout(3000)
})