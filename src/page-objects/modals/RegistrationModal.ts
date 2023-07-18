import { Locator, Page } from '@playwright/test';
import { FakeUser } from '../../utils/FakeDataUtil';

export default class RegistrationModal {
  private readonly emailInput: Locator;
  private readonly passwordInput: Locator;
  private readonly dobDayInput: Locator;
  private readonly dobMonthInput: Locator;
  private readonly dobYearInput: Locator;
  private readonly marketEmailCheckbox: Locator;
  private readonly marketPaidMediaCheckbox: Locator;
  private readonly termsAndConditionsCheckbox: Locator;
  private readonly registerButton: Locator;

  constructor(page: Page) {
    this.emailInput = page.locator('#registration-email-field');
    this.passwordInput = page.locator('#registration-password-field');
    this.dobDayInput = page.locator('#registration-dob-fields-day');
    this.dobMonthInput = page.locator('#registration-dob-fields-month');
    this.dobYearInput = page.locator('#registration-dob-fields-year');
    this.marketEmailCheckbox = page.locator('#doc-mrkt-email-club');
    this.marketPaidMediaCheckbox = page.locator('#doc-mrkt-paidmedia');
    this.termsAndConditionsCheckbox = page.locator('#doc-tnc-memb');
    this.registerButton = page.locator(
      "[data-auto-id='registration-submit-button']"
    );
  }

  async registerUser(fakeUser: FakeUser) {
    await this.emailInput.fill(fakeUser.getEmail());
    await this.passwordInput.fill(fakeUser.getPassword());
    await this.dobDayInput.fill(fakeUser.getDobDay());
    await this.dobMonthInput.fill(fakeUser.getDobMonth());
    await this.dobYearInput.fill(fakeUser.getDobYear());
    await this.marketEmailCheckbox.check({ force: true });
    await this.marketPaidMediaCheckbox.check();
    await this.termsAndConditionsCheckbox.check();
    await this.registerButton.click();
    console.log('Test');
  }
}
