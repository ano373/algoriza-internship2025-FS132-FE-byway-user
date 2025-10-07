import { useInstructors } from "@/hooks/useInstructors";
import {
  JobTitles,
  type InstructorParameters,
  type JobTitle,
} from "@/types/Instrcutor";
import { LoadingSpinner } from "../UI/LoadingSpinner";
import { ErrorMessage } from "../UI/ErrorMessage";
import { useState } from "react";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import { InstructorCard } from "./InstrcutorCard";

export default function InstrcutorSection() {
  const instructorParams: InstructorParameters = {
    limit: 20,
    sortBy: "rating",
    sortOrder: "desc",
  };

  const {
    data: instructorsResponse,
    isLoading,
    error,
  } = useInstructors(instructorParams);
  const [currentIndex, setCurrentIndex] = useState(0);

  const instructors = instructorsResponse?.value ?? [];

  if (isLoading) {
    return <LoadingSpinner message="loading instructors..." />;
  }

  if (error || !instructors) {
    return <ErrorMessage message="failed to load instructors" />;
  }

  const visibleInstructors = instructors.slice(
    currentIndex * 4,
    (currentIndex + 1) * 4
  );
  const totalSlides = Math.ceil(instructors.length / 4);
  const canGoNext = currentIndex < totalSlides - 1;
  const canGoPrev = currentIndex > 0;

  const handleNext = () => {
    if (canGoNext) setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (canGoPrev) setCurrentIndex((prev) => prev - 1);
  };

  return (
    <section className="w-full  px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold pl-15 text-gray-900">
          Top Instructors
        </h2>

        {totalSlides > 1 && (
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              disabled={!canGoPrev}
              className={`p-2  ${
                canGoPrev
                  ? "text-gray-600  hover:bg-gray-50"
                  : "text-gray-400 cursor-not-allowed"
              }`}
            >
              <IoArrowBackCircleOutline size={40} />
            </button>
            <button
              onClick={handleNext}
              disabled={!canGoNext}
              className={`p-2 ${
                canGoNext
                  ? "text-gray-600  hover:bg-gray-50"
                  : "text-gray-400  cursor-not-allowed"
              }`}
            >
              <IoArrowForwardCircleOutline size={40} />
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleInstructors.map((instructor) => (
          <InstructorCard
            key={instructor.instructorId}
            instructor={instructor}
          />
        ))}
      </div>

      {totalSlides > 1 && (
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? "bg-blue-700" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
