import {test,expect} from '@playwright/test'

test('Locate Multiple ELements ', async ({page})=>{

    await page.goto('https://www.demoblaze.com')

    const links = await page.$$('a');

    for(const link of links){

        const linktxt = await link.textContent();
        console.log(linktxt);
    }
})

test('Getting Product Names ',async({page})=>{

    await page.goto('https://www.demoblaze.com')

    console.log("----------------------------------------")
    await page.waitForSelector("//div[@id='tbodyid']//div//h4/a")

    const productnames = await page.$$("//div[@id='tbodyid']//div//h4/a")

    for(const product of productnames){

        let productname =  await product.textContent()
        console.log(productname)
    }
})