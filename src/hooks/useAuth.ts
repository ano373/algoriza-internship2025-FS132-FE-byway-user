import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AuthApi } from "@/api/AuthApi";
import type { LoginRequest, SignUpRequest, UserResponse } from "@/types/auth";
import { useNavigate } from "react-router";

export function useLogin() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: LoginRequest) => AuthApi.LogIn(payload),
    onSuccess: (data) => {
      localStorage.setItem("jwtToken", data.value.jwtToken ?? "");
      queryClient.setQueryData(["user"], data.value);
    },
  });
}

export function useSignUp() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: SignUpRequest) => AuthApi.SignUp(payload),
    onSuccess: (data) => {
      localStorage.setItem("jwtToken", data.value.jwtToken ?? "");
      queryClient.setQueryData(["user"], data.value);
    },
  });
}

export function useUser() {
  return useQuery<UserResponse | null>({
    queryKey: ["user"],
    queryFn: AuthApi.GetMe,
    enabled: !!localStorage.getItem("jwtToken"),
    retry: false,
    staleTime: Infinity,
  });
}

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return () => {
    localStorage.removeItem("jwtToken");
    queryClient.setQueryData(["user"], null);
    navigate("/");
  };
}
