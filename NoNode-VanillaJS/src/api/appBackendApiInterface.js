// @ts-check

/**
 * Interface for classes that represent an AppBackendApi.
 *
 * @interface
 */
export function IAppBackendApi() {}

/**
 * Gets the user if logged in.
 *
 * @returns {any} The user
 */
IAppBackendApi.prototype.getUser = function () {
  throw new Error("not implemented");
};

/**
 * Gets the product list.
 *
 * @returns {any[]} The products
 */
IAppBackendApi.prototype.getProducts = function () {
  throw new Error("not implemented");
};

/**
 * Gets the customer list.
 *
 * @returns {any[]} The customers
 */
IAppBackendApi.prototype.getCustomers = function () {
  throw new Error("not implemented");
};
