const { test, expect } = require('@playwright/test');

test.describe("Radio button and checkbox", () => {

    test.beforeEach(async ({ page }) => {
        // Go to the starting url before each test.
        await page.goto("https://letcode.in/buttons");
    });


    test("VISUAL TEST", async ({ page }) => {
        //await page.locator("(//div[@class='control'])[1]").screenshot({path:'button_scr.png'})
        expect(await page.locator("(//div[@class='control'])[1]").screenshot()).toMatchSnapshot('button-scr.png');
    })
})