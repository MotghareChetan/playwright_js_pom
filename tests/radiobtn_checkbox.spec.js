const { test, expect } = require('@playwright/test');

test.describe("Radio button and checkbox", () => {

    test.beforeEach(async ({ page }) => {
        // Go to the starting url before each test.
        await page.goto("https://letcode.in/test");
    });


    test("CHECKBOX", async ({ page }) => {
        await page.locator(`text=Toggle`).click()

        await page.check("//input[@name='answer' and @id='yes']")
        const firstcheckbox = await page.locator("//input[@id='one']");
        firstcheckbox.check()
        expect(firstcheckbox).toBeTruthy();
        expect(page.isChecked("//input[@id='one']")).not.toBe(true);

        expect(page.isDisabled("//input[@id='maybe']")).toBeTruthy()

        //find checkbox is enabled
        const input = page.getByLabel('Remember me')

        if (input.isDisabled()) {
            console.log("Input button is disabled")
        }
        else {
            console.log("we can't locate the element")
        }

    });
















});