import { expect } from '@playwright/test';

export class WebActions {
   
    constructor(page) {
        this.page = page;
    }

    async navigateToURL(url) {
        await this.page.goto(url);
    }

    async clickElement(locator) {
        await this.page.click(locator);
    }

    async clickElementJS(locator) {
        await this.page.$eval(locator, (element) => element.click());
    }

    async boundingBoxClickElement(locator) {
        await this.delay(1000);
        const elementHandle = await this.page.$(locator);
        const box = await elementHandle.boundingBox();
        await this.page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
    }

    async enterElementText(locator, text) {
        await this.page.fill(locator, text);
    }

    async dragAndDrop(dragElementLocator, dropElementLocator) {
        await this.page.dragAndDrop(dragElementLocator, dropElementLocator);
    }

    async selectOptionFromDropdown(locator, option) {
        const selectDropDownLocator = await this.page.$(locator);
        selectDropDownLocator.type(option);
    }

    async getTextFromWebElements(locator) {
        return this.page.$$eval(locator, elements => elements.map(item => item.textContent.trim()));
    }

    async keyPress(locator, key) {
        this.page.press(locator, key);
    }

    async verifyElementText(locator, text) {
        const textValue = await this.page.textContent(locator)
        console.log(textValue)
    }

    async countElements(locator, expectedCount) {
        const elements = await this.page.$$(locator);
        const actualCount = elements.length;

        expect(actualCount).toEqual(expectedCount);
        console.log(actualCount)
    }

    async typeText(locator,text)
    {
        await this.page.focus(locator)
        await this.page.press(locator,'End')
        await this.page.typeText(locator,text)
    }

    async typeTextAtEnd(locator, text) {
        const element = await this.page.locator(locator).focus();
        //await this.page.locator(locator).focus();
    
        await element.focus();
        await element.type(text, { delay: 100 });
        await element.press('End');
      }

}



