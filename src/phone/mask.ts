export const mask = (value: string) => {
  value = value?.replace(/\D/g, '');

  if (value.length < 8) {
    return value.replace(/^(\d{0,4}).*/, '$1');
  }

  if (value.length <= 8) {
    return value.replace(/^(\d{4})(\d{0,4}).*/, '$1-$2');
  }

  if (value.length === 9) {
    return value.replace(/^(\d{5})(\d{0,4}).*/, '$1-$2');
  }

  if (value.length > 9 && value.length <= 10) {
    return value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
  }

  if (value.length === 11) {
    return value.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, '($1) $2-$3');
  }

  if (value.length === 12) {
    return value.replace(/^(\d{2})(\d{2})(\d{4})(\d{0,4}).*/, '+$1 ($2) $3-$4');
  }

  if (value.length > 12) {
    return value.replace(/^(\d{2})(\d{2})(\d{5})(\d{0,4}).*/, '+$1 ($2) $3-$4');
  }

  return value;
};
