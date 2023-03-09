import { test, expect, devices } from '@playwright/test';

/*test.use({
    ...devices['iPhone 13'],
    ...devices['Desktop Chrome'],
    ...devices['Galaxy Tab S4 landscape'],
});*/

test('test', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    const brandName = await page.getByText('Swag Labs').textContent();
    expect(brandName).toStrictEqual("Swag Labs");

    await page.locator('#inventory_container').nth(1).click();
    await page.getByRole('button', { name: 'Open Menu' }).click();
    //await page.getByRole('link', { name: 'All Items' }).click();
    await page.getByRole('button', { name: 'Close Menu' }).click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('a').filter({ hasText: '1' }).click();
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').click();
    await page.locator('[data-test="firstName"]').fill('Test User');

   // await page.locator('[data-test="lastName"]').click();
   // await page.locator('[data-test="lastName"]').fill('Demo');

    await page.locator('[data-test="postalCode"]').click();
    await page.locator('[data-test="postalCode"]').fill('12342');
    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="finish"]').click();
    //await page.getByRole('heading', { name: 'Thank you for your order!' }).click();
   // await page.locator('[data-test="back-to-products"]').click();
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
});