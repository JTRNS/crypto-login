/**
 * Converts an ArrayBuffer-like object to a base64 encoded string.
 * @param {ArrayBufferLike} buff - The ArrayBuffer-like object to convert.
 * @returns {string} The base64 encoded string representation of the ArrayBuffer-like object.
 */
export function toB64(buff: ArrayBufferLike) {
  // Convert the ArrayBufferLike object to a binary string
  let binary = "";
  const bytes = new Uint8Array(buff);
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }

  // Convert the binary string to a base64-encoded string
  return btoa(binary);
}

/**
 * Converts a base64 encoded string to an ArrayBuffer object.
 * @param {string} b64 - The base64 encoded string to convert.
 * @returns {ArrayBuffer} The ArrayBuffer object representation of the base64 encoded string.
 */
export function fromB64(b64: string) {
  // Convert the base64-encoded string to a binary string
  const binary = atob(b64);

  // Convert the binary string to an ArrayBuffer object
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes.buffer;
}
