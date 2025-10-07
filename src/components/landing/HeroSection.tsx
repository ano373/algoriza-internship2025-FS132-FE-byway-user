import { Link } from "react-router-dom";
import hero_illustration from "@/assets/hero_illustration.png";
export function HeroSection() {
  return (
    <section className="h-[660px] bg-white mb-4">
      <div className="h-full grid grid-cols-2">
        <div className="flex items-center justify-center px-12">
          <div className="max-w-xl mt-10">
            <h2 className="text-5xl font-bold mb-6">
              Unlock Your Potential with Byway
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Welcome to Byway, where learning knows no bounds. We believe that
              education is the key to personal and professional growth, and
              we're here to guide you on your journey to success.
            </p>
            <Link
              to="/login"
              className="inline-block  bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start your journey
            </Link>
          </div>
        </div>

        <div className="relative bg-gray-100 mt-20">
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={hero_illustration}
              alt="Learning journey illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
