import { Page } from '@playwright/test';

export default class HomePage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goToHomePage(countrySpecificUrl: string) {
    await this.page.goto(countrySpecificUrl);
  }
}
