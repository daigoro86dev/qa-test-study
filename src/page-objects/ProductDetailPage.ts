import { Locator, Page, expect } from '@playwright/test';

export default class ProductDetailPage {
  private readonly page: Page;
  private readonly addToCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButton = page.locator("[data-auto-id='add-to-bag']");
  }

  async clickOnSizeSelectorButtonBySize(size: string) {
    await this.page
      .locator("[data-auto-id='size-selector']")
      .getByRole('button', { name: size, exact: true })
      .click({ force: true });
  }

  async clickAddToCartButton() {
    await this.addToCartButton.click();
    await this.page.waitForTimeout(5000);
    if (await this.page.locator('#sec-text-if').isVisible()) {
      await expect(this.page.locator('#sec-text-if')).not.toBeVisible({
        timeout: 30000,
      });
      await this.addToCartButton.click();
    }
  }
}
