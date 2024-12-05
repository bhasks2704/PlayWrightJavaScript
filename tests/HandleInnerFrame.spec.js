import {test , expect} from '@playwright/test'

test('Inner Frames Test case', async ({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/')

    const frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    frame3.locator("input[name='mytext3']").fill('Bhaskar')

    //nested frame
    const childframeslist = await frame3.childFrames()
    await childframeslist[0].locator("(//div[@class='AB7Lab Id5V1'])[1]").check()


    await page.waitForTimeout(3000)

//    await page.close()
})