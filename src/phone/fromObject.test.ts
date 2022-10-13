import { describe, it, expect } from 'vitest';

import { fromObject } from './fromObject';

describe('convert phone object on formatted string', () => {
  it('should return formatted phone with country and area code', () => {
    expect(
      fromObject({ countryCode: '55', areaCode: '84', number: '988776655' })
    ).toBe('+55 (84) 98877-6655');
  });

  it('should return formatted phone with area code', () => {
    expect(fromObject({ areaCode: '84', number: '988776655' })).toBe(
      '(84) 98877-6655'
    );
  });

  it('should return formatted phone only with the numbers', () => {
    expect(fromObject({ number: '988776655' })).toBe('98877-6655');
  });

  it('should throw error if country code is invalid', () => {
    expect(() =>
      fromObject({ countryCode: '5', areaCode: '84', number: '988776655' })
    ).toThrow('Invalid country code, must have 2 digits');
  });

  it('should throw error if has country code without area code', () => {
    expect(() =>
      fromObject({ countryCode: '55', number: '988776655' })
    ).toThrow('Invalid object, can not have country code without area code');
  });

  it('should throw error if area code is invalid', () => {
    expect(() => fromObject({ areaCode: '8', number: '988776655' })).toThrow(
      'Invalid area code, must have 2 digits'
    );
  });

  it('should throw error if number is invalid', () => {
    expect(() => fromObject({ areaCode: '84', number: '98877665' })).toThrow(
      'Invalid number, must have 9 digits'
    );
  });
});
