//import { test } from '@playwright/test'
const { test } = require('@playwright/test')
import { LoginPage } from '../pages/login'
import { Header } from '../pages/header'
import { WorkSpace } from '../pages/workspace'


test.describe("Test suit", () => {

    test('Login Test', async ({ page }) => {

        const login = new LoginPage(page)
        await login.gotoLoginPage()
        await login.login()

        //await login.login("chintu.moto@gmail.com","Chetan@123")
        // await page.getByRole('alertdialog', { name: 'Welcome Chetan' }).click();
        // await page.getByRole('link', { name: 'Sign out' }).click();
        // await page.getByRole('alertdialog', { name: 'Bye! See you soon :)' }).click();
    });

    test('Validate Headers', async ({ page }) => {
        const header = new Header(page)
        const login = new LoginPage(page)
        await login.gotoLoginPage()
        await header.validateHeaderElements()

    });

    test("Validate WorkSpace Pages", async ({ page }) => {
        const login = new LoginPage(page)
        const header = new Header(page)
        const space = new WorkSpace(page)
        await login.gotoLoginPage()
        await header.clickOnWorkSpace()
        await space.verifyElementCount()

}
    )
})