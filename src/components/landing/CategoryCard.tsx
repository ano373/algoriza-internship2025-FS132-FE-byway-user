import type { Category } from "@/types/category";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <div className="w-full bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
      {/* Icon with light blue circle */}
      <div className="flex justify-center mb-4">
        <div className="w-20 h-20 bg-blue-200 rounded-full flex items-center justify-center">
          <img
            src={category.iconUrl}
            alt={category.name}
            className=" w-10 h-10 object-contain"
          />
        </div>
      </div>

      {/* Category name */}
      <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>

      {/* Course count */}
      <p className="text-gray-600 text-sm">
        {category.coursesCount} course{category.coursesCount !== 1 ? "s" : ""}
      </p>
    </div>
  );
}
