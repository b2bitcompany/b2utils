export const isAllDigitsTheSame = (digits: string) => {
  return digits.split('').every((currentValue, _, array) => {
    return currentValue === array[0];
  });
};
