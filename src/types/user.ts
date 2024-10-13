export type User = {
  username: string;
  email: string;
  role: "admin" | "user" | null;
};
export type LoginFormTypes = {
  email: string;
  password: string;
};
export type RegistrationFormTypes = {
  email: string;
  password: string;
  username: string;
};
export type authCheckResponse = {
  isAuthorized: boolean;
};
