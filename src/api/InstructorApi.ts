import { http } from "../lib/http";
import type {
  InstructorParameters,
  InstructorsResponse,
} from "../types/Instrcutor";

async function fetchInstructors(
  params?: InstructorParameters
): Promise<InstructorsResponse> {
  const response = await http.get<InstructorsResponse>(`/instructors`, {
    params: params,
  });
  return response.data;
}

export const InstructorApi = {
  getAll: fetchInstructors,
};
