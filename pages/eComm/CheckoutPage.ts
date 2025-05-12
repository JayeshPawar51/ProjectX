import { BasePage } from './BasePage';
import { Page } from '@playwright/test';

export class CheckoutPage extends BasePage {
  
 
  constructor(page: Page) {
    super(page);
  }

  async emailData(email: string) {
    await this.page.getByRole('textbox', { name: 'Email Address*' }).click();
    await this.page.getByRole('textbox', { name: 'Email Address*' }).fill(email);
  }

  async firstName(firstName: string) {
    await this.page.getByRole('textbox', { name: 'First Name*' }).click();
    await this.page.getByRole('textbox', { name: 'First Name*' }).fill(firstName);
  }

  async lastName(lastName: string) {
    await this.page.getByRole('textbox', { name: 'Last Name*' }).click();
    await this.page.getByRole('textbox', { name: 'Last Name*' }).fill(lastName);
  }
  async streetName(sName: string) {
    await this.page.getByRole('textbox', { name: 'Street Address: Line 1' }).click();
    await this.page.getByRole('textbox', { name: 'Street Address: Line 1' }).fill(sName);
  }
  async countryRegionName() {
    await this.page.getByLabel('Country').selectOption('LT');
    await this.page.locator('select[name="region_id"]').selectOption('484');
  }
  async cityName(cityName: string) {
    await this.page.getByRole('textbox', { name: 'City*' }).click();
    await this.page.getByRole('textbox', { name: 'City*' }).fill(cityName);
  }
  async postalCode(postal: string) {
    await this.page.getByRole('textbox', { name: 'Zip/Postal Code*' }).click();
    await this.page.getByRole('textbox', { name: 'Zip/Postal Code*'}).fill(postal);
  }
  async phoneCode(phone: string) {
    await this.page.getByRole('textbox', { name: 'Phone Number*' }).click();
    await this.page.getByRole('textbox', { name: 'Phone Number*'}).fill(phone);
  }
  async continueButton() {
    await this.page.locator('#checkoutSteps').click();
    await this.page.getByRole('button', { name: 'Next' }).click();
  }
  async paymentMsg() {
    await this.page.getByText('Payment Method', { exact: true }).click();
    return await this.page.locator('#checkout-payment-method-load');
  }
 
  async selectBanking() {
    await this.page.getByRole('radio', { name: 'Check / Money order' }).check();;
  }
  
  async placeOrder() {
    await this.page.getByRole('button', { name: 'Place Order' }).click();
  }
  
  
  async successMsg() {
    return await this.page.locator("//span[text()='Thank you for your purchase!']");
  }
  async confirmationMsg() {
    await this.page.locator("//span[text()='Thank you for your purchase!']").click();
    await this.page.waitForSelector('#maincontent');
    return await this.page.locator('#maincontent');
  }
  async tracYourOrder() {
    return this.page.getByText('You can track your order');
  }
  async createAccButton() {
    await this.page.waitForSelector('#registration');
    return this.page.locator('#registration').getByRole('link', { name: 'Create an Account' });
  }
  async createAccButtonTxt() {
    return this.page.locator('#registration');
  }
}
