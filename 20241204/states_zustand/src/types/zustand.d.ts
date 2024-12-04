export interface CounterStoreType {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export interface User {
  name: string;
  age: number;
}

export interface AuthStoreType {
  user: User | null;
  isLoggedIn: boolean;
  login: (user: User) => void;
  logout: () => void;
}
