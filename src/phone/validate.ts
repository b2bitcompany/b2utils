export const validate = (value: string) => {
  value = value.replace(/\D/g, '');

  if (value === '') {
    return false;
  }

  return [9, 11, 13].includes(value.length);
};
