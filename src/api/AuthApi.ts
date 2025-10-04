import { http } from "@/lib/http";
import type {
  LoginRequest,
  LoginResponse,
  SignUpResponse,
  SignUpRequest,
  UserResponse,
} from "@/types/user";

async function LogIn(payload: LoginRequest): Promise<LoginResponse> {
  const response = await http.post<LoginResponse>("/auth/login", payload, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}

async function SignUp(payload: SignUpRequest): Promise<SignUpResponse> {
  const response = await http.post<SignUpResponse>("/user", payload, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}

async function GetMe(): Promise<UserResponse> {
  const response = await http.get<UserResponse>("/auth/me", {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}

export const AuthApi = {
  LogIn,
  SignUp,
  GetMe,
};
