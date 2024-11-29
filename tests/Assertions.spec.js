import {test,expect} from '@playwright/test'

test('Testing assert', async ({page})=>{

    await page.goto('https://demo.nopcommerce.com/register')

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    

})