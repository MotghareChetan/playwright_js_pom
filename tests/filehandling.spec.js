import { test, expect } from "@playwright/test";

test.describe("File Upload", () => {
    test.beforeEach(async ({ page }) => {
        // Go to the starting url before each test.
        //  await page.goto("https://letcode.in/file");
        await page.goto("https://tus.io/demo.html");

    });



    test("File Upload", async ({ page }) => {

        const filepath = 'Files/file1.docx'

        const uploadFilebtn = await page.locator("input[type='file']");

        await uploadFilebtn.setInputFiles(filepath)
        //await page.locator('#pdf').click()


    })




})