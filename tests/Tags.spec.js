import {test,expect} from '@playwright/test'

test.describe('Tags Test Case',()=>{

    test("@sanity Test Case 1", async ({page})=>{

        console.log("Test Case 1")
    })

    test("@sanity Test case 2", async ({page})=>{
        console.log("Test case 2")
    })

    test("@regression Test case 3", async({page})=>{
        console.log("Test case 3")
    })
    
})
// npx playwright test Tags.spec.js --headed --grep @sanity 