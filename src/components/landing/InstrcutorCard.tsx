import { JobTitles, type Instructor } from "@/types/Instrcutor";
import { FaStar } from "react-icons/fa";

interface InstructorCardProps {
  instructor: Instructor;
}

export function InstructorCard({ instructor }: InstructorCardProps) {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden  hover:shadow-lg">
      <div className="p-4">
        <div className="flex justify-center mb-3">
          <img
            src={instructor.profileImageUrl || "/default-avatar.png"}
            alt={instructor.name}
            className="w-22 h-22 rounded-full object-cover"
          />
        </div>

        <h3 className="text-lg font-bold text-gray-900 text-center mb-1">
          {instructor.name}
        </h3>

        <p className="text-sm text-gray-600 text-center mb-3">
          {JobTitles.toLabel(instructor.jobTitle)}
        </p>

        <div className="border-t border-gray-200 my-3"></div>

        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-1">
            <span className="text-gray-900 font-medium">
              {instructor.rating.toFixed(1)}
            </span>
            <FaStar className="text-yellow-400" />
          </div>

          <span className="text-gray-600">
            {instructor.studentCount || 25} students
          </span>
        </div>
      </div>
    </div>
  );
}
