import { CartApi } from "@/api/CartApi";
import type {
  AddCartItemRequest,
  CartCountResponse,
  DeleteCartItemRequest,
  GetCartResponse,
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
    mutationFn: () => CartApi.PurchaseCart(),
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
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

export function useCartCount() {
  return useQuery<CartCountResponse>({
    queryKey: ["cartCount"],
    queryFn: CartApi.GetCartCount,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}
