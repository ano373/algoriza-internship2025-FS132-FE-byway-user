import { useCourses } from "@/hooks/useCourse";
import type { CourseParameters } from "@/types/course";
import { LoadingSpinner } from "./LoadingSpinner";
import { ErrorMessage } from "./ErrorMessage";
import CourseCard from "./CourseCard";
import { Link, useNavigate } from "react-router";

interface CourseSectionProps {
  categoryId?: number;
}

export default function CourseSection({ categoryId }: CourseSectionProps) {
  const courseParams: CourseParameters = {
    limit: 4,
    sortBy: "rating",
    sortOrder: "desc",
    maxLessonCount: null,
    maxPrice: null,
    minLessonCount: null,
    minPrice: null,
    minRating: null,
    categoryIds: categoryId,
  };

  const {
    data: courseSummaryResponse,
    isLoading,
    error,
  } = useCourses(courseParams);

  const courses = courseSummaryResponse?.value ?? [];
  const navigate = useNavigate();

  if (isLoading) {
    return <LoadingSpinner message="loading courses..." />;
  }

  if (error || !courses) {
    return <ErrorMessage message="failed to load courses" />;
  }
  const handleCardClick = (courseId: number) => {
    navigate(`/courses/${courseId}`);
  };

  return (
    <section className="w-full px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold pl-15 text-gray-900">Top Courses</h2>
        <Link
          to="/courses"
          className=" mr-4 text-blue-600 hover:text-blue-800 font-medium"
        >
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <CourseCard
            key={course.courseId}
            course={{
              courseId: course.courseId,
              title: course.title,
              instructorName: course.instructorName,
              categoryName: course.categoryName,
              level: course.level,
              rating: course.rating,
              totalDurationMinutes: course.totalDurationMinutes,
              totalLessonCount: course.totalLessonCount,
              price: course.price,
              thumbnailUrl: course.thumbnailUrl,
            }}
            onCardClick={handleCardClick}
          />
        ))}
      </div>
    </section>
  );
}
