import { http } from "@/lib/http";
import type {
  AddCartItemRequest,
  AddCartItemResponse,
  CartCountResponse,
  DeleteCartItemRequest,
  DeleteCartItemResponse,
  GetCartResponse,
  PaymentCardRequest,
  purchaseCartResponse,
} from "@/types/cart";

async function AddCart(
  payload: AddCartItemRequest
): Promise<AddCartItemResponse> {
  const response = await http.post<AddCartItemResponse>(
    "/cart/items",
    payload,
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  return response.data;
}

async function PurchaseCart(
  payload: PaymentCardRequest
): Promise<purchaseCartResponse> {
  const response = await http.post<purchaseCartResponse>(
    "/cart/purchase",
    payload,
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  return response.data;
}

async function DeleteCartItem(
  request: DeleteCartItemRequest
): Promise<DeleteCartItemResponse> {
  const response = await http.delete<DeleteCartItemResponse>(
    `/cart/items/${request.courseId}`,
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  return response.data;
}

async function GetCart(): Promise<GetCartResponse> {
  const response = await http.get<GetCartResponse>("/cart", {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}

async function GetCartCount(): Promise<CartCountResponse> {
  const response = await http.get<CartCountResponse>("/cart/count", {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}

export const CartApi = {
  AddCart,
  PurchaseCart,
  DeleteCartItem,
  GetCart,
  GetCartCount,
};
