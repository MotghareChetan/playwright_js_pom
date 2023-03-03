// @ts-check
import { expect } from '@playwright/test';
import { WebActions } from '../lib/webAction';
let webaction = new WebActions;

export class Header {

    constructor(page) {
        this.page = page
        // @ts-ignore
        webaction = new WebActions(this.page)
        this.WORK_SPACE = `#testing`
        this.COURSES = `text= Courses`
        this.GROOMING = `text= Grooming`
 }

    async validateHeaderElements() {
        await webaction.verifyElementText(this.WORK_SPACE, 'Work-Space');
        await webaction.verifyElementText(this.COURSES, 'Courses')
        await webaction.verifyElementText(this.GROOMING, 'Grooming')

    }

    async clickOnWorkSpace() {
        await webaction.clickElement(this.WORK_SPACE)
    }
}