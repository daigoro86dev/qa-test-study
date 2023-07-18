import * as dotenv from 'dotenv';

export default class EnvMangerUtil {
  static LoadEnv() {
    dotenv.config({ path: `./envs/commons.env` });
  }

  static GetBaseUrl() {
    return process.env.BASE_URL;
  }
}
