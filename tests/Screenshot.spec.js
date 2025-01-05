import { test , expect} from '@playwright/test'

test('Screen shot Test Case', async({page})=>{

    await page.goto("https://www.flipkart.com")

    // await page.screenshot({path:'Screenshot1.png'})

    // Full page Screenshot
    // await page.screenshot({path:'screenshot2.png',fullPage:true})

    // element screenshot
    // await page.locator("(//a[@title='Cart'])[2]").screenshot({path:'screenshot3.png'})

})