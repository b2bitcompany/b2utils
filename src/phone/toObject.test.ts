import { describe, it, expect } from 'vitest';

import { toObject } from './toObject';

describe('transform object into phone number', () => {
  it('should transform phone with mask and 9 digits into object', () => {
    expect(toObject('+55 (84) 98877-6655')).toEqual({
      countryCode: '55',
      areaCode: '84',
      number: '988776655',
    });
  });

  it('should transform phone with mask and 8 digits into object', () => {
    expect(toObject('+55 (84) 8877-6655')).toEqual({
      countryCode: '55',
      areaCode: '84',
      number: '88776655',
    });
  });

  it('should transform phone without mask and 9 digits into object', () => {
    expect(toObject('5584988776655')).toEqual({
      countryCode: '55',
      areaCode: '84',
      number: '988776655',
    });
  });

  it('should transform phone without mask and 8 digits into object', () => {
    expect(toObject('558488776655')).toEqual({
      countryCode: '55',
      areaCode: '84',
      number: '88776655',
    });
  });

  it('should transform phone with mask and 9 digits and without area code into object', () => {
    expect(toObject('(84) 98877-6655')).toEqual({
      areaCode: '84',
      number: '988776655',
    });
  });

  it('should transform phone with mask and 8 digits and without area code into object', () => {
    expect(toObject('(84) 8877-6655')).toEqual({
      areaCode: '84',
      number: '88776655',
    });
  });

  it('should transform phone without mask and 9 digits and area code into object', () => {
    expect(toObject('84988776655')).toEqual({
      areaCode: '84',
      number: '988776655',
    });
  });

  it('should transform phone without mask and 8 digits and area code into object', () => {
    expect(toObject('8488776655')).toEqual({
      areaCode: '84',
      number: '88776655',
    });
  });

  it('should transform phone with mask, 9 digits and only the number into object', () => {
    expect(toObject('98877-6655')).toEqual({
      number: '988776655',
    });
  });

  it('should transform phone with mask, 8 digits and only the number into object', () => {
    expect(toObject('8877-6655')).toEqual({
      number: '88776655',
    });
  });

  it('should transform phone without mask and only 9 numbers into object', () => {
    expect(toObject('988776655')).toEqual({
      number: '988776655',
    });
  });

  it('should transform phone without mask and only 8 numbers into object', () => {
    expect(toObject('88776655')).toEqual({
      number: '88776655',
    });
  });

  it('should throw error if phone is invalid', () => {
    expect(() => toObject('8877665')).toThrow('Invalid phone');
  });
});
