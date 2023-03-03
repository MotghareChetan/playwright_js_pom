const { test, expect } = require('@playwright/test');
import { LoginPage } from '../pages/login'
import { Header } from '../pages/header'
import { InputPage } from '../pages/input'

// test.beforeAll(async ({ page }) => {
//     console.log('Before tests');
//     const header = new Header(page)
//     const login = new LoginPage(page)

//     await login.gotoLoginPage()
//     await login.login()
//     await header.clickOnWorkSpace()

// });

test('Input Element', async ({ page }) => {
    const header = new Header(page)
    const login = new LoginPage(page)
    const input = new InputPage(page)
    await login.gotoLoginPage()
    //await login.login()
    await header.clickOnWorkSpace()

    input.clickOnInput()
    input.enterName()
    input.appendText()
    input.getText()

})