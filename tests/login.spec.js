//import { test } from '@playwright/test'
const { test, expect } = require('@playwright/test');
import { LoginPage } from '../pages/login'
import { Header } from '../pages/header'
import { WorkSpace } from '../pages/workspace'


test.describe("Test suit", () => {
    let login = LoginPage;
    let header = Header;
    let space = WorkSpace;
  

    test.afterAll(async () => {
        console.log('Done with tests');

    });

    test.beforeAll(async () => {
        console.log('Before tests');
        
    });

    test('Login Test', async ({ page }) => {

        login = new LoginPage(page)
        await login.gotoLoginPage()
        await login.login()

        //await login.login("chintu.moto@gmail.com","Chetan@123")
        // await page.getByRole('alertdialog', { name: 'Welcome Chetan' }).click();
        // await page.getByRole('link', { name: 'Sign out' }).click();
        // await page.getByRole('alertdialog', { name: 'Bye! See you soon :)' }).click();
    });

    test('Validate Headers', async ({ page }) => {
        header = new Header(page)
        login = new LoginPage(page)
        await login.gotoLoginPage()

        await header.validateHeaderElements()

    });

    test("Validate WorkSpace Pages", async ({ page }) => {
        header = new Header(page)
        login = new LoginPage(page)
        space = new WorkSpace(page)
        await login.gotoLoginPage()
        await header.clickOnWorkSpace()
        await space.verifyElementCount()

    });
})