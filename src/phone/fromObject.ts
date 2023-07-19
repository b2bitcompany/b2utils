import { mask } from './mask';

export const fromObject = ({ countryCode, areaCode, number }: Phone) => {
  if (countryCode && countryCode.length !== 2) {
    throw new Error('Invalid country code, must have 2 digits');
  }

  if (countryCode && !areaCode) {
    throw new Error(
      'Invalid object, can not have country code without area code'
    );
  }

  if (areaCode && areaCode.length !== 2) {
    throw new Error('Invalid area code, must have 2 digits');
  }

  if (number.length < 8 || number.length > 9) {
    throw new Error('Invalid number, must have 8 or 9 digits');
  }

  return mask(`${countryCode}${areaCode}${number}`);
};
