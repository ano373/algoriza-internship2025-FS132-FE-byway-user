export function CourseInfo() {
  return (
    <div className="flex items-center space-x-4 mt-6">
      <div className="flex items-center">
        <span className="text-orange-500 font-semibold text-lg">4.6</span>
        <div className="flex ml-2">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-orange-400 fill-current"
              viewBox="0 0 20 20"
            ></svg>
          ))}
        </div>
      </div>
      <div className="text-gray-600">
        <span className="mx-2">|</span>
        <span>22 Total Hours. 155 Lectures. All levels</span>
      </div>
    </div>
  );
}

export default CourseInfo;
