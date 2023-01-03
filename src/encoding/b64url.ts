import { toB64, fromB64 } from "./b64";

/**
 * Converts an ArrayBuffer-like object to a base64url encoded string.
 * @param {ArrayBufferLike} buff - The ArrayBuffer-like object to convert.
 * @returns {string} The base64url encoded string representation of the ArrayBuffer-like object.
 */
export function toB64url(buff: ArrayBufferLike) {
  let b64url = toB64(buff);
  // Replace characters that are not url-safe with their url-safe counterparts
  b64url = b64url.replace(/\+/g, "-");
  b64url = b64url.replace(/\//g, "_");
  b64url = b64url.replace(/=+$/, "");
  return b64url;
}

/**
 * Converts a base64url encoded string to an ArrayBuffer object.
 * @param {string} b64 - The base64url encoded string to convert.
 * @returns {ArrayBuffer} The ArrayBuffer object representation of the base64url encoded string.
 */
export function fromB64url(b64: string) {
  // Replace url-safe characters with their non-url-safe counterparts
  b64 = b64.replace(/-/g, "+");
  b64 = b64.replace(/_/g, "/");
  b64 = b64 + "=".repeat((4 - (b64.length % 4)) % 4);
  return fromB64(b64);
}
