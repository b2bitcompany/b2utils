import { validate } from './validate';

export const toObject = (phone: string) => {
  if (!validate(phone)) {
    throw new Error('Invalid phone');
  }

  const phoneWithoutMask = phone.replace(/\D/g, '');

  if (phoneWithoutMask.length === 9) {
    console.log('phoneWithoutMask.length === 9');
    return {
      number: phoneWithoutMask,
    };
  }

  if (phoneWithoutMask.length === 11) {
    return {
      countryCode: phoneWithoutMask.substring(0, 2),
      number: phoneWithoutMask.substring(2),
    };
  }

  return {
    areaCode: phoneWithoutMask.substring(0, 2),
    countryCode: phoneWithoutMask.substring(2, 4),
    number: phoneWithoutMask.substring(4),
  };
};
