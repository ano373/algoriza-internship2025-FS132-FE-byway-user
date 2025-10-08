import CourseCard from "@/components/UI/CourseCard";
import { useCourses } from "@/hooks/useCourse";
import { useEffect, useState } from "react";
import { IoFilter } from "react-icons/io5";
import { useNavigate, useSearchParams } from "react-router";
import { CourseFilter } from "@/components/Course/CourseFilter";

import { useAtomValue } from "jotai";
import { allFiltersAtom } from "@/atoms/courseFilter";
import { mapFiltersToCourseParameters } from "@/types/course";
import { Pagination } from "@/components/Course/Pagination";
import SelectMenu from "@/components/UI/SelectMenu";
import { LoadingSpinner } from "@/components/UI/LoadingSpinner";
import { ErrorMessage } from "@/components/UI/ErrorMessage";

export function CourseListPage() {
  const navigate = useNavigate();
  const [openFilter, setOpenFilter] = useState(false);
  const filters = useAtomValue(allFiltersAtom);
  const [debouncedFilters, setDebouncedFilters] = useState(filters);
  const [search, setSearch] = useState("");
  const [pagination, setPagination] = useState({
    page: 1,
    sortBy: "date",
    sortOrder: "desc",
    limit: 10,
  });
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const urlSearch = searchParams.get("search") || "";
    setSearch(urlSearch);
  }, [searchParams]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedFilters(filters);
    }, 600);

    return () => clearTimeout(timer);
  }, [filters]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    const flatFilters = {
      rating: debouncedFilters.rating,
      minPrice: debouncedFilters.price.min,
      maxPrice: debouncedFilters.price.max,
      minLessons: debouncedFilters.lessons.min,
      maxLessons: debouncedFilters.lessons.max,
    };

    Object.entries(flatFilters).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        params.set(key, String(value));
      }
    });
    params.set("sortBy", pagination.sortBy);
    params.set("sortOrder", pagination.sortOrder);
    params.set("page", pagination.page.toString());
    params.set("limit", pagination.limit.toString());

    debouncedFilters.categories.forEach((cat) => {
      params.append("categories", String(cat));
    });

    setSearchParams(params, { replace: true });
  }, [debouncedFilters, pagination, searchParams, setSearchParams]);

  const courseParams = mapFiltersToCourseParameters(debouncedFilters, {
    page: pagination.page,
    limit: pagination.limit,
    search: search || undefined,
    sortBy: pagination.sortBy,
    sortOrder: pagination.sortOrder,
  });

  const {
    data: courseSummaryResponse,
    isLoading,
    error,
  } = useCourses(courseParams);
  const courses = courseSummaryResponse?.value || [];

  function handleToggleFilter(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setOpenFilter(!openFilter);
  }

  if (isLoading) {
    return <LoadingSpinner message="loading courses...." />;
  }
  if (error) {
    return <ErrorMessage message="Failed to load courses." />;
  }

  return (
    <div className="flex-1 p-8 bg-gray-50 w-full h-full">
      <h1 className="mt-10 text-5xl font-bold ml-6 font-primary  my-6 mb-20">
        Courses
      </h1>

      <div className="flex justify-between mb-6">
        <button
          onClick={handleToggleFilter}
          className="flex items-center gap-2 px-4 py-2 w-[112px] h-[48px] bg-white border rounded-lg shadow-sm hover:bg-blue-100"
        >
          <IoFilter className="text-lg" />
          <span>Filters</span>
        </button>
        <div className="flex items-center gap-2">
          <span className="text-gray-800">Per page</span>

          <div className="w-15">
            <SelectMenu
              currentSelection={pagination.limit}
              onChange={(e) =>
                setPagination((prev) => ({
                  ...prev,
                  limit: Number(e.target.value),
                }))
              }
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </SelectMenu>
          </div>

          <div className="w-30">
            <SelectMenu
              currentSelection={pagination.sortBy}
              onChange={(e) =>
                setPagination((prev) => ({
                  ...prev,
                  sortBy: e.target.value,
                }))
              }
            >
              <option value="price">Price</option>
              <option value="date">Date</option>
              <option value="rating">Rating</option>
            </SelectMenu>
          </div>

          <div className="w-30">
            <SelectMenu
              currentSelection={pagination.sortOrder}
              onChange={(e) =>
                setPagination((prev) => ({
                  ...prev,
                  sortOrder: e.target.value,
                }))
              }
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </SelectMenu>
          </div>
        </div>
      </div>
      <div className="flex gap-8">
        {openFilter && <CourseFilter />}

        <div className="flex-1">
          <div
            className={`grid grid-cols-1 md:grid-cols-2 ${
              openFilter ? "lg:grid-cols-3" : "lg:grid-cols-4"
            } gap-6`}
          >
            {courses.map((course) => (
              <CourseCard
                key={course.courseId}
                course={course}
                onCardClick={() => navigate(`/courses/${course.courseId}`)}
              />
            ))}
          </div>
          <Pagination
            currentPage={pagination.page}
            totalPages={5}
            onPageChange={(page) =>
              setPagination((prev) => ({
                ...prev,
                page: page,
              }))
            }
          />
        </div>
      </div>
    </div>
  );
}
