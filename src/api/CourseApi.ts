import { http } from "../lib/http";
import type { CourseParameters, CourseSummaryResponse } from "@/types/course";

// async function fetchCourseById(
//   id: number
// ): Promise<ApiResponse<CourseDetails>> {
//   const response = await http.get<ApiResponse<CourseDetails>>(`/courses/${id}`);
//   return response.data;
// }

async function fetchCourses(
  params?: CourseParameters
): Promise<CourseSummaryResponse> {
  const response = await http.get<CourseSummaryResponse>(`/courses`, {
    params: params,
  });
  return response.data;
}

export const CourseApi = {
  // getById: fetchCourseById,
  getAll: fetchCourses,
};
