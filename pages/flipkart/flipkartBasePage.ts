import {Page} from '@playwright/test';

export class flipBase{

    public page :Page;

    constructor(page:Page){
        this.page = page;
    }

    async goto(){
        await this.page.goto('https://www.flipkart.com/');
    }
}