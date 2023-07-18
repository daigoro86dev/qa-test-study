import { Locator, Page } from '@playwright/test';

export default class CookiesModal {
  private readonly page: Page;
  private readonly acceptCookiesButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.acceptCookiesButton = page.locator(
      '#glass-gdpr-default-consent-accept-button'
    );
  }

  async clickAcceptCookiesButton() {
    await this.acceptCookiesButton.click();
  }
}
