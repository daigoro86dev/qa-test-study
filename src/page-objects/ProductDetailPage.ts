import { Locator, Page } from '@playwright/test';

export default class ProductDetailPage {
  private readonly page: Page;
  private readonly sizeSelectorButton: Locator;
  private readonly addToCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButton = page.locator("[data-auto-id='add-to-bag']");
  }

  async clickOnSizeSelectorButtonBySize(size: string) {
    await this.page.getByRole('button', { name: size, exact: true }).click();
  }

  async clickAddToCartButton() {
    await this.addToCartButton.click();
  }
}
