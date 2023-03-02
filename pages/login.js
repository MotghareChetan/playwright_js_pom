// @ts-check
import { expect } from '@playwright/test';
import { testConfig } from '../utils/testConfig';
import { WebActions } from '../lib/webAction';

let webaction = new WebActions;

class LoginPage {
     
    constructor(page) {
        this.page = page
        webaction = new WebActions(this.page)
        this.ENTER_LOGINPAGE = `text=Log in`
        this.EMAIL_TEXTBOX = "input[name='email']"
        this.PASSWORD_TEXTBOX = "input[name='password']"
        this.CLICK_LOGIN = '//button[text()="LOGIN"]'
        this.CLICK_LOGOUT = 'text=Sign out'
        this.alert = "div[role='alertdialog']"
        // this.enter_login = page.locator('text=Log in')
        // this.email_textbox = page.getByRole('textbox', { name: 'Enter registered email' })
        // this.password_textbox = page.getByPlaceholder('Enter password')
        // this.login_btn = page.getByRole('button', { name: 'LOGIN' })
        // this.logout_btn = page.getByRole('link', { name: 'Sign out' })

    }

    async gotoLoginPage() {
       // webaction.navigateToURL(testConfig.url)
        webaction.navigateToURL("https://letcode.in/")
        await expect(this.page).toHaveTitle("LetCode with Koushik")
    }

    async login() {
        await webaction.clickElement(this.ENTER_LOGINPAGE)
        await webaction.enterElementText(this.EMAIL_TEXTBOX, testConfig.username)
        await webaction.enterElementText(this.PASSWORD_TEXTBOX, testConfig.password)
        //await this.enter_login.click()
        //await this.email_textbox.fill(testConfig.username)
        //await this.password_textbox.fill(testConfig.password)
        //await this.login_btn.click()
        await webaction.clickElement(this.CLICK_LOGIN)

        await webaction.verifyElementText(this.alert, "Welcome Chetan")


    }

    async logout() {
        await webaction.clickElement(this.CLICK_LOGOUT)


    }
}
module.exports = { LoginPage };