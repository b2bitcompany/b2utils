export const validate = (value: string) => {
  value = value.replace(/\D/g, '');

  if (value === '') {
    return false;
  }

  return value.length >= 8 && value.length <= 13;
};
