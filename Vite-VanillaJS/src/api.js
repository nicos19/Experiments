// @ts-check

import { timeout } from "./main";

export async function tryLoginAsync(username, password) {
  console.log("Try login for user " + username);
  await timeout(3000);
  /** @type {import("./main").User} */
  const user = {
    id: 1,
    username: username,
    email: "mustermann@mustercompany.de",
    name: "Max Mustermann",
    company: "Mustercompany GmbH",
  };
  console.log("Login successful. User:", user);
  return user;
}
