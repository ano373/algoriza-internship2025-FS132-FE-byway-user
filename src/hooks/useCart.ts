import { CartApi } from "@/api/CartApi";
import type {
  AddCartItemRequest,
  CartCountResponse,
  DeleteCartItemRequest,
  GetCartResponse,
  PaymentCardRequest,
} from "@/types/cart";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useAddCartItem() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: AddCartItemRequest) => CartApi.AddCart(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      queryClient.invalidateQueries({ queryKey: ["cartCount"] });
    },
  });
}

export function useDeleteCartItem() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: DeleteCartItemRequest) =>
      CartApi.DeleteCartItem(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      queryClient.invalidateQueries({ queryKey: ["cartCount"] });
    },
  });
}

export function usePurchaseCart() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: PaymentCardRequest) => CartApi.PurchaseCart(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      queryClient.invalidateQueries({ queryKey: ["cartCount"] });
    },
  });
}

export function useCart() {
  return useQuery<GetCartResponse>({
    queryKey: ["cart"],
    queryFn: CartApi.GetCart,
    staleTime: 1000 * 60 * 1, // 1 minutes
  });
}

export function useCartCount() {
  return useQuery<CartCountResponse>({
    queryKey: ["cartCount"],
    queryFn: CartApi.GetCartCount,
    staleTime: 1000 * 60 * 1, // 1 minutes
  });
}
