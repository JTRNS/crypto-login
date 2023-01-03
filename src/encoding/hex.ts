/**
 * Converts an ArrayBuffer object to a hexadecimal string.
 * @param {ArrayBuffer} buff - The ArrayBuffer object to convert.
 * @returns {string} The hexadecimal string representation of the ArrayBuffer.
 */
export function toHex(buff: ArrayBuffer) {
  return [...new Uint8Array(buff)]
    .map((x) => x.toString(16).padStart(2, "0"))
    .join("");
}

/**
 * Converts a hexadecimal string to an ArrayBuffer object.
 * @param {string} hex - The hexadecimal string to convert.
 * @returns {ArrayBuffer} The ArrayBuffer object representation of the hexadecimal string.
 * @throws {Error} If the input string is not a valid hexadecimal string.
 */
export function fromHex(hex: string) {
  const hexCharacters = hex.match(/.{1,2}/g);
  if (hexCharacters == null) {
    throw new Error(`${hex} is not a valid hex encoded string.`);
  }
  const bytes = new Uint8Array(hexCharacters.map((byte) => parseInt(byte, 16)));
  return bytes.buffer;
}
