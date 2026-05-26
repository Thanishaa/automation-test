

export declare function accessAndViewPage(): void;
export declare function loginParabank(username: string, password: string): void;

declare global {
  namespace Cypress {
    interface CypressEnv {
      parabankUrl: string;
      username: string;
      password: string;
    }
    interface Chainable {
      loginParabank(username: string, password: string): Chainable<void>;
      registerParabank(username: string, password: string): Chainable<void>;
    }
  }
}

export declare function registerParabank(
  username: string,
  password: string
): Chainable<void>;

export {};
