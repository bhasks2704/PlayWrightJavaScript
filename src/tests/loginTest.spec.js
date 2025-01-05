import { test} from '@playwright/test';
import LoginPage from '../pages/LoginPage';

test("Testing ",async ({page})=>{

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.fillUsername("bhaskarrao441@gmail.com");
    await loginPage.fillPassword("Baby@s1227");

    const homepage = await loginPage.clickLoginButton();
    await homepage.expectServiceTitleToBeVisible();
    
})