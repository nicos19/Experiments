// @ts-check

import { css, html } from "./htmlHelper.js";

export class Page {
  constructor(root = "div") {
    this.root = document.createElement(root);
    this.render();
  }

  static staticStyles = css`
    .page {
      background-color: red;
      color: white;
    }
  `;

  static {
    // add static styles to DOM
    const stylesElement = document.createElement("style");
    stylesElement.innerHTML = Page.staticStyles;
    document.head.appendChild(stylesElement);
  }

  template = html`
    <div class="page">
      <h2>Page Title</h2>
      <h4>Page Subtitle</h4>
    </div>
  `;

  render() {
    this.root.innerHTML = this.template;
  }
}
