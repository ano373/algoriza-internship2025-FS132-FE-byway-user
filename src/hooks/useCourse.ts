import { useQuery } from "@tanstack/react-query";
import { CourseApi } from "../api/CourseApi";
import type { CourseParameters } from "../types/course";

export function useCourses(params?: CourseParameters) {
  return useQuery({
    queryKey: ["courses", params],
    queryFn: () => CourseApi.getAll(params),
    staleTime: 5 * 60 * 1000,
  });
}

// export function useCourse(id: number, options?: { enabled?: boolean }) {
//   return useQuery({
//     queryKey: ["course", id],
//     queryFn: () => CourseApi.getById(id),
//     enabled: options?.enabled !== undefined ? options.enabled : !!id,
//   });
// }
