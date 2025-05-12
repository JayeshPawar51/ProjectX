import { BasePage } from './BasePage';
import { Page } from '@playwright/test';

export class ProductPage extends BasePage {
  private addToCartButton = this.page.locator('button[title="Add to Cart"]');
  private cartCounter = this.page.locator('.counter-number');

  constructor(page: Page) {
    super(page);
  }

  async navigateToJacketsPage() {
   await this.page.getByRole('menuitem', { name: ' Men' }).click();
   
   await this.page.getByRole('link', { name: 'Jackets' }).click();
  }
  async selectProduct(){
    await this.page.getByRole('link', { name: 'Montana Wind Jacket' }).first().click();
  }
  async addProductToCart() {
    //await this.page.locator('//button[@title="Add to Cart"]').click();
    await this.page.locator('#product-addtocart-button > span').click();
  }

  async getCartItemCount() {
    return await this.cartCounter.textContent();
  }
  
  async verifyProduct() {
    return await this.page.locator('//span[text()="Montana Wind Jacket"]');
  }
  async addToCart() {
    return await this.page.getByRole('button', { name: 'Add to Cart' });
  }
  async verifyPrice() {
    return await this.page.locator('#product-price-414');
  }

  async verifyErrorMsg1() {
    return await this.page.locator('[id="super_attribute\\[144\\]-error"]');
  }
  
  async verifyErrorMsg2() {
    return await this.page.locator('[id="super_attribute\\[93\\]-error"]');
  }
  async selectProductDetails() {
    await this.page.getByRole('option', { name: 'M' }).click();
    await this.page.getByRole('option', { name: 'Black' }).click();
    await this.page.getByRole('spinbutton', { name: 'Qty' }).click();
    await this.page.getByRole('spinbutton', { name: 'Qty' }).fill('3');
  }

  async checkout(){
    
  //await this.page.locator("#html-body > div.page-wrapper > header > div.header.content > div.minicart-wrapper > a").click();
  
  //await this.page.getByRole('link', { name: ' My Cart 3 3 items' }).click(); 
  
  try {
    await this.page.locator('(//span[contains(@class, "text") and text()="My Cart"])[1]').click();
    await this.page.locator('(//span[contains(@class, "text") and text()="My Cart"])[1]').isVisible();
    await this.page.getByRole('link', { name: ' My Cart 3 3 items' }).click();
  } catch (error) {
    await this.page.locator("#html-body > div.page-wrapper > header > div.header.content > div.minicart-wrapper > a > span.text").click
  }

 
  await this.page.locator('#ui-id-28').isVisible();

  
  await this.page.getByRole('button', { name: 'Proceed to Checkout' }).click()

  }

}