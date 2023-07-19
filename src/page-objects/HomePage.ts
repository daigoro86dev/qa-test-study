import { Page } from '@playwright/test';

export default class HomePage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goToHomePage() {
    await this.page.goto('');
  }
}
