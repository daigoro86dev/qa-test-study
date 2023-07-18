import { Locator, Page } from '@playwright/test';

export default class ProductsPage {
  private readonly page: Page;
  private readonly productCards: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productCards = page.locator("[data-auto-id='glass-hockeycard-link']");
  }

  getProductCards() {
    return this.productCards;
  }

  async clickOnProductCardByIndex(cardIndex: number) {
    await this.productCards.nth(cardIndex).click();
  }
}
