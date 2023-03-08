//import { test } from '@playwright/test'
const { test, expect, request } = require('@playwright/test');


const loginURI = "https://rahulshettyacademy.com/api/ecom/auth/login";
const loginPayload = { userEmail: "chintu.moto@gmail.com", userPassword: "Test@1234" }
const orderAPI_URI = " https://rahulshettyacademy.com/api/ecom/order/create-order";
const orderPayload = { orders: [{ country: "Pakistan", productOrderedId: "6262e95ae26b7e1a10e89bf0" }] };
let token;
let orderID;

test.describe("Test suit", () => {

    test.beforeAll(async () => {
        const apiContext = await request.newContext();
        const apiResponse = await apiContext.post(loginURI, { data: loginPayload })
        expect(apiResponse.ok()).toBeTruthy();
        const loginResponse = await apiResponse.json();
        token = loginResponse.token;

        //CREATE ORDER

        const orderResponse = await apiContext.post(orderAPI_URI, {
            data: orderPayload,
            headers: {

                'Authorization': token,
                'Content-type': 'application/json'
            },
        })

        const orderJson = await orderResponse.json()
        console.log(orderJson)
        orderID = orderJson.orders[0];



    });

    test.afterAll(async () => {
        console.log("API token extraction DONE")

    });

    test('Login Test', async ({ page }) => {

        await page.addInitScript(value => {
            window.localStorage.setItem('token', value);
        }, token);
        console.log("API TOKEN :-> " + token)
        console.log("OrderID --> " + orderID)

        await page.goto("https://rahulshettyacademy.com/client")
        await page.locator("button[routerlink='/dashboard/myorders']").click()
        await page.locator("tbody").waitFor();
        const rows = await page.locator("tbody tr")


        for (let i = 0; i < await rows.count(); i++) {
            const rowOrderID = await rows.nth(i).locator("th").textContent();
            if (orderID.includes(rowOrderID)) {
                await rows.nth(i).locator("button").first().click();
                break;
            }
        }

        const orderDetails = await page.locator(".col-text").textContent();
        expect(orderID.includes(orderDetails)).toBeTruthy();


    });


})