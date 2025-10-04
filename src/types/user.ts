import type { ApiResponse } from "./general";

export type SignUpRequest = {
  Email: string;
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
};

type SignUp = {
  userId: number;
  email: string;
  jwtToken: string | null;
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
  jwtToken: string | null;
};
export type LoginResponse = ApiResponse<LogIn>;

type User = {
  userId: number;
  email: string;
};
export type UserResponse = ApiResponse<User>;
