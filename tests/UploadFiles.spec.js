import {test,expect} from '@playwright/test'

test('Sing file upload Test Case', async ({page})=>{

    await page.goto('https://uploadnow.io/en')

    //  await page.waitForSelector("(//a[text()='Upload'])[1]")
    // await page.locator("(//a[text()='Upload'])[1]").click()

    await page.waitForTimeout(3000)
    // await page.locator(".uploader_dragdrop_wrapper__EUEkt").click()
    await page.locator(".uploader_dragdrop_wrapper__EUEkt").setInputFiles("UploadFiles/2wheeler policy.pdf")

    // Multiple files 
    // await page.locator(".uploader_dragdrop_wrapper__EUEkt").setInputFiles(["file1path","file2path"])


    await page.waitForTimeout(5000)

})