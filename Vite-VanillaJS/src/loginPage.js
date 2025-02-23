// @ts-check

import { tryLoginAsync } from "./api";
import { Component } from "./component";
import { asHTMLButtonElement, asHTMLInputElement } from "./htmlHelper";
import { globalUser } from "./main";
import { html } from "./htmlHelper";

export class LoginPageNew extends Component {
  /** @param {Component} parent */
  constructor(parent) {
    super(parent);
  }

  get template() {
    return html`
      <div style="background-color: black; width: 100%; height: 100%;">
        <form style="display: flex; flex-direction: column;">
          <label for="input-username">Benutzername</label>
          <input id="input-username" />

          <label for="input-password">Passwort</label>
          <input id="input-password" />

          <button type="button">Anmelden</button>
        </form>
      </div>
    `;
  }

  attachEventListeners() {
    asHTMLButtonElement(this.root.querySelector("form button")).addEventListener("click", () => this.onClickLogin());
  }

  async onClickLogin() {
    const fetchedUser = await tryLoginAsync(asHTMLInputElement(this.root.querySelector("#input-username")).value, asHTMLInputElement(this.root.querySelector("#input-password")).value);
    if (fetchedUser != null) {
      globalUser.set(fetchedUser);
    }
  }
}

// export const LoginPage = () => {
//   const element = document.createElement("div");
//   const children = [];
//   element.style = "background-color: black; width: 100%; height: 100%;";
//   element.innerHTML = html`
//     <form style="display: flex; flex-direction: column;">
//       <label for="input-username">Benutzername</label>
//       <input id="input-username" />

//       <label for="input-password">Passwort</label>
//       <input id="input-password" />

//       <button type="button">Anmelden</button>
//     </form>
//   `;
//   const loginSuccessfulView = LoginSuccessfulView();
//   element.appendChild(loginSuccessfulView.element);
//   children.push(loginSuccessfulView);

//   async function onClickLogin() {
//     const fetchedUser = await tryLoginAsync(document.getElementById("input-username").value, document.getElementById("input-password").value);
//     if (fetchedUser != null) {
//       globalUser.set(fetchedUser);
//     }
//   }

//   function destroy() {
//     children.forEach((c) => c.destroy());
//   }

//   element.querySelector("form button").addEventListener("click", onClickLogin);
//   return { element, destroy };
// };

// export const LoginSuccessfulView = () => {
//   const element = document.createElement("div");
//   const children = [];
//   element.style = "background-color: green; width: 100%; height: 100%;";
//   element.hidden = globalUser.value == undefined;
//   element.innerHTML = html`
//     <h3>Anmeldung erfolgreich. Angemeldet als:</h3>
//     <div>Benutzername: <span class="success-view-username">${globalUser.value.username}</span></div>
//     <div>Name: <span class="success-view-name">${globalUser.value.name}</span></div>
//     <div>E-Mail: <span class="success-view-email">${globalUser.value.email}</span></div>
//     <div>Unternehmen: <span class="success-view-company">${globalUser.value.company}</span></div>
//   `;
//   const unsubscribeForUser = globalUser.subscribeForStateChange((newUser) => {
//     element.hidden = globalUser.value == undefined;
//     if (newUser != undefined) {
//       element.querySelector(".success-view-username").innerText = globalUser.value.username;
//       element.querySelector(".success-view-name").innerText = globalUser.value.name;
//       element.querySelector(".success-view-email").innerText = globalUser.value.email;
//       element.querySelector(".success-view-company").innerText = globalUser.value.company;
//     }
//   });

//   function destroy() {
//     children.forEach((c) => c.destroy());
//     unsubscribeForUser();
//   }
//   return { element, destroy };
// };
