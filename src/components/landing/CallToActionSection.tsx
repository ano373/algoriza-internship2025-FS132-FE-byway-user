import { Link } from "react-router-dom"; // use react-router-dom

export default function CallToActionSection({
  leftHeading = "Become an Instructor",
  leftSub = "instructors from around the world teach millions of students on Byway. We provide the tools and skills to teach what you love.",
  rightHeading = "Transform your life through education",
  rightSub = "Learners around the world are launching new careers, advancing in their fields, and enriching their lives.",
}) {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 pt-24 pb-20 space-y-20">
      <div className="flex flex-col md:flex-row items-center md:items-center gap-8">
        <div className="flex-1 flex justify-center md:justify-start">
          <img
            src="./callToaction_1.png"
            alt="instructor placeholder"
            className="w-72 md:w-96 h-auto object-contain"
          />
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-gray-800 text-lg md:text-xl font-semibold leading-relaxed mb-4">
            {leftHeading}
          </h2>
          {leftSub && <p className="text-gray-500 mb-6 max-w-xl">{leftSub}</p>}

          <div className="flex items-center gap-4">
            <button type="button" className="primary-black-button">
              Start Your Instructor Journey →
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-center gap-8">
        <div className="flex-1 flex flex-col justify-center order-2 md:order-1">
          <h2 className="text-gray-800 text-lg md:text-xl font-semibold leading-relaxed mb-4">
            {rightHeading}
          </h2>
          {rightSub && (
            <p className="text-gray-500 mb-6 max-w-xl">{rightSub}</p>
          )}

          <div className="flex items-center gap-4">
            <Link
              to="/courses"
              className="primary-black-button inline-flex items-center"
            >
              Checkout Courses →
            </Link>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end order-1 md:order-2">
          <img
            src="./callToaction_2.png"
            alt="learner placeholder"
            className="w-72 md:w-96 h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
