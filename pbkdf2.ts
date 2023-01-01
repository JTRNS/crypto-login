const enc = new TextEncoder();

export async function pbkdf2(
  password: string | ArrayBufferLike,
  salt: string | ArrayBufferLike,
  iterations: number
) {
  if (typeof salt === 'string') {
    salt = enc.encode(salt);
  }

  if (typeof password === 'string') {
    password = enc.encode(password);
  }

  const importAlg = {
    name: 'PBKDF2',
  };

  const deriveAlg = {
    name: 'PBKDF2',
    salt,
    iterations: iterations,
    hash: { name: 'SHA-256' },
  };

  const aesOptions = {
    name: 'AES-CBC',
    length: 256,
  };

  const importedKey = await crypto.subtle.importKey(
    'raw',
    password,
    importAlg,
    false,
    ['deriveKey']
  );
  const derivedKey = await crypto.subtle.deriveKey(
    deriveAlg,
    importedKey,
    aesOptions,
    true,
    ['encrypt']
  );
  const exportedKey = await crypto.subtle.exportKey('raw', derivedKey);
  return exportedKey;
}
