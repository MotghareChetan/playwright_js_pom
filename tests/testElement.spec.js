import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
    test.beforeEach(async ({ page }) => {
        // Go to the starting url before each test.
        await page.goto("https://letcode.in/test");
    });

    /*test("main navigation", async ({ page }) => {
        // Assertions use the expect API.
        await expect(page).toHaveURL("https://letcode.in/test");
    });*/

    test("input", async ({ page }) => {
        await page.locator(`text=Edit`).click()
        await page.locator('Enter first & last name').click();
        await page.locator('Enter first & last name').fill('Chetan Motghare');


        const join = await page.locator('#join')
        await join.focus()
        await page.keyboard.press('End')
        await join.type(" Learner")

        //await page.locator('#join').fill('I am good not Programmer');
        const text = await page.locator('#getMe').getByText()
        await page.getAttribute("#getMe", "value")
        console.log(text)
        await page.locator('#clearMe').clear()
        //await page.locator().isEnabled()


    });

    test("Button", async ({ page }) => {

        // await page.goto('https://letcode.in/test');
        await page.getByRole('link', { name: 'Click' }).click();

        //navigate back
        await page.getByRole('button', { name: 'Goto Home' }).click();
        await page.goBack();

        //color
        /* const btn = await page.locator('#color');
         
         const btn_color = await btn.evaluate((ele) => {
             return window.getComputedStyle(ele).getPropertyValue("background-color");
         })
         console.log(btn_color)
         expect(btn_color).toBe("rgb(138, 77, 118)")*/


        //height and widht using bondinbox playwright method
        const btn_element = await page.locator("#property").boundingBox();
        console.log(btn_element.height)
        console.log(btn_element.width)


        await page.click('button:has-text("Button Hold!")', { delay: 4000 });
        const ele = await page.$("h2")
        expect(await ele.textContent()).toContain('long pressed')

    });

    test('DropDonw', async ({ page }) => {
        await page.locator('//a[@href="/dropdowns"]').click();

        const fruits = await page.locator('#fruits');
        fruits.selectOption('2');
        const msg = await page.locator('//div[@class="notification is-success"]')
        expect(await msg.textContent()).toContain('You have selected Orange');
        console.log(await msg.textContent())




        const heros = await page.locator('#superheros');
        heros.selectOption([{ 'value': 'cm' }, { 'label': 'Batwoman' }, { 'index': 4 }])



        await page.locator('#lang').selectOption('swift');
        await page.locator('#country').selectOption('India');
    });



    test('Alerts', async ({ page }) => {

        await page.getByRole('link', { name: 'Work-Space' }).click();
        await page.getByRole('link', { name: 'Dialog' }).click();


        page.on('dialog', (dialog) => {
            console.log(`Dialog message: ${dialog.message()}`);
            //  expect(dialog.message()).toContain('LetCode')
            dialog.accept()
            console.log("simple alert accepted")
            dialog.type('Chetan')
        });


        //await page.getByRole('button', { name: 'Simple Alert' }).click();


        /* page.on('dialog', (dialog) => {
             console.log(`Dialog message: ${dialog.message()}`);
             //console.log('Default valu' = dialog.defaultValue)
         });
         await page.getByRole('button', { name: 'Confirm Alert' }).click();
 
 
 
         /*page.on('dialog', dialog => {
             console.log(`Dialog message: ${dialog.message()}`);
             dialog.dismiss().catch(() => { });
         });*/


       await page.getByRole('button', { name: 'Prompt Alert' }).click();


    }) 



    test('test', async ({ page }) => {

        await page.getByRole('link', { name: 'Inner HTML' }).click();

        const firstFrame = await page.frame({name:"firstFr"});
        await firstFrame.locator("input[name='fname']").fill("chetan");
        await firstFrame.locator("input[name='lname']").fill("Motghare");

        //inner frame 

        const Innerframe = firstFrame.childFrames();
        console.log(Innerframe.length);
        
        await Innerframe[1].fill("input[name='email']","chetan@appmetry.com")
        
        /*const inner = await page.frameLocator('app-frame-content iframe');
        firstFrame.locator('Enter name').click();
        firstFrame.locator('Enter name').fill('Chetan');

        firstFrame.locator('Enter email').click();
        firstFrame.locator('Enter email').fill('Motghare');

        firstFrame.inner.locator('Enter email').click();
        firstFrame.inner.locator('Enter email').fill('chetan@appmetry.com');
        firstFrame.inner.locator('Enter email').click();
        await page.frameLocator('iframe[name="firstFr"]').getByText('You have entered Chetan Motghare').click();
    */});
})