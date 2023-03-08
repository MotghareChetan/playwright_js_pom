import { test, expect } from "@playwright/test";

test.describe("TABLE", () => {
    test.beforeEach(async ({ page }) => {
        // Go to the starting url before each test.
        await page.goto("https://letcode.in/table");
    });

    /*test("main navigation", async ({ page }) => {
        // Assertions use the expect API.
        await expect(page).toHaveURL("https://letcode.in/test");
    });*/

    test("Match the total price", async ({ page }) => {

        const table = await page.locator("#shopping");
        const tbody = await table.locator("tbody");
        // const row = await tbody.locator("tr");
        const tfoot = await table.locator("tfoot");
        const rowCount = await tbody.locator("tr").count();
        console.log("row_count :--> " + rowCount)
        expect(rowCount).toBe(4)
        const actualTotalPrice = await tfoot.locator("td").last().textContent()
        console.log(Number(actualTotalPrice))
        let totalPrice = 0;


        for (let i = 0; i < rowCount; i++) {
            const row = await tbody.locator("tr").nth(i)
            const price = await row.locator("td").last().textContent();
            totalPrice += Number(price);

        }
        console.log("Total Price >>> " + totalPrice)

        expect(Number(actualTotalPrice)).toBe(totalPrice)
    })

    test.only("Check Input", async ({ page }) => {
        const table = await page.locator("#simpletable");
        const tbody = await table.locator("tbody");
        const rows = await tbody.locator("tr");
        const rowCount = await rows.count();
        console.log(rowCount);

        for (let i = 0; i < rowCount; i++) {
            const row = await rows.nth(i);
            const td = await row.locator("td");
            for (let j = 0; j < await td.count(); j++) {
                if (await td.nth(j).textContent() == "Raj") {
                    console.log(await td.nth(2).textContent());
                    await td.last().locator("input").check();

                }

            }


        }


    })
})