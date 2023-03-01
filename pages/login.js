import { expect } from '@playwright/test';
exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page
        this.email_textbox = page.getByRole('textbox', { name: 'Enter registered email' })
        this.password_textbox = page.getByPlaceholder('Enter password')
        this.login_btn = page.getByRole('button', { name: 'LOGIN' })
        this.logout_btn = page.getByRole('link', { name: 'Sign out' })
    }

    async gotoLoginPage() {
        await this.page.goto('https://letcode.in/signin')
        await expect(this.page).toHaveTitle("LetCode with Koushik")
    }

    async login(email, password) {
        await this.email_textbox.fill(email)
        await this.password_textbox.fill(password)
        await this.login_btn.click()
        
    }

    async logout() {
        await this.logout_btn.click()
       
    }



}