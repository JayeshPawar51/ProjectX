import { Page } from "@playwright/test";
import { flipBase } from "./flipkartBasePage";


export class flipMainPage extends flipBase{

    constructor(page:Page){
        super(page);
    }

    async searchBox(){
        await this.page.getByPlaceholder('Search for Products, Brands and More').fill('Laptop');
        await this.page.press('input[name="q"]', 'Enter');
        
        // Wait for the price elements to load (adjust the selector or wait logic as per the actual page behavior)
        await this.page.waitForSelector('//div[@class="Nx9bqj _4b5DiR"]');
        
        const priceMin = await this.page.$$('//div[@class="Nx9bqj _4b5DiR"]' );
        const priceAbc: number[] = [];
        
        for (const elm of priceMin) {
            const text = await elm.textContent();
            if (text) {
                const abc = parseInt(text.replace(/[^0-9]/g, ''));
                if (!isNaN(abc)) {
                    priceAbc.push(abc);
                }
            }
        }
        
            const minCost = Math.min(...priceAbc);
            console.log('Min price is:', minCost);
    }}        
