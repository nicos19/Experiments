// @ts-check

import { html } from "./htmlHelper";

/**
 * A simple dialog web component without Shadow DOM.
 *
 * @property {string} title - The title of the dialog.
 * @property {string} message - The message displayed inside the dialog.
 * @property {boolean} _isOpen - Indicates if the dialog is open or closed.
 */
export class SimpleDialog extends HTMLElement {
  /**
   * Creates an instance of SimpleDialog.
   */
  constructor() {
    super();
    /** @type {boolean} */
    this._isOpen = false; // Track dialog state
  }

  /**
   * Called when the component is added to the DOM.
   * Initializes the component rendering.
   * @returns {void}
   */
  connectedCallback() {
    this.render();
  }

  get isOpen() {
    return this._isOpen;
  }

  set isOpen(value) {
    if (value) {
      this.open();
    } else {
      this.close();
    }
  }

  /**
   * Opens the dialog.
   * @returns {void}
   */
  open() {
    this._isOpen = true;
    this.render();
  }

  /**
   * Closes the dialog.
   * @returns {void}
   */
  close() {
    this._isOpen = false;
    this.render();
  }

  /**
   * Renders the dialog component's HTML.
   * @returns {void}
   */
  render() {
    this.innerHTML = html`
      <div class="dialog-backdrop" style="display: ${this.isOpen ? "flex" : "none"};">
        <div class="dialog-box">
          <h2>${this.getAttribute("title") || "Dialog Title"}</h2>
          <p>${this.getAttribute("message") || "This is a simple dialog."}</p>
          <button class="close-btn">Close</button>
        </div>
      </div>
    `;

    const closeButton = /** @type {HTMLButtonElement | null} */ (this.querySelector(".close-btn"));
    if (closeButton) {
      closeButton.addEventListener("click", () => this.close());
    }
  }
}

// Define the custom element
customElements.define("simple-dialog", SimpleDialog);
