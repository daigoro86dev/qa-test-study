import { Locator, Page, expect } from '@playwright/test';

export default class ProductsPage {
  private readonly page: Page;
  private readonly productCards: Locator;
  private readonly productCount: Locator;

  // plp-header-bar-products-count

  constructor(page: Page) {
    this.page = page;
    this.productCards = page.locator("[data-auto-id='glass-hockeycard-link']");
    this.productCount = page.locator(
      "[data-auto-id='plp-header-bar-products-count']"
    );
  }

  getProductCards() {
    return this.productCards;
  }

  async clickOnProductCardByIndex(cardIndex: number) {
    await expect(this.productCount).not.toContainText('[0]');
    await this.productCards.nth(cardIndex).click();
  }
}
