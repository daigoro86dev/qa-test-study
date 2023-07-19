import { Locator, Page, expect } from '@playwright/test';
import { FakeUser } from '../../utils/FakeDataUtil';

export default class RegistrationModal {
  private readonly emailInput: Locator;
  private readonly emailInputAlt: Locator;
  private readonly passwordInput: Locator;
  private readonly passwordInputAlt: Locator;
  private readonly dobDayInput: Locator;
  private readonly dobMonthInput: Locator;
  private readonly dobYearInput: Locator;
  private readonly marketEmailCheckbox: Locator;
  private readonly marketEmailCheckboxAlt: Locator;
  private readonly marketPaidMediaCheckbox: Locator;
  private readonly termsAndConditionsCheckbox: Locator;
  private readonly registerButton: Locator;
  private readonly closeModalButton: Locator;
  private readonly continueRegistrationButton: Locator;

  constructor(page: Page) {
    this.emailInput = page.locator('#registration-email-field');
    this.emailInputAlt = page.locator('#email');
    this.passwordInput = page.locator('#registration-password-field');
    this.passwordInputAlt = page.locator('#password');
    this.dobDayInput = page.locator('#registration-dob-fields-day');
    this.dobMonthInput = page.locator('#registration-dob-fields-month');
    this.dobYearInput = page.locator('#registration-dob-fields-year');
    this.marketEmailCheckbox = page.locator('#doc-mrkt-email-club');
    this.marketEmailCheckboxAlt = page.locator(
      '[data-auto-id="explicit-consents"] input'
    );
    this.marketPaidMediaCheckbox = page.locator('#doc-mrkt-paidmedia');
    this.termsAndConditionsCheckbox = page.locator('#doc-tnc-memb');
    this.registerButton = page.locator(
      "[data-auto-id='registration-submit-button']"
    );
    this.closeModalButton = page.locator('[data-auto-id="ef-close"]');
    this.continueRegistrationButton = page.locator(
      '[data-auto-id="login-auto-flow-form-button"]'
    );
  }

  async registerUser(fakeUser: FakeUser) {
    await this.emailInput.fill(fakeUser.getEmail());
    await this.passwordInput.fill(fakeUser.getPassword());
    await this.dobDayInput.fill(fakeUser.getDobDay());
    await this.dobMonthInput.fill(fakeUser.getDobMonth());
    await this.dobYearInput.fill(fakeUser.getDobYear());
    await this.marketEmailCheckbox.check();
    await this.marketPaidMediaCheckbox.check();
    await this.termsAndConditionsCheckbox.check();
    await this.registerButton.click();
    await expect(this.registerButton).not.toBeVisible({ timeout: 100000 });
  }

  async registerUserMultiStep(fakeUser: FakeUser) {
    await this.emailInputAlt.fill(fakeUser.getEmail());
    await this.marketEmailCheckboxAlt.check();
    await this.continueRegistrationButton.click();
    await this.passwordInputAlt.fill(fakeUser.getPassword());
    await this.registerButton.click();
    await this.closeModalButton.click();
  }
}
