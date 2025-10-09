import { Link } from "react-router-dom";
import { FaFacebookF, FaGithub, FaGoogle, FaMicrosoft } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const noopPrevent = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <footer className="bg-gray-800 text-white w-full h-[400px]">
      <div className="max-w-[1400px] mx-auto h-full px-8 py-10  pt-20 flex items-start">
        <div className="w-full grid grid-cols-4  gap-8">
          <div className="flex flex-col">
            <div className="flex items-center gap-0.5 mb-6">
              <img src="./Byway_logo.png" alt="logo" className="w-10 h-10" />

              <span className="text-xl flex-1 font-bold text-white">ByWay</span>
            </div>

            <p className="text-gray-300 leading-relaxed text-sm font-primary ">
              Empowering learners through accessible and engaging online
              education.
              <br />
              Byway is a leading online learning platform dedicated to providing
              high-quality, flexible, and affordable educational experiences.
            </p>
          </div>

          <div className="flex flex-col pl-16">
            <Link
              to="/"
              onClick={noopPrevent}
              className="text-white text-lg font-semibold mb-3 hover:underline active:translate-y-[1px] focus:outline-none"
            >
              Get Help
            </Link>

            <div className="h-[183px] flex flex-col justify-start gap-3">
              <Link
                to="/"
                onClick={noopPrevent}
                className="text-gray-300 text-sm hover:text-white/90 active:scale-[0.99] transition-all"
              >
                Contact Us
              </Link>
              <Link
                to="/"
                onClick={noopPrevent}
                className="text-gray-300 text-sm hover:text-white/90 active:scale-[0.99] transition-all"
              >
                Latest Articles
              </Link>
              <Link
                to="/"
                onClick={noopPrevent}
                className="text-gray-300 text-sm hover:text-white/90 active:scale-[0.99] transition-all"
              >
                FAQ
              </Link>
            </div>
          </div>

          <div className="flex flex-col">
            <Link
              to="/"
              onClick={noopPrevent}
              className="text-white text-lg font-semibold mb-3 hover:underline active:translate-y-[1px] focus:outline-none"
            >
              Programs
            </Link>

            <div className="h-[183px] flex flex-col justify-start gap-3">
              <Link
                to="/"
                onClick={noopPrevent}
                className="text-gray-300 text-sm hover:text-white/90 active:scale-[0.99] transition-all"
              >
                Art &amp; Design
              </Link>
              <Link
                to="/"
                onClick={noopPrevent}
                className="text-gray-300 text-sm hover:text-white/90 active:scale-[0.99] transition-all"
              >
                Business
              </Link>
              <Link
                to="/"
                onClick={noopPrevent}
                className="text-gray-300 text-sm hover:text-white/90 active:scale-[0.99] transition-all"
              >
                IT &amp; Software
              </Link>
              <Link
                to="/"
                onClick={noopPrevent}
                className="text-gray-300 text-sm hover:text-white/90  transition-all"
              >
                Languages
              </Link>
              <Link
                to="/"
                onClick={noopPrevent}
                className="text-gray-300 text-sm hover:text-white/90 transition-all"
              >
                Programming
              </Link>
            </div>
          </div>

          <div className="flex flex-col">
            <Link
              to="/"
              onClick={noopPrevent}
              className="text-white text-lg font-semibold mb-3 hover:underline active:translate-y-[1px] focus:outline-none"
            >
              Contact Us
            </Link>

            <div className="h-[183px] flex flex-col justify-start gap-3">
              <p className="text-gray-300 text-sm leading-relaxed">
                Address: 123 Main Street, Anytown, CA 12345
              </p>
              <p className="text-gray-300 text-sm">Tel: +(123) 456-7890</p>
              <p className="text-gray-300 text-sm">Mail: bywayedu@webkul.in</p>

              <div className="mt-3 flex items-center gap-3">
                <Link
                  to="https://facebook.com"
                  className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-sm"
                >
                  <FaFacebookF size={24} className="text-blue-800" />
                </Link>

                <Link
                  to="https://github.com"
                  className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-sm"
                >
                  <FaGithub size={24} className="text-black" />
                </Link>

                <Link
                  to="https://google.com"
                  className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-sm"
                >
                  <FaGoogle size={24} className="text-red-600" />
                </Link>

                <Link
                  to="https://x.com"
                  className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-sm"
                >
                  <FaXTwitter size={24} className="text-gray-800" />
                </Link>

                <Link
                  to="https://microsoft.com"
                  className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-sm"
                >
                  <FaMicrosoft size={24} className="text-cyan-500" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
