import { isAllDigitsTheSame } from '../helpers';

const isVerifyingDigitValid = (digits: string, digit: number) => {
  let sum = 0;
  const size = digits.length;
  for (let i = 0; i < size; i++) {
    sum += parseInt(digits.charAt(i)) * (size + 1 - i);
  }

  let calculatedDigit = 11 - (sum % 11);
  if (calculatedDigit === 10 || calculatedDigit === 11) {
    calculatedDigit = 0;
  }

  return calculatedDigit === digit;
};

export const validate = (value: string) => {
  value = value.replace(/\D/g, '');
  if (value === '') {
    return false;
  }
  if (value.length !== 11) {
    return false;
  }
  if (isAllDigitsTheSame(value)) {
    return false;
  }
  const firstVerifyDigit = Number(value[value.length - 2]);
  if (!isVerifyingDigitValid(value.substring(0, 9), firstVerifyDigit)) {
    return false;
  }
  const secondVerifyDigit = Number(value[value.length - 1]);

  return isVerifyingDigitValid(value.substring(0, 10), secondVerifyDigit);
};
