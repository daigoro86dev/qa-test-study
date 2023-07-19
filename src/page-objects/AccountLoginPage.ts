import { Locator, Page } from '@playwright/test';
import { FakeUser } from '../utils/FakeDataUtil';

export default class AccountLoginPage {
  private readonly page: Page;
  private readonly emailInput: Locator;
  private readonly passwordInput: Locator;
  private readonly emailLoginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('#login-email');
    this.passwordInput = page.locator('#login-password');
    this.emailLoginButton = page.locator("[data-auto-id='login-form-login']");
  }

  async loginUser(user: FakeUser) {
    await this.emailInput.fill(user.getEmail());
    await this.passwordInput.fill(user.getPassword());
    await this.emailLoginButton.click();
  }
}
