// @ts-check

/** @typedef {"standalone" | "vagrant" | "staging" | "production"} ConfigEnv */

export class Configuration {
  /** @type {ConfigEnv} */
  static env;

  static async initializeAsync() {
    try {
      const response = await fetch(new URL(`./.env?url`, import.meta.url));
      if (response.ok) {
        Configuration.env = /** @type {ConfigEnv} */ (await response.text());
      } else {
        throw new Error(`response indicating no success: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
      Configuration.env = "standalone";
    }
  }
}
