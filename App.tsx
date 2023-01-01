import * as React from 'react';
import './style.css';
import { pbkdf2 } from './pbkdf2';
import { b64, b64url, hex } from './encoding';

export default function App() {
  const [email, setEmail] = React.useState<string>('user@example.com');
  const [password, setPassword] = React.useState<string>('password123');
  const [iterations, setIterations] = React.useState<number>(100000);
  const [masterKey, setMasterKey] = React.useState<ArrayBuffer | null>(null);
  const [masterKeyHash, setMasterKeyHash] = React.useState<ArrayBuffer | null>(
    null
  );

  React.useEffect(() => {
    pbkdf2(password, email, iterations).then(setMasterKey);
  }, [email, password, iterations]);

  React.useEffect(() => {
    if (masterKey) {
      pbkdf2(masterKey, password, 1).then(setMasterKeyHash);
    }
  }, [masterKey, password]);

  return (
    <div>
      <header></header>
      <main>
        <form>
          <p>
            React implementation of the password hashing feature on the{' '}
            <a href="https://bitwarden.com/crypto.html">
              Bitwarden Interactive Cryptography Page
            </a>
            .
          </p>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
          </label>
          <label>
            Iterations:
            <input
              type="number"
              value={iterations}
              onChange={(e) => setIterations(e.currentTarget.valueAsNumber)}
            />
          </label>
          <label>
            Master Key:
            <input
              type="text"
              value={masterKey ? b64url.encode(masterKey) : ''}
              readOnly
            />
          </label>
          <label>
            Master Key Hash:
            <input
              type="text"
              value={masterKeyHash ? b64url.encode(masterKeyHash) : ''}
              readOnly
            />
          </label>
          <label>
            Master Key:
            <input
              type="text"
              value={masterKey ? b64.encode(masterKey) : ''}
              readOnly
            />
          </label>
          <label>
            Master Key Hash:
            <input
              type="text"
              value={masterKeyHash ? b64.encode(masterKeyHash) : ''}
              readOnly
            />
          </label>
          <label>
            Master Key:
            <input
              type="text"
              value={masterKey ? hex.encode(masterKey) : ''}
              readOnly
            />
          </label>
          <label>
            Master Key Hash:
            <input
              type="text"
              value={masterKeyHash ? hex.encode(masterKeyHash) : ''}
              readOnly
            />
          </label>
        </form>
      </main>
      <footer>
        Have a look at the{' '}
        <a
          href="https://bitwarden.com/images/resources/security-white-paper-download.pdf"
          target="_blank"
        >
          Bitwarden Security Whitepaper
        </a>{' '}
        for more information.
      </footer>
    </div>
  );
}
