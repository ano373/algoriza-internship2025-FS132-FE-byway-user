export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function containsNumbers(text: string): boolean {
  return /\d/.test(text);
}

export const createEnumConfig = <T extends string>(
  configs: Array<{ label: string; value: T }>
) => {
  const values = configs.map((c) => c.value);
  const labelMap = Object.fromEntries(configs.map((c) => [c.value, c.label]));
  const valueMap = Object.fromEntries(configs.map((c) => [c.label, c.value]));

  return {
    configs,
    values: values as readonly T[],
    toLabel: (value: T) => labelMap[value] || value,
    toValue: (label: string) => valueMap[label] as T,
  };
};
