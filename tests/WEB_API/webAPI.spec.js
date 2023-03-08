//import { test } from '@playwright/test'
const { test, expect, request } = require('@playwright/test');


const loginURI = "https://rahulshettyacademy.com/api/ecom/auth/login";
const loginPayload = { userEmail: "chintu.moto@gmail.com", userPassword: "Test@1234" }
let token;

test.describe("Test suit", () => {

    test.beforeAll(async () => {
        const apiContext = await request.newContext();
        const apiResponse = await apiContext.post(loginURI, { data: loginPayload })
        expect(apiResponse.ok()).toBeTruthy();
        const loginResponse = await apiResponse.json();
        token = loginResponse.token;

    });

    /* test.afterAll(async () => {
         console.log("API token extraction DONE")
 
     });*/

    test('Login Test', async ({ page }) => {

        await page.addInitScript(value => {
            window.localStorage.setItem('token', value);
        }, token);
        console.log("API TOKEN :-> " + token)

        await page.goto("https://rahulshettyacademy.com/client")
        await page.locator("(//button[contains(@class,'btn w-10')])[3]").click()
        await page.locator("button[routerlink='/dashboard/cart']").click();
        //await page.pause(2000)
        const productName = await page.locator("//h3[text()='iphone 13 pro']").textContent()
        console.log("Product Name --> " + productName)
        expect(productName).toEqual("iphone 13 pro")


    });


})