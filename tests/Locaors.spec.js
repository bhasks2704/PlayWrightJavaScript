import {test ,expect} from '@playwright/test'

test('Locating elements using property , css and xpath', async ({page})=>{

   await page.goto("https://www.demoblaze.com")

    // click on login button - property
    // page.locator('id=login2').click()
   await page.click('id=login2')

    // provide username - CSS
   await page.locator('#loginusername').fill('pavanol')
    // page.fill('#loginusername','pavanol')

    // provide password - CSS
//    await page.fill("input[id='loginpassword']",'test@123')
await page.locator('#loginpassword').fill('test@123')

    // click on the login button
   await page.click("//button[normalize-space()='Log in']")

    // Verify logout link presence 
    const logoutlink = await page.locator("//a[normalize-space()='Log out']")

    await expect(logoutlink).toBeVisible();
    await page.close()

})