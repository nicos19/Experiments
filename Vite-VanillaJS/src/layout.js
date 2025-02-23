// @ts-check

import { Component } from "./component";
import { asHTMLElement, html } from "./htmlHelper";
import { globalUser } from "./main";

// export function initializeLayout() {
//   const body = document.body;
//   body.appendChild(Header().element);
//   body.appendChild(Main().element);
//   body.appendChild(Footer().element);
// }

// const Header = () => {
//   const element = document.createElement("header");
//   element.style = "background-color: #636363; width: 100%; text-align: center;";
//   element.innerHTML = html` <div style="">Header</div> `;
//   return { element };
// };

// const Main = () => {
//   const element = document.createElement("main");
//   element.style = "background-color: #3d3d3d; width: 100%; text-align: center; height: 100%; flex-grow: 2;";
//   element.innerHTML = html` <div style="">Main</div> `;
//   return { element };
// };

// const Footer = () => {
//   const element = document.createElement("footer");
//   element.style = "background-color: #636363; width: 100%; text-align: center;";
//   element.innerHTML = html` <div style="">Footer</div> `;
//   return { element };
// };

export class Layout extends Component {
  constructor() {
    super(undefined, document.body); // Layout has no parent component

    this.header = new HeaderNew(this);
    this.main = new MainNew(this);
    this.footer = new FooterNew(this);

    this.root.replaceChild(this.header.root, asHTMLElement(this.root.querySelector("#header-placeholder")));
    this.root.replaceChild(this.main.root, asHTMLElement(this.root.querySelector("#main-placeholder")));
    this.root.replaceChild(this.footer.root, asHTMLElement(this.root.querySelector("#footer-placeholder")));
  }

  get template() {
    return html` <div id="header-placeholder"></div>
      <div id="main-placeholder"></div>
      <div id="footer-placeholder"></div>`;
  }
}

export class HeaderNew extends Component {
  constructor(parent) {
    super(parent);
    globalUser.subscribeForStateChange((newUser) => {
      this.onUserChange(newUser);
    });
  }

  get template() {
    return html`
      <header style="background-color: #636363; width: 100%; display: flex; justify-content: space-between;">
        <div>Header</div>
        <div>Benutzer: <span class="header-user-info">${this.getHeaderUserInfo(globalUser.value)}</span></div>
      </header>
    `;
  }

  /**
   * Gets the string value with info about currently logged in user that should be displayed in the header.
   * @param {import("./main").User | undefined} user
   * @returns {string}
   */
  getHeaderUserInfo(user) {
    return user ? user.username : "Nicht angemeldet";
  }

  /**
   * Handles change of globalUser state.
   * @param {import("./main").User} newUser
   */
  onUserChange(newUser) {
    asHTMLElement(this.root.querySelector(".header-user-info")).innerText = this.getHeaderUserInfo(newUser);
  }
}

export class MainNew extends Component {
  constructor(parent) {
    super(parent);
  }

  get template() {
    return html`
      <main style="background-color: #3d3d3d; width: 100%; text-align: center; height: 100%; flex-grow: 2;">
        <div>Main</div>
      </main>
    `;
  }
}

export class FooterNew extends Component {
  constructor(parent) {
    super(parent);
  }

  get template() {
    return html`
      <footer style="background-color: #636363; width: 100%; text-align: center;">
        <div>Footer</div>
      </footer>
    `;
  }
}
