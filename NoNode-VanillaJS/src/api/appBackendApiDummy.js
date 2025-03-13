// @ts-check

import { IAppBackendApi } from "./appBackendApiInterface.js";

/**
 * @implements {IAppBackendApi}
 */
export class AppBackendApiDummy {
  constructor() {}

  getUser() {
    return {
      username: "dummy.user",
    };
  }

  getProducts() {
    return [];
  }

  getCustomers() {
    return [];
  }
}
