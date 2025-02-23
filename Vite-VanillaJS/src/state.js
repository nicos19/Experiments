// @ts-check

/**
 * @template T
 */
export class State {
  /** @type {string} */
  #id;

  /** @type {((value: T) => void)[]}} */
  #subscribersForStateChange = [];

  /** @type {{ prop: string, callback: (value: any) => void }[]}} */
  #subscribersForStatePropChange = [];

  /** @type {T} */
  #value;

  /** @type {ProxyHandler<any>} */
  #proxyHandler = {
    set: (target, key, value) => {
      const oldValue = target[key];
      if (oldValue !== value) {
        target[key] = value;
        this.#notifySubscribersForStatePropChange(/** @type {string} */ (key), value);
      }
      return true;
    },
  };

  /**
   * Creates a new state with initial value.
   * @param {any | undefined} initialValue
   */
  constructor(initialValue = undefined) {
    this.#id = crypto.randomUUID();
    if (initialValue == undefined) {
      initialValue = {};
    }
    this.set(initialValue);
  }

  get value() {
    if (Object.keys(/** @type {any} */ (this.#value)).length === 0) {
      return undefined;
    }
    return this.#value;
  }

  set value(newValue) {
    throw new Error("Setter function must be used!");
  }

  /**
   * Sets internal state to new value.
   * @param {T} value
   */
  set(value) {
    this.#value = new Proxy(value, this.#proxyHandler);
    this.#notifySubscribersForStateChange(value);
  }

  /**
   * Notifies all registered subscriber that state was set to new value.
   * @param {T} newValue
   */
  #notifySubscribersForStateChange(newValue) {
    this.#subscribersForStateChange.forEach((callback) => callback(newValue));
  }

  /**
   * Adds callback function as subscriber for state changes.
   * @param {(value: T) => void} callback
   * @returns {() => void} Function to unsubscribe
   */
  subscribeForStateChange(callback) {
    this.#subscribersForStateChange.push(callback);
    return () => this.#removeSubscriberForStateChange(callback);
  }

  /**
   * Removes callback function from list of subscribers for state changes.
   * @param {(value: T) => void} callback
   */
  #removeSubscriberForStateChange(callback) {
    this.#subscribersForStateChange = this.#subscribersForStateChange.filter((c) => c !== callback);
  }

  /**
   * Notifies all registered subscribers that a specific property of the state was changed.
   * @param {string} prop
   * @param {any} value
   */
  #notifySubscribersForStatePropChange(prop, value) {
    this.#subscribersForStatePropChange.forEach((subscriber) => {
      if (subscriber.prop === prop) {
        subscriber.callback(value);
      }
    });
  }

  /**
   * Adds callback function as subscriber for changes of a specific property.
   * @param {string} prop
   * @param {(value: any) => void} callback
   * @returns {() => void} Function to unsubscribe
   */
  subscribeForStatePropChange(prop, callback) {
    this.#subscribersForStatePropChange.push({ prop, callback });
    return () => this.#removeSubscriberForStatePropChange(callback);
  }

  /**
   * Removes callback function from list of subscribers for state changes.
   * @param {(value: any) => void} callback
   */
  #removeSubscriberForStatePropChange(callback) {
    this.#subscribersForStatePropChange = this.#subscribersForStatePropChange.filter((subscriber) => subscriber.callback !== callback);
  }
}
