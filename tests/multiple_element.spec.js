const { test } = require("@playwright/test");
const { timeout } = require("../playwright.config");

test.describe("Multiple element and Loop", () => {

    test.beforeEach(async ({ page }) => {
        // Go to the starting url before each test.
        await page.goto("https://letcode.in/test");
    });

    test("Multiple element and Loop", async ({ page }) => {

        await page.locator('text=Find Elements').click()
        await page.locator("input[name='username']").fill("MotghareChetan");
        await page.locator("#search").click()

        //check the repos
        await page.waitForSelector("//li//a", { timeout: 5000 })
        const repolink = await page.locator("//li//a").allInnerTexts()
        //const repos = repolink.allInnerTexts();
        console.log(repolink.length)

        for(let i = 0; i<repolink.length;i++){
            console.log(repolink[i])

        }

       

        
        

    })
})


