const isAllDigitsTheSame = (digits: string) => {
  return digits.split('').every((currentValue, _, array) => {
    return currentValue === array[0];
  });
};

const isVerifyingDigitValid = (digits: string, digit: number) => {
  const size = digits.length;
  let sum = 0;
  let position = size - 7;
  for (let i = size; i >= 1; i--) {
    sum += Number(digits.charAt(size - i)) * position--;
    if (position < 2) {
      position = 9;
    }
  }

  if (sum % 11 < 2) {
    return digit === 0;
  }

  return digit === 11 - (sum % 11);
};

export const validate = (value: string) => {
  value = value.replace(/\D/g, '');

  if (value === '') {
    return false;
  }

  if (value.length !== 14) {
    return false;
  }

  if (isAllDigitsTheSame(value)) {
    return false;
  }

  let size = value.length - 2;
  let digits = value.substring(0, size);
  const firstVerifyDigit = Number(value[value.length - 2]);

  if (!isVerifyingDigitValid(digits, firstVerifyDigit)) {
    return false;
  }

  size = value.length - 1;
  digits = value.substring(0, size);
  const secondVerifyDigit = Number(value[value.length - 1]);

  return isVerifyingDigitValid(digits, secondVerifyDigit);
};
