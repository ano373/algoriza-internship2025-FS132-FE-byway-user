import { CourseBreadcrumb } from "@/components/Course/CourseBreadScrumb";
import { ErrorMessage } from "@/components/UI/ErrorMessage";
import { LoadingSpinner } from "@/components/UI/LoadingSpinner";
import { useCourse } from "@/hooks/useCourse";
import { Navigate, useNavigate, useParams } from "react-router";
import ReactMarkdown from "react-markdown";
import { StarRating } from "@/components/UI/StarRating";
import { FaStar, FaUserGraduate } from "react-icons/fa6";
import { FaPlayCircle } from "react-icons/fa";
import ReviewsSection from "@/components/Course/ReviewsSection";
import CourseSection from "@/components/UI/CourseSection";
import { PurchaseCard } from "@/components/Course/PurchaseCard";
import toast from "react-hot-toast";
import { useUser } from "@/hooks/useAuth";
import { useAddCartItem, useCart } from "@/hooks/useCart";

export default function CoursePage() {
  const { id } = useParams();

  const courseId = id ? parseInt(id, 10) : NaN;
  const isValidId = !isNaN(courseId) && courseId > 0;

  const {
    data: courseDetailsResponse,
    isLoading,
    error,
  } = useCourse(courseId, { enabled: isValidId });
  const course = courseDetailsResponse?.value;

  const navigate = useNavigate();

  const { data: userResponse } = useUser();
  const user = userResponse?.value;

  const { data: cartResponse } = useCart();
  const cart = cartResponse?.value;

  const addCartItemMutation = useAddCartItem();

  const courseInCart =
    course?.courseId !== undefined
      ? cart?.courseIds?.includes(course.courseId)
      : false;

  const isAddToCartDisabled = courseInCart;
  const isBuyNowDisabled = !course?.courseId;

  const handleAuthRequired = () => {
    toast.error("You have to sign in to perform this action");
    navigate("/login");
  };

  const handleAddToCart = () => {
    if (!user) {
      handleAuthRequired();
      return;
    }

    if (course?.courseId) {
      addCartItemMutation.mutate({ courseId: course.courseId });
    }
  };

  const handleBuyNow = () => {
    if (!user) {
      handleAuthRequired();
      return;
    }

    if (course?.courseId && !courseInCart) {
      addCartItemMutation.mutate(
        { courseId: course.courseId },
        {
          onSuccess: () => {
            navigate("/cart");
          },
        }
      );
    } else if (courseInCart) {
      navigate("/cart");
    }
  };

  if (!isValidId) {
    return <Navigate to="/404" replace />;
  }

  if (isLoading) {
    return <LoadingSpinner message="Loading course details..." />;
  }

  if (error) {
    return <ErrorMessage message="Failed to load the course" />;
  }

  return (
    <div className="flex-1 p-10  w-full h-full">
      <div className="relative">
        <div className="absolute top-0 right-20 z-50">
          <PurchaseCard
            price={course?.price}
            courseThumbnailUrl={course?.thumbnailUrl || "Course preview"}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
            onAuthRequired={handleAuthRequired}
            isAddToCartDisabled={isAddToCartDisabled}
            isBuyNowDisabled={isBuyNowDisabled}
          />
        </div>
        <div className=" ml-10 p-4 bg-[#f8fafc] bg-clip-padding">
          <CourseBreadcrumb courseTitle={course?.title || "Course Title"} />
          <div className=" mt-10">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {course?.title}
            </h1>
            <div className="text-lg text-gray-700 leading-relaxed max-w-4xl">
              <div className="prose max-w-4xl">
                <ReactMarkdown>{course?.description}</ReactMarkdown>
              </div>
            </div>
          </div>
          <div className=" w-1/2 h-full mt-5">
            <div className="text-gray-600">
              <div className="flex items-center">
                <span className="mr-2"> {course?.rating}</span>
                <StarRating value={course?.rating || 0} />
                <span className="mx-2">|</span>
                <span>
                  {(course?.totalDurationMinutes ?? 0) < 60
                    ? `${course?.totalDurationMinutes ?? 0} Minutes`
                    : `${Math.floor(
                        (course?.totalDurationMinutes ?? 0) / 60
                      )} Hours`}{" "}
                  {course?.totalLessonCount} Lectures{" "}
                  <span className="mx-1">|</span> {course?.level}
                </span>
              </div>
              <div className="w-1/2 h-full mt-6 flex items-center space-x-2">
                <img
                  src={course?.instructor.profileImageUrl}
                  alt={course?.instructor.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <span className="text-gray-700">Created by </span>
                <span className="text-blue-600">{course?.instructor.name}</span>
              </div>
              <div className="w-1/2 h-full mt-5 flex  items-center space-x-2">
                <img
                  src={course?.category.iconUrl}
                  alt={course?.category.name}
                  className="w-8 h-8 object-contain"
                />
                <span className="text-gray-700">{course?.category.name}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  p-4 ml-10  mt-10 bg-white">
          {/* Navigation Buttons */}
          <div className=" flex text-2xl gap-2 border-b border-gray-200 pb-5">
            <button
              onClick={() =>
                document
                  .getElementById("description")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-4 py-2  cursor-pointer text-gray-700 border bg-blue-50  rounded hover:bg-blue-100 transition"
            >
              Description
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("instructor")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-4 py-2 cursor-pointer text-gray-700 bg-blue-50 rounded hover:bg-blue-100 transition"
            >
              Instructor
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("content")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-4 py-2 cursor-pointer text-gray-700 bg-blue-50 rounded hover:bg-blue-100 transition"
            >
              Content
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("reviews")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-4 py-2 cursor-pointer text-gray-700 bg-blue-50 rounded hover:bg-blue-100 transition"
            >
              Reviews
            </button>
          </div>

          {/* Sections */}
          <div id="description" className="mt-6 pb-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold mb-2">Course Description</h2>
            <div className="prose  max-w-3xl">
              <ReactMarkdown>{course?.description}</ReactMarkdown>
            </div>
            <h2 className="text-xl font-semibold mb-2 mt-6">
              Course Certification
            </h2>
            <div className="prose max-w-3xl">
              <ReactMarkdown>{course?.certification}</ReactMarkdown>
            </div>
          </div>

          <div id="instructor" className="mt-6 pb-6 border-b border-gray-200">
            <div className="max-w-3xl  p-6 bg-white rounded-xl shadow-md border border-gray-100">
              <h2 className="text-sm font-semibold text-gray-600 mb-2">
                Instructor
              </h2>
              <div className="flex items-center gap-4">
                <img
                  src={course?.instructor.profileImageUrl}
                  alt="Instructor portrait"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 hover:underline cursor-pointer">
                    {course?.instructor.name}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {course?.instructor.jobTitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 mt-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-500" />
                  <span>40,445 Reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUserGraduate className="text-blue-500" />
                  <span>{course?.instructor.studentCount} Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaPlayCircle className="text-green-500" />
                  <span>15 Courses</span>
                </div>
              </div>

              <div className="text-gray-600 mt-4 text-sm leading-relaxed">
                <ReactMarkdown>{course?.instructor.description}</ReactMarkdown>
              </div>
            </div>
          </div>

          <div
            id="content"
            className="max-w-3xl  bg-white border border-gray-200 rounded-lg p-6"
          >
            <h2 className="text-xl font-semibold mb-2">Content</h2>
            <div className="divide-y divide-gray-200">
              {course?.sections
                .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
                .map((section) => (
                  <div
                    key={section.courseSectionId}
                    className="flex items-center justify-between py-4 text-gray-800"
                  >
                    <div className="text-sm font-medium">
                      {section.title || "Untitled Section"}
                    </div>
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <span>{section.lessonCount} Lectures</span>
                      <span>
                        {Math.ceil(section.durationMinutes / 60)} hour
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div id="reviews">
            <ReviewsSection />
          </div>
          <div>
            <CourseSection
              header="More Courses like this"
              categoryId={course?.category.categoryId}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
