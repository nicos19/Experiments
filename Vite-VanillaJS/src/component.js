// @ts-check

import { createHTMLElement } from "./htmlHelper";

export class Component {
  /** @type {HTMLElement} */
  #root;

  /** @type {HTMLElement} Root HTMLElement of this component */
  get root() {
    return this.#root;
  }

  /** @type {Component[]} */
  #children = [];

  /**
   * @param {Component | undefined} parent
   * @param {HTMLElement | undefined} root
   */
  constructor(parent, root = undefined) {
    this.#root = createHTMLElement(this.template, root);
    this.attachEventListeners();
    parent?.registerChildComponents(this);
  }

  /** @type {string} HTML-formatted string representation of the component */
  get template() {
    throw new Error("This must be implemented by class that extends from component.");
  }

  /**
   * Attaches event listeners to elements inside the component.
   */
  attachEventListeners() {
    console.debug("No event listeners will be attached to this component. This method may be implemented by the class that extends the component.");
  }

  /**
   * Registers one or multiple components as children of this component.
   * @param  {...Component} components
   */
  registerChildComponents(...components) {
    this.#children.push(...components);
  }

  /**
   * Destroys all child component and then removes the components root element from DOM.
   * ! Should be overwritten in concrete component implementation if component has any state subscriptions.
   */
  destroy() {
    this.#children.forEach((c) => c.destroy());
    this.#root.remove();
  }
}
