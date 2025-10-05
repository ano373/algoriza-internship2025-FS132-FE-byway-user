import { type ApiResponse } from "./general";
import { createEnumConfig } from "@/lib/helpers";

// export interface CourseRequest {
//   courseId: number;
//   thumbnailUrl?: string;
//   title: string;
//   level: Level | "";
//   rating: number;
//   price: number;
//   description: string;
//   certification: string;
//   instructorId: number;
//   categoryId: number;
//   sections: CourseSection[];
// }

// export type CourseDetails = {
//   courseId: number;
//   title: string;
//   thumbnailUrl: string;
//   level: Level;
//   price: number;
//   rating: number;
//   totalLessonCount: number;
//   totalDurationMinutes: number;
//   description: string;
//   certification: string;
//   instructor: Instructor;
//   category: Category;
//   sections: CourseSection[];
// };

export type CourseSummary = {
  courseId: number;
  title: string;
  instructorName: string;
  categoryName: string;
  level: Level;
  rating: number;
  totalDurationMinutes: number;
  totalLessonCount: number;
  price: number;
  thumbnailUrl: string;
};
export type CourseSummaryResponse = ApiResponse<CourseSummary[]>;

export type CourseSection = {
  courseSectionId?: number;
  title: string;
  lessonCount: number;
  durationMinutes: number;
  order?: number;
};

export type CourseParameters = {
  page?: number;
  limit?: number;
  search?: string;
  categoryIds?: string[];
  maxLessonCount?: number;
  maxPrice?: number;
  minLessonCount?: number;
  minPrice?: number;
  minRating?: number;
  sortBy?: string;
  sortOrder?: string;
};

export const Levels = createEnumConfig([
  { label: "Beginner", value: "Beginner" },
  { label: "Intermediate", value: "Intermediate" },
  { label: "Expert", value: "Expert" },
  { label: "All Levels", value: "AllLevels" },
] as const);

export type Level = (typeof Levels.values)[number];
