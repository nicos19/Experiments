// @ts-check

/**
 * This function can be used with tagged template string syntax.
 * Example: html`This is a ${exampleValue}`
 * @param {TemplateStringsArray} literals
 * @param {any[]} vars
 * @returns
 */
export function html(literals, ...vars) {
  let raw = literals.raw,
    result = "",
    i = 1,
    len = arguments.length,
    str,
    variable;

  while (i < len) {
    str = raw[i - 1];
    variable = vars[i - 1];
    result += str + variable;
    i++;
  }
  result += raw[raw.length - 1];
  return result;
}

/**
 * Creates an HTMLElement from a HTML-formatted string.
 * ! Input should have one root element if no containerElement is defined.
 * @param {string} html
 * @param {HTMLElement | undefined} containerElement
 * @returns {HTMLElement}
 */
export function createHTMLElement(html, containerElement = undefined) {
  html = html.trim();

  if (containerElement) {
    containerElement.innerHTML = html;
    return containerElement;
  }

  const template = document.createElement("div");
  template.innerHTML = html;
  let element;
  if (template.firstElementChild) {
    element = template.firstElementChild;
  } else {
    element = document.createElement("div"); // create empty div
  }
  return asHTMLElement(element);
}

/**
 * "Converts" an Element to a generic HTMLElement.
 * @param {Element | null | undefined} element
 * @returns {HTMLElement}
 */
export function asHTMLElement(element) {
  return /** @type {HTMLElement} */ (element);
}

/**
 * "Converts" an array of Elements to an array of HTMLElements.
 * @param {Element[]} elements
 * @returns {HTMLElement[]}
 */
export function asHTMLElements(elements) {
  return /** @type {HTMLElement[]} */ (elements);
}

/**
 * "Converts" an Element to a HTMLInputElement.
 * @param {Element | null | undefined} element
 * @returns {HTMLInputElement}
 */
export function asHTMLInputElement(element) {
  return /** @type {HTMLInputElement} */ (element);
}

/**
 * "Converts" an array of Elements to an array of HTMLInputElements.
 * @param {Element[]} elements
 * @returns {HTMLInputElement[]}
 */
export function asHTMLInputElements(elements) {
  return /** @type {HTMLInputElement[]} */ (elements);
}

/**
 * "Converts" an Element to a HTMLButtonElement.
 * @param {Element | null | undefined} element
 * @returns {HTMLButtonElement}
 */
export function asHTMLButtonElement(element) {
  return /** @type {HTMLButtonElement} */ (element);
}

/**
 * "Converts" an array of Elements to an array of HTMLButtonElements.
 * @param {Element[]} elements
 * @returns {HTMLButtonElement[]}
 */
export function asHTMLButtonElements(elements) {
  return /** @type {HTMLButtonElement[]} */ (elements);
}

/**
 * "Converts" an Element to a HTMLSelectElement.
 * @param {Element | null | undefined} element
 * @returns {HTMLSelectElement}
 */
export function asHTMLSelectElement(element) {
  return /** @type {HTMLSelectElement} */ (element);
}

/**
 * "Converts" an array of Elements to an array of HTMLSelectElements.
 * @param {Element[]} elements
 * @returns {HTMLSelectElement[]}
 */
export function asHTMLSelectElements(elements) {
  return /** @type {HTMLSelectElement[]} */ (elements);
}

/**
 * "Converts" an Element to a HTMLFormElement.
 * @param {Element | null | undefined} element
 * @returns {HTMLFormElement}
 */
export function asHTMLFormElement(element) {
  return /** @type {HTMLFormElement} */ (element);
}

/**
 * "Converts" an array of Elements to an array of HTMLFormElements.
 * @param {Element[]} elements
 * @returns {HTMLFormElement[]}
 */
export function asHTMLFormElements(elements) {
  return /** @type {HTMLFormElement[]} */ (elements);
}

/**
 * "Converts" an Element to a HTMLTextAreaElement.
 * @param {Element | null | undefined} element
 * @returns {HTMLTextAreaElement}
 */
export function asHTMLTextAreaElement(element) {
  return /** @type {HTMLTextAreaElement} */ (element);
}

/**
 * "Converts" an array of Elements to an array of HTMLTextAreaElements.
 * @param {Element[]} elements
 * @returns {HTMLTextAreaElement[]}
 */
export function asHTMLTextAreaElements(elements) {
  return /** @type {HTMLTextAreaElement[]} */ (elements);
}

/**
 * "Converts" an Element to a HTMLAnchorElement.
 * @param {Element | null | undefined} element
 * @returns {HTMLAnchorElement}
 */
export function asHTMLAnchorElement(element) {
  return /** @type {HTMLAnchorElement} */ (element);
}

/**
 * "Converts" an array of Elements to an array of HTMLAnchorElements.
 * @param {Element[]} elements
 * @returns {HTMLAnchorElement[]}
 */
export function asHTMLAnchorElements(elements) {
  return /** @type {HTMLAnchorElement[]} */ (elements);
}

/**
 * "Converts" an Element to a HTMLImageElement.
 * @param {Element | null | undefined} element
 * @returns {HTMLImageElement}
 */
export function asHTMLImageElement(element) {
  return /** @type {HTMLImageElement} */ (element);
}

/**
 * "Converts" an array of Elements to an array of HTMLImageElements.
 * @param {Element[]} elements
 * @returns {HTMLImageElement[]}
 */
export function asHTMLImageElements(elements) {
  return /** @type {HTMLImageElement[]} */ (elements);
}

/**
 * "Converts" an Element to a HTMLCanvasElement.
 * @param {Element | null | undefined} element
 * @returns {HTMLCanvasElement}
 */
export function asHTMLCanvasElement(element) {
  return /** @type {HTMLCanvasElement} */ (element);
}

/**
 * "Converts" an array of Elements to an array of HTMLCanvasElements.
 * @param {Element[]} elements
 * @returns {HTMLCanvasElement[]}
 */
export function asHTMLCanvasElements(elements) {
  return /** @type {HTMLCanvasElement[]} */ (elements);
}
