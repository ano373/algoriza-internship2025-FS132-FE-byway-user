import type decimal from "decimal.js";

interface OrderDetailsProps {
  price: decimal;
  tax: decimal;
  total: decimal;
}

export function OrderDetails({ price, tax, total }: OrderDetailsProps) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg p-5 font-sans text-gray-900">
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span>Price</span>
          <span className="font-medium">${price.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span>Discount</span>
          <span className="font-medium">$0.00</span>
        </div>

        <div className="flex justify-between text-sm">
          <span>Tax</span>
          <span className="font-medium">${tax.toFixed(2)}</span>
        </div>

        <hr className="border-gray-200" />

        <div className="flex justify-between text-base font-semibold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
