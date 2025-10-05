import { InstructorApi } from "@/api/InstructorApi";
import type { InstructorParameters } from "@/types/Instrcutor";
import { useQuery } from "@tanstack/react-query";

export function useInstructors(params?: InstructorParameters) {
  return useQuery({
    queryKey: ["instructors", params],
    queryFn: () => InstructorApi.getAll(params),
    staleTime: 5 * 60 * 1000,
  });
}
