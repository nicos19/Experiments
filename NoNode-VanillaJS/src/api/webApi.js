// @ts-check

import { Configuration } from "../config/config.js";
import { AppBackendApi } from "./appBackendApi.js";
import { AppBackendApiDummy } from "./appBackendApiDummy.js";
import { IAppBackendApi } from "./appBackendApiInterface.js";

export class WebApi {
  /** @type {IAppBackendApi} */
  static get appBackend() {
    if (Configuration.env === "standalone") {
      return new AppBackendApiDummy();
    } else {
      return new AppBackendApi(Configuration.env);
    }
  }
}
