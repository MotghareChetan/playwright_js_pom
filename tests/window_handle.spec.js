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
        expect(newPage).toHaveTitle("LetCode - Testing Hub")


    })

    test.only("Multiple window handle", async ({ browser }) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://letcode.in/test")
        await page.locator("//a[@href='/windows']").click()

        const [multiWindows] = await Promise.all([
            context.waitForEvent('page'),
            page.locator('#multi').click()
        ])

        await multiWindows.waitForLoadState();

        const allWindows = await multiWindows.context().pages();

        console.log(allWindows.length)

        allWindows.forEach(page => {
            console.log(page.url())
        })

        await allWindows[1].bringToFront()
        //await allWindows[1].getByRole('link', { name: 'Dialog' }).click();


        allWindows[1].on('dialog', (dialog) => {
            console.log(`Dialog message: ${dialog.message()}`);
            //  expect(dialog.message()).toContain('LetCode')
            dialog.accept()
            console.log("simple alert accepted")
            dialog.type('Chetan')
        });

        // const text = allWindows[1].locator("//h1").textContent();
        // console.log(text)
        // expect(text).toContain("Alert");
        // await allWindows[2].bringToFront();
        // // await pages[2].getByTitle();
        // expect(await allWindows[2].toHaveTitle("LetCode with Koushik"))

    });


})

