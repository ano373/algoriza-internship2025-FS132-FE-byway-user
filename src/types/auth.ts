import type { ApiResponse } from "./general";

export type SignUpRequest = {
  email: string;
  userName: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
};
export type SignUpRequestError = Partial<Record<keyof SignUpRequest, string>>;

type SignUp = {
  userId: number;
  email: string;
  jwtToken: string;
};
export type SignUpResponse = ApiResponse<SignUp>;

export type LoginRequest = {
  email?: string;
  userName?: string;
  password: string;
};

type LogIn = {
  userId: number;
  email: string;
  jwtToken: string;
};
export type LoginResponse = ApiResponse<LogIn>;

type User = {
  userId: number;
  email: string;
};
export type UserResponse = ApiResponse<User>;
