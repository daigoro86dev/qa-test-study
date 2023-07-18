import { faker } from '@faker-js/faker';

export class FakeUser {
  private readonly email: string;
  private readonly password: string;
  private readonly dobDay: string;
  private readonly dobMonth: string;
  private readonly dobYear: string;

  constructor() {
    this.email = faker.internet.email({ provider: 'test.email.com' });
    this.password = faker.internet.password({
      length: 20,
      prefix: 'Test123!',
    });
    this.dobDay = faker.number.int({ min: 1, max: 28 }).toString();
    this.dobMonth = faker.number.int({ min: 1, max: 12 }).toString();
    this.dobYear = faker.number.int({ min: 1940, max: 2000 }).toString();
  }

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }

  getDobDay() {
    return this.dobDay;
  }

  getDobMonth() {
    return this.dobMonth;
  }

  getDobYear() {
    return this.dobYear;
  }
}

export class FakeDataUtil {
  static GetFakeUser() {
    return new FakeUser();
  }
}
