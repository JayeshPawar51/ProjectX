import { Page } from "@playwright/test";
import { demoQABasePage } from "./demoQABasePage";

export class demoHomePage extends demoQABasePage{

    constructor(page:Page){
        super(page);
    }

    async clickAlerts(){
        await this.page.getByRole('link', { name: 'Dialog' }).click();;
    }
    async verifyTitle(){
        return this.page.getByText('Alert');
    }
    async acceptAlert(){
        const abc = await this.page.getByText('Accept the Alert').innerText();
        console.log("Alert Title is : ",abc);
            this.page.once('dialog', dialog => {
                console.log(`Dialog message: ${dialog.message()}`);
                dialog.dismiss().catch(() => {});
            });
        await this.page.getByRole('button', { name: 'Simple Alert' }).click();
    }
    async typeNameAlert(){
        const abc = await this.page.getByText('Type your name & accept').innerText();
        console.log("Alert Title is : ",abc);
            this.page.once('dialog', dialog => {
                console.log(`Dialog message: ${dialog.message()}`);
                dialog.accept('Jayesh').catch(() => {});
                
            });
            await this.page.getByRole('button', { name: 'Prompt Alert' }).click();
            await this.page.getByText('Your name is: Jayesh').click();
    }
    async innerMsgAlert(){
        const abc = await this.page.getByRole('button', { name: 'Modern Alert' }).innerText();
        console.log("Alert Title is : ",abc);
            this.page.once('dialog', dialog => {
                console.log(`Dialog message: ${dialog.message()}`);

            });
            await this.page.getByRole('button', { name: 'Modern Alert' }).click();
    }
    
}