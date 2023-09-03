import * as _protocol from "./protocol.js";

/**
 * @typedef {_protocol.ClientProtocol} ClientProtocol
 */

/**
 * @implements {_protocol.ClientProtocol}
 */
class Client {
  /**
   * @param {string} name
   * @param {number} _id
   * @returns {string}
   */
  getUser(name, _id) {
    return `example-${name}`;
  }
}

export { Client };
