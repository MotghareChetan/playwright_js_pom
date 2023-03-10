const { test, expect } = require("@playwright/test");
const { timeout } = require("../playwright.config");

test.describe("Drag and Drop", () => {

    test.beforeEach(async ({ page }) => {
        // Go to the starting url before each test.
        await page.goto("https://letcode.in/test");
    });

    test("Drag and Drop", async ({ page }) => {

        await page.locator('text=AUI - 2').click();
        // await page.locator('#draggable').dragTo(page.locator('#droppable'));
        // console.log("Successfully dropped")
        //await page.locator('#draggable').isVisible()

        await page.locator('#draggable').hover();
        await page.mouse.down();
        await page.locator('#droppable').hover();
        await page.mouse.up();
    })

    test.only("Slider", async ({ page }) => {
        await page.locator('text=AUI - 5').click();
        


    })
})