import { Locator, Page } from '@playwright/test';

export default class LoginModal {
  private readonly page: Page;
  private readonly emailInput: Locator;
  private readonly continueLoginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('#login-register-auto-flow-input');
    this.continueLoginButton = page.locator(
      "[data-auto-id='login-auto-flow-form-button']"
    );
  }
}
