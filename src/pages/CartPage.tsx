import { CartBreadCrumb } from "@/components/Cart/CartBreadCrumb";
import CartCourseCard from "@/components/Cart/CartCourseCard";
import { OrderDetails } from "@/components/Cart/OrderDetails";
import { useCart, useDeleteCartItem } from "@/hooks/useCart";
import { useCoursesBatch } from "@/hooks/useCourse";
import { convertToCourseSummaries } from "@/types/course";
import { useNavigate } from "react-router";

export default function CartPage() {
  const { data: cartResponse } = useCart();
  const { mutate: deleteCartItem } = useDeleteCartItem();
  const cart = cartResponse?.value;
  const courseIds = cart?.courseIds;

  const { data: courses } = useCoursesBatch(courseIds || []);
  const courseSummaries = courses ? convertToCourseSummaries(courses) : [];
  const navigate = useNavigate();

  const handleRemoveFromCart = (courseId: number) => {
    deleteCartItem({ courseId });
  };

  return (
    <div className="flex-1 p-10 w-full h-full">
      {!cart || courseIds?.length === 0 ? (
        <div className="flex items-center justify-center h-full mb-50">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600">Add some courses to get started!</p>
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-baseline mb-6">
            <h1 className="text-4xl font-bold mr-6">Shopping Cart</h1>
            <CartBreadCrumb />
          </div>
          <div className="mt-10 mb-4">{courseIds?.length} Courses in cart</div>
          <div className="border-t border-gray-500 w-full mb-8"></div>
          <div className="flex gap-8">
            <div className="flex-1 p-6" gap-3>
              {courseSummaries?.map((course) => (
                <CartCourseCard
                  key={course.courseId}
                  course={course}
                  onRemove={() => handleRemoveFromCart(course.courseId)}
                />
              ))}
            </div>
            <div className="w-80">
              <h2 className="text-lg font-semibold mb-4">Order Details</h2>
              <OrderDetails
                price={cart.cost}
                tax={cart.tax}
                total={cart.total}
              />
              <button
                onClick={() =>
                  navigate("/checkout", { state: { fromCart: true } })
                }
                className="primary-black-button w-full mt-4"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
