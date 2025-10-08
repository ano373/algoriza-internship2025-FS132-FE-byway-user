import {
  FaFacebookF,
  FaGithub,
  FaGoogle,
  FaMicrosoft,
  FaXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router";

export function SocialMediaSections() {
  return (
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
  );
}
