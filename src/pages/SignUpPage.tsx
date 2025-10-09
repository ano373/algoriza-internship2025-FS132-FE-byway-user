import { FormField } from "@/components/UI/FormField";
import AuthMediaSection from "@/components/UI/StaticSections/AuthMediaSection";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import type { SignUpRequest, SignUpRequestError } from "@/types/auth";
import { useNavigate } from "react-router";
import { validateUser } from "@/lib/validators/userValidator";
import { useSignUp } from "@/hooks/useAuth";

export default function SignUpPage() {
  const navigate = useNavigate();
  const signUpMutation = useSignUp();
  const [formData, setFormData] = useState<SignUpRequest>({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<SignUpRequestError>();

  const handleChange = (field: keyof SignUpRequest, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateUser(formData);
    setErrors(errors);
    if (Object.keys(errors).length == 0) {
      setErrors({});
      signUpMutation.mutate(formData, {
        onSuccess: () => navigate("/"),
      });
    }
  };

  return (
    <div className="flex h-full">
      <div className="hidden md:flex w-2/5 items-center justify-center bg-gray-50 overflow-hidden">
        <img
          src="./Signup_illustration.jpg"
          alt="SignUp illustration"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="w-ful f-full l md:w-3/5 flex justify-center overflow-y-auto">
        <div className="w-full px-8 py-16 space-y-10">
          <h1 className="text-4xl font-bold text-center">
            Create your account
          </h1>
          <form className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 min-w-0">
                <FormField error={errors?.firstName} label="First Name *">
                  <input
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    placeholder="First Name"
                    type="text"
                    className="w-full px-5 py-4 text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </FormField>
              </div>

              <div className="flex-1 min-w-0">
                <FormField error={errors?.lastName} label="Last Name*">
                  <input
                    onChange={(e) => handleChange("lastName", e.target.value)}
                    placeholder="Last Name"
                    type="text"
                    className="w-full px-5 py-4 text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </FormField>
              </div>
            </div>

            <FormField error={errors?.userName} label="Username*">
              <input
                onChange={(e) => handleChange("userName", e.target.value)}
                placeholder="Username"
                type="text"
                className="w-full px-5 py-4 text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </FormField>

            <FormField error={errors?.email} label="Email*">
              <input
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="Email ID"
                type="email"
                className="w-full px-5 py-4 text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </FormField>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 min-w-0">
                <FormField error={errors?.password} label="Password*">
                  <input
                    onChange={(e) => handleChange("password", e.target.value)}
                    placeholder="Enter Password"
                    type="password"
                    className="w-full px-5 py-4 text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </FormField>
              </div>

              <div className="flex-1 min-w-0">
                <FormField
                  error={errors?.confirmPassword}
                  label="Confirm Password*"
                >
                  <input
                    onChange={(e) =>
                      handleChange("confirmPassword", e.target.value)
                    }
                    placeholder="Confirm Password"
                    type="password"
                    className="w-full px-5 py-4 text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </FormField>
              </div>
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="primary-black-button w-full py-4 text-xl flex items-center justify-center gap-2"
            >
              Create Account
              <FaArrowRightLong />
            </button>
          </form>
          <div className="flex items-center">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-gray-500 text-lg">Sign in with</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
          <AuthMediaSection />
        </div>
      </div>
    </div>
  );
}
