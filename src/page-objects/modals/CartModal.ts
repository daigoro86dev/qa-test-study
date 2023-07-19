import { Locator, Page } from '@playwright/test';

export default class CookiesModal {
  private readonly page: Page;
  private readonly addedToCartHeader: Locator;
  private readonly membershipGatewayButton: Locator;
  private readonly viewCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.membershipGatewayButton = page.locator(
      "[data-auto-id='membership-gateway-btn']"
    );
    this.viewCartButton = page.locator("[data-auto-id='view-bag-desktop']");
    this.addedToCartHeader = page.locator(
      "[data-auto-id='added-to-bag-modal-title']"
    );
  }

  async clickMembershipGatewayButton() {
    await this.membershipGatewayButton.click();
  }

  async clickViewCartButton() {
    await this.addedToCartHeader.isVisible();
    await this.viewCartButton.click();
  }
}
