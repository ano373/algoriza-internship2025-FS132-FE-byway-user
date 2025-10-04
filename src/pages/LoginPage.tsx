import login_illustration from "@/assets/login_illustration.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { FormField } from "@components/UI/FormField";
import { useLogin } from "@/hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router";
import { isValidEmail } from "@/lib/helpers";
import SocailMediaSection from "@/components/UI/StaticSections/SocailMediaSection";

export default function LoginPage() {
  const loginMutation = useLogin();
  const [identifier, SetIdentifier] = useState<string>("");
  const [password, SetPassword] = useState<string>("");
  const [errors, setErrors] = useState<{
    identifier?: string;
    password?: string;
  }>({});

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: typeof errors = {};

    if (!identifier.trim()) {
      newErrors.identifier = "Email or username is required.";
    } else {
      if (!isValidEmail(identifier)) {
        newErrors.identifier = "Enter a valid email or username.";
      }
    }

    if (!password.trim()) {
      newErrors.password = "Password is required.";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const payload = isValidEmail(identifier)
      ? { email: identifier, password }
      : { username: identifier, password };

    setErrors({});
    loginMutation.mutate(payload, {
      onSuccess: () => navigate("/testpage"),
    });
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex items-center justify-center pl-20">
        <div className="w-full max-w-xl">
          <h1 className="text-4xl font-bold mb-12 mt-32 text-center">
            LogIn to your account
          </h1>

          <form className="space-y-8">
            <FormField error={errors.identifier} label="Email">
              <input
                onChange={(e) => SetIdentifier(e.target.value)}
                placeholder="Username or Email ID"
                type="email"
                className="w-full px-5 py-4 text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </FormField>

            <FormField error={errors.password} label="Password">
              <input
                onChange={(e) => SetPassword(e.target.value)}
                placeholder="Enter Password"
                type="password"
                className="w-full px-5 py-4 text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </FormField>

            <button
              type="submit"
              onClick={handleSubmit}
              className="primary-black-button w-full py-4 text-xl flex items-center justify-center gap-2"
            >
              LogIn
              <FaArrowRightLong />
            </button>
          </form>

          <div className="flex items-center my-10">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-gray-500 text-lg">Sign in with</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          <SocailMediaSection />
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
