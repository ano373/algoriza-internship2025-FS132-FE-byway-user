import { SocialMediaSections } from "../UI/StaticSections/SocialMediaSections";

interface PurchaseCardProps {
  price: number | undefined;
  courseThumbnailUrl: string;
  onAddToCart: () => void;
  onBuyNow: () => void;
  onAuthRequired: () => void;
  isAddToCartDisabled?: boolean;
  isBuyNowDisabled?: boolean;
}

export function PurchaseCard({
  price,
  courseThumbnailUrl,
  onAddToCart,
  onBuyNow,
  isAddToCartDisabled = false,
  isBuyNowDisabled = false,
}: PurchaseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <img
          src={courseThumbnailUrl}
          alt="Course preview"
          className="w-full h-54 object-cover"
        />
      </div>

      <div className="p-6 border-b border-gray-300">
        <div className="text-3xl font-bold text-gray-900 mb-6">${price}</div>

        <div className="space-y-3">
          <button
            onClick={onAddToCart}
            disabled={isAddToCartDisabled}
            className={`w-full primary-black-button cursor-pointer transition-colors ${
              isAddToCartDisabled
                ? "bg-gray-400 cursor-not-allowed opacity-50"
                : "hover:bg-gray-400"
            }`}
          >
            Add To Cart
          </button>

          <button
            onClick={onBuyNow}
            disabled={isBuyNowDisabled}
            className={`w-full bg-white border-2 border-gray-800 py-3 px-4 cursor-pointer rounded-lg font-medium transition-colors ${
              isBuyNowDisabled
                ? "border-gray-200 text-gray-400 cursor-not-allowed opacity-50"
                : "border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
          >
            {isBuyNowDisabled ? "Processing..." : "Buy Now"}
          </button>
        </div>
      </div>
      <div className="px-6 pb-6   ">
        share
        <SocialMediaSections />
      </div>
    </div>
  );
}
