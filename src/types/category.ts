import type { ApiResponse } from "./general";

export type Category = {
  categoryId: number;
  name: string;
  coursesCount?: number;
  iconUrl: string;
};
export type CategoryResponse = ApiResponse<Category[]>;
