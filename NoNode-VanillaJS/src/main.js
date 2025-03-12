// @ts-check

import { WebApi } from "./api/webApi.js";
import { Configuration } from "./config/config.js";
import { Page } from "./page.js";

console.log("main executing...");

async function initializeAsync() {
  await Configuration.initializeAsync();
}

addEventListener("DOMContentLoaded", async (event) => {
  await initializeAsync();

  const page1 = new Page();
  document.body.appendChild(page1.root);

  console.log(Configuration.env);

  console.log(WebApi.appBackend.getUser());
});
