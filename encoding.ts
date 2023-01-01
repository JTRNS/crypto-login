function toB64(buff: ArrayBufferLike) {
  // First, we convert the ArrayBufferLike object to a binary string
  let binary = '';
  const bytes = new Uint8Array(buff);
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }

  // Then, we convert the binary string to a base64-encoded string
  const b64 = btoa(binary);
  return b64;
}

function toB64url(buff: ArrayBufferLike) {
  let b64url = toB64(buff);
  // Next, we replace characters that are not url-safe with their url-safe counterparts
  b64url = b64url.replace(/\+/g, '-');
  b64url = b64url.replace(/\//g, '_');
  b64url = b64url.replace(/=+$/, '');

  return b64url;
}

function fromB64(b64: string) {
  // Next, we convert the base64-encoded string to a binary string
  let binary = atob(b64);

  // Then, we convert the binary string to an ArrayBuffer object
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  const buff = bytes.buffer;

  return buff;
}

function fromB64url(b64: string) {
  // First, we replace url-safe characters with their non-url-safe counterparts
  b64 = b64.replace(/-/g, '+');
  b64 = b64.replace(/_/g, '/');
  b64 = b64 + '='.repeat((4 - (b64.length % 4)) % 4);
  return fromB64(b64);
}

function toHex(buff: ArrayBuffer) {
  return [...new Uint8Array(buff)]
    .map((x) => x.toString(16).padStart(2, '0'))
    .join('');
}

function fromHex(hex: string) {
  const arrayBuffer = new Uint8Array(
    hex.match(/.{1,2}/g).map((byte) => parseInt(byte, 16))
  );
  return arrayBuffer.buffer;
}

export const hex = {
  encode: toHex,
  decode: fromHex,
};

export const b64 = {
  encode: toB64,
  decode: fromB64,
};

export const b64url = {
  encode: toB64url,
  decode: fromB64url,
};
