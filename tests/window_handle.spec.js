const { test, expect } = require('@playwright/test');

test.describe("Window Handle", () => {

    // test.beforeEach(async ({ browser }) => {
    //     context = await browser.newcontext();
    //     page = await context.newPage();
    //     // Go to the starting url before each test.
    //     await page.goto("https://letcode.in/test");
    // });

    test("Single Window Handle", async ({ browser }) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://letcode.in/test")
        await page.locator("//a[@href='/windows']").click()
        const singleWindow = page.locator("#home");

        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            singleWindow.click()

        ])

        console.log(newPage.url())


    })




})