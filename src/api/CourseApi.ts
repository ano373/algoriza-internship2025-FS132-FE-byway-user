import { http } from "../lib/http";
import qs from "qs";
import type {
  CourseDetailsResponse,
  CourseParameters,
  CourseSummaryResponse,
} from "@/types/course";

async function fetchCourseById(id: number): Promise<CourseDetailsResponse> {
  const response = await http.get<CourseDetailsResponse>(`/courses/${id}`);
  return response.data;
}

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
  getById: fetchCourseById,
  getAll: fetchCourses,
};
