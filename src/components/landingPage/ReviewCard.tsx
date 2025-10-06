// components/ReviewCard.tsx
import { FaQuoteLeft } from "react-icons/fa";

interface ReviewCardProps {
  name: string;
  role: string;
  image: string;
  review: string;
}

export default function ReviewCard({
  name,
  role,
  image,
  review,
}: ReviewCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 flex flex-col gap-4 w-[400px] ">
      <div className="flex flex-col gap-2">
        <FaQuoteLeft className="text-blue-500 text-xl" />
        <p className="text-gray-700 text-sm leading-snug">{review}</p>
      </div>

      <div className="flex items-center">
        <img
          src={image}
          alt={name}
          className="w-11 h-11 rounded-full object-cover border"
        />
        <div className="ml-2">
          <h4 className="text-sm font-semibold text-gray-900 leading-tight">
            {name}
          </h4>
          <p className="text-gray-500 text-xs leading-tight">{role}</p>
        </div>
      </div>
    </div>
  );
}
