import { http } from "../lib/http";
import qs from "qs";
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
  const queryString = qs.stringify(params, {
    arrayFormat: "repeat",
    skipNulls: true,
  });

  const response = await http.get<CourseSummaryResponse>(
    `/courses?${queryString}`
  );
  return response.data;
}

export const CourseApi = {
  // getById: fetchCourseById,
  getAll: fetchCourses,
};
