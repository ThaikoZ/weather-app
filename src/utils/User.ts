export interface SignIn {
  email: string;
  password: string;
}

export interface SingUp {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
}
