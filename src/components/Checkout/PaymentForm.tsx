import { useState } from "react";
import { FormField } from "../UI/FormField";
import { RiVisaFill } from "react-icons/ri";

export default function PaymentForm() {
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal">("card");

  return (
    <div className="max-w-5xl w-full mx-auto p-6   rounded-lg ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <FormField label="Country">
          <input
            type="text"
            placeholder="Enter Country"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </FormField>
        <FormField label="State/Union Territory">
          <input
            type="text"
            placeholder="Enter State"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </FormField>
      </div>

      <h2 className="font-semibold text-lg mb-3">Payment Method</h2>

      <div
        className={`border rounded-xl p-5 mb-4 ${
          paymentMethod === "card"
            ? "border-blue-500 bg-blue-50/40"
            : "border-gray-300"
        }`}
      >
        <label className="flex items-center gap-3 mb-3">
          <input
            type="radio"
            name="payment"
            checked={paymentMethod === "card"}
            onChange={() => setPaymentMethod("card")}
            className="h-4 w-4 accent-blue-600"
          />
          <span className="font-semibold text-gray-800">Credit/Debit Card</span>
          <div className="ml-auto text-blue-600">
            <RiVisaFill size={50} />
          </div>
        </label>

        {paymentMethod === "card" && (
          <div className="space-y-4">
            <FormField label="Name of Card">
              <input
                type="text"
                placeholder="Name of card"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </FormField>

            <FormField label="Card Number">
              <input
                type="text"
                placeholder="Card Number"
                maxLength={16}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </FormField>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField label="Expiry Date">
                <input
                  type="text"
                  placeholder="MM/YY"
                  maxLength={5}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </FormField>
              <FormField label="CVC/CVV">
                <input
                  type="text"
                  placeholder="CVC"
                  maxLength={4}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </FormField>
            </div>
          </div>
        )}
      </div>

      <div
        className={`border rounded-xl p-5 flex items-center justify-between ${
          paymentMethod === "paypal"
            ? "border-blue-500 bg-blue-50/40"
            : "border-gray-300"
        }`}
      >
        <label className="flex items-center gap-3">
          <input
            type="radio"
            name="payment"
            checked={paymentMethod === "paypal"}
            onChange={() => setPaymentMethod("paypal")}
            className="h-4 w-4 accent-blue-600"
          />
          <span className="font-semibold text-gray-800">PayPal</span>
        </label>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
          alt="PayPal"
          className="h-5"
        />
      </div>
    </div>
  );
}
