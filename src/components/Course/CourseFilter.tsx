import { GrClearOption } from "react-icons/gr";
import { Toggle } from "./Toggle";
import { Range } from "react-range";
import { useCategories } from "@/hooks/useCategories";
import { StarRating } from "../UI/StarRating";
import { useAtom } from "jotai";
import {
  categoriesFilterAtom,
  lessonsFilterAtom,
  priceFilterAtom,
  ratingFilterAtom,
} from "@/atoms/courseFilter";

export function CourseFilter() {
  const [minRating, setMinRating] = useAtom(ratingFilterAtom);
  const [price, setPrice] = useAtom(priceFilterAtom);
  const [categoryIds, setCategoryIds] = useAtom(categoriesFilterAtom);
  const [lessons, setLessons] = useAtom(lessonsFilterAtom);

  const priceRange = [price.min ?? 0, price.max ?? 1000];

  const LessonsRange = [
    { label: "any" },
    { label: "1 - 15", min: 1, max: 15 },
    { label: "16 - 30", min: 16, max: 30 },
    { label: "31 - 45", min: 31, max: 45 },
    { label: "more than 45", min: 46 },
  ];

  const { data: categoriesResponse } = useCategories();
  const categories = categoriesResponse?.value;

  function handleClearFilters() {
    setMinRating(null);
    setPrice({ min: null, max: null });
    setCategoryIds([]);
    setLessons({ min: null, max: null });
  }

  function handleLessonFilter(index: number) {
    const range = LessonsRange[index];
    setLessons({ min: range.min ?? null, max: range.max ?? null });
  }

  function handleCategoryFilter(id: number) {
    setCategoryIds((prev) =>
      prev.includes(id)
        ? prev.filter((categoryId) => categoryId !== id)
        : [...prev, id]
    );
  }

  function handlePriceFilterChange(values: number[]) {
    setPrice({ min: values[0], max: values[1] });
  }

  return (
    <div className="w-80 h-full border-gray-200 shadow-sm border ">
      <div className="p-4">
        <Toggle label="Rating">
          <div className="flex justify-start mb-2">
            <StarRating
              editable={true}
              onChange={(value) => setMinRating(value)}
              value={minRating || 0}
            />
          </div>
        </Toggle>
        <Toggle label="Lessons count">
          <div className="space-y-2">
            {LessonsRange.map((range, index) => (
              <label
                key={index}
                className="flex items-center space-x-3 cursor-pointer text-gray-700 hover:text-blue-500"
              >
                <input
                  type="radio"
                  name="lessonFilter"
                  checked={
                    lessons.min === (range.min ?? null) &&
                    lessons.max === (range.max ?? null)
                  }
                  onChange={() => handleLessonFilter(index)}
                  className="w-5 h-5 text-blue-400 border-gray-300 focus:ring-blue-400 cursor-pointer"
                />
                <span className="text-sm md:text-base">{range.label}</span>
              </label>
            ))}
          </div>
        </Toggle>
        <Toggle label="Price">
          <div className="mt-8 ">
            <Range
              step={5}
              min={0}
              max={1000}
              values={priceRange}
              onChange={handlePriceFilterChange}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  className="h-1 bg-gray-300 rounded-full"
                  style={{ ...props.style }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div {...props} className="w-4 h-4 bg-blue-500 rounded-full" />
              )}
            />

            <div className="flex justify-between text-sm mt-2">
              <span>${price.min}</span>
              <span>${price.max}</span>
            </div>
          </div>
        </Toggle>

        <Toggle label="Categories">
          <div className="space-y-2">
            <label className="flex items-center space-x-3 cursor-pointer text-gray-700 hover:text-blue-500" />
            {categories?.map((category) => (
              <label
                key={category.categoryId}
                className="flex items-center space-x-3 cursor-pointer text-gray-700 hover:text-blue-500"
              >
                <input
                  type="checkbox"
                  checked={categoryIds.includes(category.categoryId)}
                  onChange={() => handleCategoryFilter(category.categoryId)}
                  className="w-5 h-5 text-blue-400 border-gray-300 focus:ring-blue-400 cursor-pointer"
                />
                <span>{category.name}</span>
              </label>
            ))}
          </div>
        </Toggle>
        <button
          onClick={handleClearFilters}
          className="flex items-center gap-2 px-4 py-2 mt-4 bg-white border rounded-lg shadow-sm hover:bg-blue-100"
        >
          <GrClearOption />
          <span>Clear Filters</span>
        </button>
      </div>
    </div>
  );
}
