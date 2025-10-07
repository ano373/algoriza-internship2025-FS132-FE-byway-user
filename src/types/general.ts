export type ApiResponse<T> = {
  value: T;
};

export type MessageResponse = ApiResponse<{ message: string }>;
