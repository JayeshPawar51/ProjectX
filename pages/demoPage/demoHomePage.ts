import { expect, Page } from "@playwright/test";
import { demoQABasePage } from "./demoQABasePage";
import { demoHomeData } from "../../data/demoHomeData";

export class demoHomePage extends demoQABasePage{

    constructor(page:Page){
        super(page);
    }

    async clickAlerts(){
        await this.page.getByRole('link', { name: 'Dialog' }).click();;
    }
    async verifyTitle(){
        return this.page.getByText(demoHomeData.verifyTitle);// demo home data is passing values
    }
    async acceptAlert(){
        const abc = await this.page.getByText(demoHomeData.acceptAlert).innerText();
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
                dialog.accept(demoHomeData.typeName).catch(() => {});
                
            });
            await this.page.getByRole('button', { name: 'Prompt Alert' }).click();
            await this.page.getByText(`Your name is: ${demoHomeData.typeName}`).click();
    }
    async innerMsgAlert(){
        const abc = await this.page.getByRole('button', { name: 'Modern Alert' }).innerText();
        console.log("Alert Title is : ",abc);
            this.page.once('dialog', dialog => {
                console.log(`Dialog message: ${dialog.message()}`);

            });
            await this.page.getByRole('button', { name: 'Modern Alert' }).click();
    }
    async selectradio(){

        await expect(this.page.locator('app-test-site')).toContainText(demoHomeData.radio);
        await this.page.getByRole('link', { name: 'Toggle' }).click();

    }
    async verifyradioHeader()
    {
        return this.page.getByText(demoHomeData.verifyHeader)
    }
    async radioButton(){
        
       
        await this.page.getByText('Yes').first().click();  
        await this.page.locator('#one').check();
        await this.page.locator('#nobug').check();
        
    }
    async verifyRadioText(){
        return this.page.locator('app-radio')
    }
    async verifyDisabledButton(){
        return this.page.getByText('Maybe');
    }

    async checkBox(){
        await expect(this.page.locator('app-radio')).toContainText(demoHomeData.checkbocText);
        await this.page.getByRole('checkbox', { name: 'Remember me' }).uncheck();
        await this.page.getByRole('checkbox', { name: 'I agree to the FAKE terms and' }).check();
      
        const isChecked = await this.page.getByRole('checkbox', { name: 'I agree to the FAKE terms and' }).isChecked();
        expect(isChecked).toBe(true);
    }

    async selectDropdown(){
        await this.page.getByRole('link', { name: 'Drop-Down' }).click();
        await expect(this.page.getByRole('heading')).toContainText(demoHomeData.verifydropdownText);
    }
    async dropdown(){
        await this.page.goto('https://letcode.in/dropdowns');
        await expect(this.page.locator('app-dropdown')).toContainText(demoHomeData.dropdownText);
        await expect(this.page.locator('#fruits')).toBeVisible();
        await this.page.locator('#fruits').selectOption(demoHomeData.fruit);


        await expect(this.page.locator('app-dropdown')).toContainText(demoHomeData.verifyFruitText);
        await expect(this.page.locator('app-dropdown')).toContainText(demoHomeData.verifyHeroText);
        
        await this.page.locator('#superheros').selectOption(['Ant-Man', 'Aquaman']);
    }

}