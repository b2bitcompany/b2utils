import { describe, it, expect } from 'vitest';

import { toObject } from './toObject';

describe('transform object into phone number', () => {
  it('should transform phone with mask into object', () => {
    expect(toObject('+55 (84) 98877-6655')).toEqual({
      countryCode: '55',
      areaCode: '84',
      number: '988776655',
    });
  });

  it('should transform phone without mask into object', () => {
    expect(toObject('5584988776655')).toEqual({
      countryCode: '55',
      areaCode: '84',
      number: '988776655',
    });
  });

  it('should transform phone with mask and without area code into object', () => {
    expect(toObject('(84) 98877-6655')).toEqual({
      areaCode: '84',
      number: '988776655',
    });
  });

  it('should transform phone without mask and area code into object', () => {
    expect(toObject('84988776655')).toEqual({
      areaCode: '84',
      number: '988776655',
    });
  });

  it('should transform phone with mask and only the number into object', () => {
    expect(toObject('98877-6655')).toEqual({
      number: '988776655',
    });
  });

  it('should transform phone without mask and only the number into object', () => {
    expect(toObject('988776655')).toEqual({
      number: '988776655',
    });
  });

  it('should throw error if phone is invalid', () => {
    expect(() => toObject('98877665')).toThrow('Invalid phone');
  });
});
