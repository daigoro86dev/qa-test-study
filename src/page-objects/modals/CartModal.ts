import { Locator, Page } from '@playwright/test';

export default class CookiesModal {
  private readonly page: Page;
  private readonly membershipGatewayButton: Locator;
  private readonly viewCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.membershipGatewayButton = page.locator(
      "[data-auto-id='membership-gateway-btn']"
    );
    this.viewCartButton = page
      .locator("[data-auto-id='added-to-modal'] [href='/cart']")
      .first();
  }

  async clickMembershipGatewayButton() {
    await this.membershipGatewayButton.click();
  }

  async clickViewCartButton() {
    await this.viewCartButton.click();
  }
}
