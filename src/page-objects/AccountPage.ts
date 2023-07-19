import { Locator, Page } from '@playwright/test';

export default class AccountPage {
  private readonly page: Page;
  private readonly myProfileButton: Locator;
  private readonly logoutAllDevicesButton: Locator;
  private readonly confirmLogoutAllDevicesButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.myProfileButton = page.locator(
      "[data-auto-id='members-home-account-tab']"
    );
    this.logoutAllDevicesButton = page.locator(
      "[data-auto-id='logout-all-devices:button']"
    );
    this.confirmLogoutAllDevicesButton = page.locator(
      "[data-auto-id='logout-all-devices:modal-confirm-button']"
    );
  }

  async clickMyProfileButton() {
    await this.myProfileButton.click();
  }

  async clickLogoutAllDevicesButton() {
    await this.logoutAllDevicesButton.click();
  }

  async clickConfirmLogoutAllDevicesButton() {
    await this.confirmLogoutAllDevicesButton.click();
  }
}
