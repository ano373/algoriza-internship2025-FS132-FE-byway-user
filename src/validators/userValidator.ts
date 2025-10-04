import { containsNumbers, isValidEmail } from "@/lib/helpers";
import type { SignUpRequest, SignUpRequestError } from "@/types/auth";

export function validateUser(data: SignUpRequest): SignUpRequestError {
  const errors: SignUpRequestError = {};

  if (!data.userName.trim()) {
    errors.userName = "Username is required.";
  } else if (data.userName.length > 50) {
    errors.userName = "Username must not exceed 50 characters.";
  }

  if (!data.firstName.trim()) {
    errors.firstName = "First name is required.";
  } else if (containsNumbers(data.firstName)) {
    errors.firstName = "First name cannot contain numbers.";
  } else if (data.firstName.length < 3) {
    errors.firstName = "First name must be at least 3 characters.";
  } else if (data.firstName.length > 50) {
    errors.firstName = "First name must not exceed 50 characters.";
  }

  if (!data.lastName.trim()) {
    errors.lastName = "Last name is required.";
  } else if (containsNumbers(data.lastName)) {
    errors.lastName = "Last name cannot contain numbers.";
  } else if (data.lastName.length < 3) {
    errors.lastName = "Last name must be at least 3 characters.";
  } else if (data.lastName.length > 50) {
    errors.lastName = "Last name must not exceed 50 characters.";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!isValidEmail(data.email)) {
    errors.email = "Invalid email format.";
  }

  if (!data.password) {
    errors.password = "Password is required.";
  } else if (data.password.length < 4) {
    errors.password = "Password must be at least 4 characters.";
  }

  if (!data.confirmPassword) {
    errors.confirmPassword = "Please confirm your password.";
  } else if (data.password !== data.confirmPassword) {
    errors.confirmPassword = "Passwords do not match.";
  }

  return errors;
}
