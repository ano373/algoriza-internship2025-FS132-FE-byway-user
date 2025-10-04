export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function containsNumbers(text: string): boolean {
  return /\d/.test(text);
}
