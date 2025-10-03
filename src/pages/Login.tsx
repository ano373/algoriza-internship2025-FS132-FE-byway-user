import login_illustration from "@/assets/login_illustration.jpg";

import { FaFacebook, FaGoogle, FaMicrosoft } from "react-icons/fa";
import { FormField } from "@components/UI/FormField";

export default function Login() {
  return (
    <div className="flex h-screen">
      <div className="flex-1 flex items-center justify-center pl-20">
        <div className="w-full max-w-xl">
          <h1 className="text-4xl font-bold mb-12 mt-32 text-center">
            Sign in to your account
          </h1>

          <form className="space-y-8">
            <FormField label="Email">
              <input
                type="email"
                className="w-full px-5 py-4 text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </FormField>

            <FormField label="Password">
              <input
                type="password"
                className="w-full px-5 py-4 text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </FormField>

            <button
              type="submit"
              className="primary-black-button w-full py-4 text-xl"
            >
              Sign in
            </button>
          </form>

          <div className="flex items-center my-10">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-gray-500 text-lg">Sign in with</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          <div className="flex gap-8 justify-around">
            <a
              href="https://facebook.com"
              className="flex items-center gap-3 p-5 border border-gray-300 rounded-md hover:bg-gray-50 transition"
            >
              <FaFacebook className="text-4xl text-[#1877F2]" />
              <span className="text-xl font-semibold text-[#1877F2]">
                Facebook
              </span>
            </a>

            <a
              href="https://google.com"
              className="flex items-center gap-3 p-5 border border-gray-300 rounded-md hover:bg-gray-50 transition"
            >
              <FaGoogle className="text-4xl text-[#DB4437]" />
              <span className="text-xl font-semibold text-[#DB4437]">
                Google
              </span>
            </a>

            <a
              href="https://microsoft.com"
              className="flex items-center gap-3 p-5 border border-gray-300 rounded-md hover:bg-gray-50 transition"
            >
              <FaMicrosoft className="text-4xl text-[#00A4EF]" />
              <span className="text-xl font-semibold text-[#00A4EF]">
                Microsoft
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <img
          src={login_illustration}
          alt="Login illustration"
          className="max-h-screen object-contain"
        />
      </div>
    </div>
  );
}
