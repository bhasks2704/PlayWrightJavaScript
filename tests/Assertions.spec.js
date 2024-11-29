import {test,expect} from '@playwright/test'

test('Testing assert', async ({page})=>{

    await page.goto('https://demo.nopcommerce.com/register')

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    const LogoElement = await page.locator('.header-logo')

    await expect(LogoElement).toBeVisible()

    const searchitem = await page.locator('#small-searchterms')

    await expect(searchitem).toBeEnabled()

    const MaleRadioButton = await page.locator('#gender-male')
    await MaleRadioButton.click()

    await expect(MaleRadioButton).toBeChecked()

    const newsletterCheckbox = await page.locator('#Newsletter')

    await expect(newsletterCheckbox).toBeChecked()

    const registerButton = await page.locator("#register-button")
    await expect(registerButton).toHaveAttribute('type','submit')

    await expect(await page.locator('.page-title h1')).toHaveText('Register')

    await expect(await page.locator('.page-title h1')).toContainText('Reg')

    const emailInputtxt = await page.locator('#Email')
    await emailInputtxt.fill('test@demo.com')
    await expect(emailInputtxt).toHaveValue('test@demo.com')

    const Options = await page.locator('select[name="DateOfBirthMonth"] option')
    await expect(Options).toHaveCount(13)


})