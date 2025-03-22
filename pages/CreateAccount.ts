import { BasePage } from './BasePage';
import { Page } from '@playwright/test';

export class CreateAccountForm extends BasePage {
  
 
  constructor(page: Page) {
    super(page);
  }

  async createAccount() {
    await this.page.locator('#registration').getByRole('link', { name: 'Create an Account' }).click();
  }
  async firstName(firstName: string) {
    await this.page.getByRole('textbox', { name: 'First Name*' }).click();
    await this.page.getByRole('textbox', { name: 'First Name*' }).fill(firstName);
  }

  async lastName(lastName: string) {
    await this.page.getByRole('textbox', { name: 'Last Name*' }).click();
    await this.page.getByRole('textbox', { name: 'Last Name*' }).fill(lastName);
  }
  async emailData(email: string) {
    await this.page.getByRole('textbox', { name: 'Email*' }).click();;
    await this.page.getByRole('textbox', { name: 'Email*' }).fill(email);
  }
  async selectPassword(pass: string) {
    await this.page.getByRole('textbox', { name: 'Password*' }).click();
    await this.page.getByRole('textbox', { name: 'Password*' }).fill(pass);
  }
  async confirmPassword(cpass: string) {
    await this.page.getByRole('textbox', { name: 'Confirm Password *' }).click();
    await this.page.getByRole('textbox', { name: 'Confirm Password *' }).fill(cpass);
  }
  async createAccountButton() {
    await this.page.getByRole('button', { name: 'Create an Account' }).click();
  }
  async tracAccount() {
    console.log("Success")
    return this.page.locator('//span[text()="My Account"]');

  }
  
}