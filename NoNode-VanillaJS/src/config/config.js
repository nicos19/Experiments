// @ts-check

/** @typedef {"standalone" | "vagrant" | "staging" | "production"} ConfigEnv */

export class Configuration {
  /** @type {ConfigEnv} */
  static env;

  static async initializeAsync() {
    const response = await fetch(new URL(`./.env?url`, import.meta.url));
    Configuration.env = /** @type {ConfigEnv} */ (await response.text());
  }
}
