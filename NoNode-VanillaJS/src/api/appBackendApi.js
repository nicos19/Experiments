// @ts-check

import { IAppBackendApi } from "./appBackendApiInterface.js";

/**
 * @implements {IAppBackendApi}
 */

export class AppBackendApi {
  /**
   * @param {import("../config/config").ConfigEnv} environment
   */
  constructor(environment) {}

  getUser() {
    return {
      username: "max.mustermann",
    };
  }

  getProducts() {
    return [];
  }

  getCustomers() {
    return [];
  }
}
