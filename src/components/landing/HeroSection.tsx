import { Link } from "react-router-dom";
export function HeroSection() {
  return (
    <section className="min-h-screen bg-white mb-4 py-8 md:py-0">
      <div className="h-full flex flex-col lg:flex-row">
        <div className="flex items-center justify-center px-6 py-12 lg:px-12 lg:py-0 lg:w-1/2">
          <div className="max-w-xl mt-0 lg:mt-10 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Unlock Your Potential with Byway
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
              Welcome to Byway, where learning knows no bounds. We believe that
              education is the key to personal and professional growth, and
              we're here to guide you on your journey to success.
            </p>
            <Link
              to="/login"
              className="inline-block bg-blue-600 text-white px-6 py-3 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start your journey
            </Link>
          </div>
        </div>

        <div className="lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
          <div className="w-full h-full flex items-center justify-center">
            <img
              src="./hero_illustration.png"
              alt="Learning journey illustration"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
