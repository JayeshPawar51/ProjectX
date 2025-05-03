import { Page } from "@playwright/test";

export class demoQABasePage{

    protected page :Page;
    constructor(page:Page){
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://letcode.in/test/');
    }
}