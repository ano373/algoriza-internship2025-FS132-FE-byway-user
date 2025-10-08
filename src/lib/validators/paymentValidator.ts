import type { PaymentCardRequest, PaymentCardRequestError } from "@/types/cart";

export function validatePaymentCard(
  data: PaymentCardRequest
): PaymentCardRequestError {
  const errors: PaymentCardRequestError = {};

  // Card Holder Name validation
  if (!data.cardHolderName.trim()) {
    errors.cardHolderName = "Card holder name is required";
  } else if (!/^[a-zA-Z\s]+$/.test(data.cardHolderName)) {
    errors.cardHolderName =
      "Card holder name must contain only letters and spaces";
  } else if (data.cardHolderName.length > 100) {
    errors.cardHolderName = "Card holder name cannot exceed 100 characters";
  }

  // Card Number validation
  if (!data.cardNumber.trim()) {
    errors.cardNumber = "Card number is required";
  } else if (!/^\d+$/.test(data.cardNumber)) {
    errors.cardNumber = "Card number must contain only digits";
  } else if (data.cardNumber.length < 13) {
    errors.cardNumber = "Card number must be at least 13 digits";
  } else if (data.cardNumber.length > 19) {
    errors.cardNumber = "Card number cannot exceed 19 digits";
  }

  // Expiry Date validation
  if (!data.expiryDate.trim()) {
    errors.expiryDate = "Expiry date is required";
  } else if (!/^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(data.expiryDate)) {
    errors.expiryDate = "Expiry date must be in MM/YY format";
  } else if (!isValidExpiryDate(data.expiryDate)) {
    errors.expiryDate = "Card has expired";
  }

  // Country validation
  if (!data.country.trim()) {
    errors.country = "Country is required";
    // eslint-disable-next-line no-useless-escape
  } else if (!/^[a-zA-Z\s\-]+$/.test(data.country)) {
    errors.country = "Country must contain only letters, spaces";
  } else if (data.country.length > 50) {
    errors.country = "Country cannot exceed 50 characters";
  }

  // State/Union Territory validation
  if (!data.state.trim()) {
    errors.state = "State/Union Territory is required";
    // eslint-disable-next-line no-useless-escape
  } else if (!/^[a-zA-Z\s\-]+$/.test(data.state)) {
    errors.state = "State must contain only letters, spaces";
  } else if (data.state.length > 50) {
    errors.state = "State cannot exceed 50 characters";
  }

  // CVV/CVC validation
  if (!data.cvv.trim()) {
    errors.cvv = "CVV is required";
  } else if (!/^\d+$/.test(data.cvv)) {
    errors.cvv = "CVV must contain only numbers";
  } else if (data.cvv.length > 4) {
    errors.cvv = "CVV cannot exceed 4 characters";
  } else if (data.cvv.length < 3) {
    errors.cvv = "CVV must be at least 3 characters";
  }

  return errors;
}

function isValidExpiryDate(expiryDate: string): boolean {
  if (!expiryDate.trim()) return false;

  const parts = expiryDate.split("/");
  if (parts.length !== 2) return false;

  const month = parseInt(parts[0], 10);
  const year = parseInt(parts[1], 10);

  if (isNaN(month) || isNaN(year)) return false;

  const fullYear = 2000 + year;

  if (month < 1 || month > 12) return false;

  if (fullYear < 2025) return false;

  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1;

  if (fullYear === currentYear && month < currentMonth) {
    return false;
  }

  return true;
}
