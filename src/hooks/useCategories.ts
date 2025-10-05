import { categoryApi } from "@/api/CategoryApi";
import type { CategoryResponse } from "@/types/category";
import { useQuery } from "@tanstack/react-query";

export function useCategories() {
  return useQuery<CategoryResponse>({
    queryKey: ["categories"],
    queryFn: categoryApi.GetAll,
  });
}
