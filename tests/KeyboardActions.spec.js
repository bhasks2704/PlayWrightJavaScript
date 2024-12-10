import {test , expect} from '@playwright/test'

test('Key Board actions copy and paste', async ({page})=>{

    await page.goto("https://gotranscript.com/text-compare")
    
    await page.getByPlaceholder('Paste one version of the text here.').fill("Welcome")

    // Ctrl + A
    await page.keyboard.press('Meta+A')
    // Ctrl + C
    await page.keyboard.press('Meta+C')

    // Tab
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')

    // Ctrl + V
    await page.keyboard.press('Meta+V')

    await page.waitForTimeout(5000)
})