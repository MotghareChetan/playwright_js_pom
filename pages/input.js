// @ts-check
import { expect } from '@playwright/test';
import { inputForm } from '../utils/inputForm';
import { WebActions } from '../lib/webAction';

let webaction = new WebActions;

export class InputPage {

    constructor(page) {
        this.page = page
        // @ts-ignore
        webaction = new WebActions(this.page)
        this.INPUT_ELEMENT = `text=Edit`
        this.FULL_NAME = `#fullName`
        this.APPEND_TEXT = `#join`
        this.GET_TEXT = `#getMe`
        this.CLEAR_TEXT = `#clearMe`
        this.NO_EDIT = `#noEdit`
        this.READ_ONLY = `#dontWrite`
    }

    async clickOnInput() { await webaction.clickElement(this.INPUT_ELEMENT) }

    async enterName() { await webaction.enterElementText(this.FULL_NAME, inputForm.FullName) }

    async appendText() {

        await webaction.typeTextAtEnd(this.APPEND_TEXT, 'Chetan')
 }

    async getText() {

        await webaction.typeTextAtEnd(this.GET_TEXT, 'ortonikc')
    }

    async clearText() { }

    async checkNoEdit() { }

    async checkReadOnly() { }



}