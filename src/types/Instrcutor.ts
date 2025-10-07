import { createEnumConfig } from "@/lib/helpers";
import type { ApiResponse } from "./general";

export const JobTitles = createEnumConfig([
  { label: "Fullstack Developer", value: "FullstackDeveloper" },
  { label: "Frontend Developer", value: "FrontendDeveloper" },
  { label: "Backend Developer", value: "BackendDeveloper" },
  { label: "UI/UX Designer", value: "UIUXDesigner" },
] as const);
export type JobTitle = (typeof JobTitles.values)[number];

export interface InstructorParameters {
  limit?: number;
  page?: number;
  search?: string;
  sortBy?: string;
  sortOrder?: string;
}

export interface Instructor {
  instructorId: number;
  profileImageUrl?: string;
  name: string;
  jobTitle: JobTitle;
  rating: number;
  description: string;
  studentCount?: number;
}
export type InstructorsResponse = ApiResponse<Instructor[]>;
