import {test , expect} from '@playwright/test'

test("Drag and Drop Test Cases", async ({page})=>{

    await page.goto('http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

    let source = await page.locator('#box6')
    let target  = await page.locator('#box106')

    // approach 1
    /*await source.hover()
    await page.mouse.down()

    await target.hover()
    await page.mouse.up()
*/

    // approach 2
    await source.dragTo(target)

    
    await page.waitForTimeout(5000)

})