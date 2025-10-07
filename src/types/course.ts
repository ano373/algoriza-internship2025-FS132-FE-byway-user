import { type ApiResponse } from "./general";
import { createEnumConfig } from "@/lib/helpers";
import type { Instructor } from "./Instrcutor";
import type { Category } from "./category";

export type CourseDetails = {
  courseId: number;
  title: string;
  thumbnailUrl: string;
  level: Level;
  price: number;
  rating: number;
  totalLessonCount: number;
  totalDurationMinutes: number;
  description: string;
  certification: string;
  instructor: Instructor;
  category: Category;
  sections: CourseSection[];
};
export type CourseDetailsResponse = ApiResponse<CourseDetails>;

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
  categoryIds?: number[] | number;
  maxLessonCount: number | null;
  maxPrice: number | null;
  minLessonCount: number | null;
  minPrice: number | null;
  minRating: number | null;
  sortBy?: string;
  sortOrder?: string;
};

type Filters = {
  rating: number | null;
  price: {
    min: number | null;
    max: number | null;
  };
  categories: number[];
  lessons: {
    min: number | null;
    max: number | null;
  };
};

export const Levels = createEnumConfig([
  { label: "Beginner", value: "Beginner" },
  { label: "Intermediate", value: "Intermediate" },
  { label: "Expert", value: "Expert" },
  { label: "All Levels", value: "AllLevels" },
] as const);

export type Level = (typeof Levels.values)[number];

export function mapFiltersToCourseParameters(
  filters: Filters,
  additionalParams?: Partial<CourseParameters>
): CourseParameters {
  return {
    categoryIds: filters.categories.length > 0 ? filters.categories : undefined,
    maxLessonCount: filters.lessons.max,
    minLessonCount: filters.lessons.min,
    maxPrice: filters.price.max,
    minPrice: filters.price.min,
    minRating: filters.rating,
    ...additionalParams,
  };
}

export function convertToCourseSummaries(
  courses: CourseDetailsResponse[]
): CourseSummary[] {
  return courses.map((courseResponse) => {
    const course = courseResponse.value;
    return {
      courseId: course.courseId,
      title: course.title,
      instructorName: course.instructor.name,
      categoryName: course.category.name,
      level: course.level,
      rating: course.rating,
      totalDurationMinutes: course.totalDurationMinutes,
      totalLessonCount: course.totalLessonCount,
      price: course.price,
      thumbnailUrl: course.thumbnailUrl,
    };
  });
}
