import { BasePage } from './BasePage';
import { Page } from '@playwright/test';

export class HomePage extends BasePage {
  
  constructor(page: Page) {
    super(page);
  }

  async navigateToMenPage() {
    //await this.page.locator(`text=${menuName}`).click();
    await this.page.getByRole('menuitem', { name: ' Men' }).click();
  }
  async verifyMenPage() {
    return await this.page.getByLabel('Men').locator('span');
  }
  async navigateToWomenPage() {
    await this.page.getByRole('menuitem', { name: ' Women' }).click();
  }
  async verifyWomenPage() {
    return await this.page.getByLabel('Women').locator('span');
  }
  async navigateToGearPage() {
    await this.page.getByRole('menuitem', { name: ' Gear' }).click();
  }
  async verifyGearPage() {
    return await this.page.getByLabel('Gear').locator('span');
  }
  async navigateSort(){
    await this.page.getByRole('link', { name: 'Tees', exact: true }).click();  
  }
  async priceSort(sort : string) {
    await this.page.getByText('Sort By').click();
    await this.page.getByLabel('Sort By').selectOption(sort);
  }
  async verifyPriceSort() {
    await this.page.goto('https://magento-2.showcase-wallee.com/men/tops-men/tees-men.html?product_list_order=price');
    await this.page.locator('#product-price-462').getByText('CHF').click();
    return this.page.locator('#product-price-462');
  }
  async verifyNameSort() {
    await this.page.goto('https://magento-2.showcase-wallee.com/men/tops-men/tees-men.html?product_list_order=name');
    await this.page.locator('#product-price-462').getByText('CHF').click();
    return this.page.locator('#product-item-info_558');
  }
}