import type { ApiResponse, MessageResponse } from "./general";
import { Decimal } from "decimal.js";

export type AddCartItemRequest = {
  courseId: number;
};
export type AddCartItemResponse = MessageResponse;

export type purchaseCartResponse = MessageResponse;

export type DeleteCartItemRequest = {
  courseId: number;
};
export type DeleteCartItemResponse = MessageResponse;

export type GetCart = {
  courseIds: number[];
  cost: Decimal;
  tax: Decimal;
  total: Decimal;
};
export type GetCartResponse = ApiResponse<GetCart>;

export type CartCountResponse = ApiResponse<{ cartItemsCount: number }>;

export type PaymentCardRequest = {
  country: string;
  state: string;
  cardNumber: string;
  cardHolderName: string;
  expiryDate: string;
  cvv: string;
};

export type PaymentCardRequestError = Partial<
  Record<keyof PaymentCardRequest, string>
>;
