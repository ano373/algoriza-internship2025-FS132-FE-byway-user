import { http } from "@/lib/http";
import type { CategoryResponse } from "@/types/category";

async function GetAllCategories(): Promise<CategoryResponse> {
  const response = await http.get<CategoryResponse>("/categories", {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}

export const categoryApi = {
  GetAll: GetAllCategories,
};
