import { Locator, Page } from '@playwright/test';

export default class TopNavbar {
  private readonly page: Page;
  private readonly registerModalAnchor: Locator;
  private readonly customerLoginAnchor: Locator;
  private readonly cartButton: Locator;
  private readonly navigationItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.registerModalAnchor = page.locator("[data-auto-id='register-modal']");
    this.customerLoginAnchor = page.locator(
      "[data-auto-id='customer-info-button']"
    );
    this.cartButton = page.locator("[data-auto-id='cart-button']");
    this.navigationItems = page.locator(
      "[data-auto-id='cms-footer-dt-main'] [data-auto-id='navigation-link']"
    );
  }

  async clickRegisterModalAnchor() {
    await this.registerModalAnchor.click();
  }

  async clickCustomerLoginAnchor() {
    await this.customerLoginAnchor.click();
  }

  async clickCartButton() {
    await this.cartButton.click();
  }

  async clickOnAnchorByText(text: string) {
    await this.navigationItems.filter({ hasText: text }).click();
  }
}
