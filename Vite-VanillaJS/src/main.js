// @ts-check

import "./style.css";
//import { initializeLayout } from "./layout.js";
import { State } from "./state.js";
import { LoginPageNew } from "./loginPage.js";
import { Component } from "./component.js";
import { asHTMLElement } from "./htmlHelper.js";
import { Layout } from "./layout.js";

/**
 * @typedef {Object} User
 * @property {number} id - The unique identifier of the user.
 * @property {string} username - The username of the user.
 * @property {string} email - The email address of the user.
 * @property {string} name - The full name of the user.
 * @property {string} company - The company name associated with the user.
 */

export const timeout = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

/** @type {Component | undefined} */
let currentPage;

/** @type {State<User>} */
export const globalUser = new State();

/**
 * Loads a page component into the documents "main" node.
 * @param {Component} page
 */
export function loadPage(page) {
  if (currentPage) {
    currentPage.destroy();
  }
  currentPage = page;
  asHTMLElement(document.querySelector("main")).appendChild(page.root);
}

const layout = new Layout();
document.body = layout.root;

loadPage(new LoginPageNew(layout));
