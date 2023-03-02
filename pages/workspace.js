import { WebActions } from '../lib/webAction';

let webaction = new WebActions;

export class WorkSpace {

    constructor(page) 
    {
        this.page = page
        webaction = new WebActions(this.page)
        this.ELEMENTS = '//p[@class="card-header-title is-size-3"]'
    }

    async verifyElementCount() 
    {
        await webaction.countElements(this.ELEMENTS, 21)
    }



}
