import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login'

test('test', async ({ page }) => {

    const login = new LoginPage(page)
    await login.gotoLoginPage()
    await login.login('chintu.moto@gmail.com','Chetan@123')
    await login.logout()
    
    // await page.getByRole('alertdialog', { name: 'Welcome Chetan' }).click();
    // await page.getByRole('link', { name: 'Sign out' }).click();
    // await page.getByRole('alertdialog', { name: 'Bye! See you soon :)' }).click();
});