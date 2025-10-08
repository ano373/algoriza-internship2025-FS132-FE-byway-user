import { useState } from "react";

interface CourseTitleCardProps {
  courseTitle: string;
}

export default function CourseTitleCard({ courseTitle }: CourseTitleCardProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="relative bg-white border border-gray-200 rounded-lg p-5 font-sans text-gray-900 cursor-pointer transition hover:shadow-md"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <p className="text-sm font-medium truncate">{courseTitle}</p>
      {showTooltip && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max max-w-xs bg-gray-800 text-white  rounded-md py-2 px-3 shadow-lg">
          {courseTitle}
        </div>
      )}
    </div>
  );
}
