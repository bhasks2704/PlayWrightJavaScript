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

    // const options = await page.$$('#country option')
    // console.log('Number of options: ',options.length)
    // await expect(options.length).toBe(10)

    //3. Check the presence of value in dropdown - approach1

    // const content = await page.locator('#country').textContent()
    // await expect(content.includes('India')).toBeTruthy()

    // 4.check presence of value in the dropdown - approach 2 -> using loops

    // const options = await page.$$('#country option')
    // let status = false

    // for(let option of options){
    //     let value = await option.textContent()
    //     if(value.includes('India')){
    //         status=true
    //         break
    //     }
    // }
    // expect(status).toBeTruthy()

    //5. Select option from dropdown using loop when we cannot use direct methods

    // const options = await page.$$('#country option')
    // for(let option of options){
    //     let value = await option.textContent()
    //     if(value.includes('France')){
    //         await page.selectOption("#country",value)
    //         break
    //     }
    // }



    await page.waitForTimeout(3000)
})