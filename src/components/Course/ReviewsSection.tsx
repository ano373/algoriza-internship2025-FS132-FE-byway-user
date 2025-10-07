import { FaStar } from "react-icons/fa";
import { StarRating } from "@components/UI/StarRating";
const ReviewsSection = () => {
  return (
    <div className="max-w-6xl  bg-white py-8 px-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">
        Learner Reviews
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1">
          <div className="flex items-center gap-2 text-lg font-semibold text-gray-800">
            <FaStar className="text-yellow-500" />
            <span>4.6</span>
            <span className="text-gray-500 text-sm font-normal">
              146,951 reviews
            </span>
          </div>

          <div className="mt-4 space-y-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <StarRating value={5} /> <span>80%</span>
            </div>
            <div className="flex items-center gap-2">
              <StarRating value={4} /> <span>10%</span>
            </div>
            <div className="flex items-center gap-2">
              <StarRating value={3} /> <span>5%</span>
            </div>
            <div className="flex items-center gap-2">
              <StarRating value={2} /> <span>3%</span>
            </div>
            <div className="flex items-center gap-2">
              <StarRating value={1} /> <span>2%</span>
            </div>
          </div>
        </div>

        <div className="col-span-2 space-y-4">
          <div className="flex items-start gap-4 border border-gray-200 rounded-lg p-4">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=80&q=80"
              alt="User"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-gray-800">Sarah Johnson</h3>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <FaStar className="text-yellow-500" />
                <span>5</span>
                <span>Reviewed on 15th April, 2024</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                This course completely transformed my approach to design. The
                instructor's teaching style made complex topics feel accessible
                and practical. The hands-on projects were challenging but
                incredibly rewarding.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 border border-gray-200 rounded-lg p-4">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=80&q=80"
              alt="User"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-gray-800">Michael Chen</h3>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <FaStar className="text-yellow-500" />
                <span>4</span>
                <span>Reviewed on 8th May, 2024</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Very comprehensive course with excellent content. The pacing was
                perfect for someone with a busy schedule. I particularly
                appreciated the detailed feedback on assignments and the
                supportive community of fellow learners.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 border border-gray-200 rounded-lg p-4">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=80&q=80"
              alt="User"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-gray-800">Emily Rodriguez</h3>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <FaStar className="text-yellow-500" />
                <span>5</span>
                <span>Reviewed on 2nd June, 2024</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Absolutely worth every penny! The course materials were
                top-notch and the instructor was always available to answer
                questions. I went from complete beginner to confidently creating
                professional designs in just a few months.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="border border-gray-300 text-gray-800 text-sm font-medium px-5 py-2 rounded-md hover:bg-gray-100">
              View more Reviews
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
