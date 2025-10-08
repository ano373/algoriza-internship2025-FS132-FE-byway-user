import { OrderDetails } from "@/components/Cart/OrderDetails";
import { CheckoutBreadCrumb } from "@/components/Checkout/CheckoutBreadCrumb";
import CourseTitleCard from "@/components/Checkout/CourseTitleCard";
import PaymentForm from "@/components/Checkout/PaymentForm";
import { useCart, usePurchaseCart } from "@/hooks/useCart";
import { useCoursesBatch } from "@/hooks/useCourse";
import { validatePaymentCard } from "@/lib/validators/paymentValidator";
import type { PaymentCardRequest, PaymentCardRequestError } from "@/types/cart";
import { convertToCourseSummaries } from "@/types/course";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function CheckoutPage() {
  const purchaseCartMutation = usePurchaseCart();
  const { data: cartResponse } = useCart();
  const cart = cartResponse?.value;
  const courseIds = cart?.courseIds;

  const { data: courses } = useCoursesBatch(courseIds || []);
  const courseSummaries = courses ? convertToCourseSummaries(courses) : [];
  const navigate = useNavigate();

  const [errors, setErrors] = useState<PaymentCardRequestError>();
  const [formData, setFormData] = useState<PaymentCardRequest>({
    country: "",
    state: "",
    cardHolderName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validatePaymentCard(formData);
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      setErrors({});
      purchaseCartMutation.mutate(formData, {
        onSuccess: () => navigate("/checkout/success"),
      });
    }
  };

  const handleChange = (field: keyof PaymentCardRequest, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="flex-1 w-full min-h-screen px-6 py-8 bg-gray-50">
      {!cart || courseIds?.length === 0 ? (
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2 text-gray-800">
              Your Cart is Empty
            </h1>
            <p className="text-gray-600 text-sm">
              Add some courses to get started!
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2 sm:mb-0">
              Checkout
            </h1>
            <CheckoutBreadCrumb />
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 border border-blue-300 rounded-2xl shadow-sm p-6">
              <form id="payment-form" onSubmit={handleSubmit}>
                <PaymentForm
                  onChange={handleChange}
                  errors={errors}
                  formData={formData}
                />
              </form>
            </div>

            <div className="w-full lg:w-96 bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4 text-gray-800">
                Order Details
              </h2>
              <div className="space-y-1 mb-4">
                {courseSummaries?.map((course) => (
                  <CourseTitleCard
                    key={course.courseId}
                    courseTitle={course.title}
                  />
                ))}
              </div>
              <OrderDetails
                price={cart.cost}
                tax={cart.tax}
                total={cart.total}
              />
              <button
                type="submit"
                form="payment-form"
                className="primary-black-button w-full mt-5 py-3 rounded-xl"
              >
                Pay
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
