import { StarRating } from "@components/UI/StarRating";
import type { CourseSummary } from "@/types/course";
import { useNavigate } from "react-router";

interface CartCourseCardProps {
  course: CourseSummary;
  onRemove: () => void;
}

export default function CartCourseCard({
  course,
  onRemove,
}: CartCourseCardProps) {
  const formatDuration = (minutes: number): string => {
    if (minutes < 60) {
      return `${minutes} Total Minutes`;
    }
    const hours = Math.floor(minutes / 60);
    return `${hours} Total Hours`;
  };
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between mb-3 bg-white border border-gray-200 rounded-xl p-3 hover:shadow-md transition">
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <img
          onClick={() => navigate(`/courses/${course.courseId}`)}
          src={course.thumbnailUrl}
          alt={course.title}
          className="w-56 h-32 rounded-md object-cover flex-shrink-0 cursor-pointer"
        />

        <div className="flex flex-col justify-center items-start min-w-0">
          <h3 className="text-base font-semibold text-gray-900 truncate mb-1">
            {course.title}
          </h3>
          <p className="text-xs text-gray-600 mb-1 truncate">
            By {course.instructorName}
          </p>

          <div className="flex items-center text-xs text-gray-600 flex-wrap gap-1 mb-1">
            <StarRating value={course.rating} />
            <span className="ml-1">{course.rating.toFixed(1)}</span>
            <span className="text-gray-400">•</span>
            <span>{formatDuration(course.totalDurationMinutes)}</span>
            <span className="text-gray-400">•</span>
            <span>{course.totalLessonCount} Lectures</span>
            <span className="text-gray-400">•</span>
            <span>{course.level}</span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onRemove();
            }}
            className="text-red-500  font-medium hover:underline mt-1"
          >
            Remove
          </button>
        </div>
      </div>

      <div className="text-right ml-4 flex-shrink-0">
        <p className="text-lg font-bold text-gray-900">
          ${course.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
