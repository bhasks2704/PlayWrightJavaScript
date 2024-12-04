import {test ,expect} from '@playwright/test'

test.skip("Alert Test Case", async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    // Enabling dialog window handler
    page.on('dialog', async (dialog)=>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am alert box!')
        await dialog.accept()
    })

    await page.click("//button[@id='alertBtn']")
})

    test.skip("Alert with ok and cancel Test Case", async ({page})=>{
        await page.goto('https://testautomationpractice.blogspot.com/')
    
        // Enabling dialog window handler
        page.on('dialog', async (dialog)=>{
            expect(dialog.type()).toContain('confirm')
            expect(dialog.message()).toContain('Press a button!')
            // await dialog.accept()
            await dialog.dismiss()
        })
    
        await page.click("//button[@id='confirmBtn']")

    await page.waitForTimeout(5000)
})

    test('Prompt Dialog' , async ({page}) =>{
        await page.goto('https://testautomationpractice.blogspot.com/')

        // Enabling dialog Window Handler

        page.on("dialog", async dialog=>{
            expect(dialog.type()).toContain('prompt')
            expect(dialog.message()).toContain('Please enter your name:')
            expect(dialog.defaultValue()).toContain('Harry Potter')
            await dialog.accept('Bhaskar')
            await page.waitForTimeout(3000)
        })

        await page.click("//button[@id='promptBtn']")
        await expect(page.locator("//p[@id='demo']")).toHaveText('Hello Bhaskar! How are you today?')

        await page.waitForTimeout(5000)
    })