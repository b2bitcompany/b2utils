export const mask = (value: string) => {
  value = value?.replace(/\D/g, '');

  if (value.length > 5 && value.length <= 9) {
    return value.replace(/^(\d{5})(\d{0,4}).*/, '$1-$2');
  }

  if (value.length > 9 && value.length <= 11) {
    return value.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, '($1) $2-$3');
  }

  if (value.length > 11) {
    return value.replace(/^(\d{2})(\d{2})(\d{5})(\d{0,4}).*/, '+$1 ($2) $3-$4');
  }

  return value;
};
