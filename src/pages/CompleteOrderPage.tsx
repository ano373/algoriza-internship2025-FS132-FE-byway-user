import { FaCheckCircle } from "react-icons/fa";
import { Link, Navigate, useLocation } from "react-router";

export default function CompleteOrderPage() {
  const location = useLocation();
  if (!location.state?.fromCheckout) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
      <FaCheckCircle size={170} className="text-green-500  mb-4" />
      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        Purchase Complete
      </h1>
      <p className="text-gray-500 text-lg mb-6">
        You will receive a confirmation email soon!
      </p>
      <Link
        to="/"
        className="inline-block px-5 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
