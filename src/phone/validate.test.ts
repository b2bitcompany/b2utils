import { describe, it, expect } from 'vitest';

import { validate } from './validate';

describe('validate phone', () => {
  it('should 5584988776655 be valid', () => {
    expect(validate('5584988776655')).toBeTruthy();
  });

  it('should (84) 98877-6655 be valid', () => {
    expect(validate('+55 (84) 98877-6655')).toBeTruthy();
  });

  it('should 84988776655 be valid', () => {
    expect(validate('84988776655')).toBeTruthy();
  });

  it('should (84) 98877-6655 be valid', () => {
    expect(validate('(84) 98877-6655')).toBeTruthy();
  });

  it('should 988776655 be valid', () => {
    expect(validate('988776655')).toBeTruthy();
  });

  it('should 8498877665 not be valid', () => {
    expect(validate('8498877665')).toBeFalsy();
  });

  it('should 98877-6655 not be valid', () => {
    expect(validate('988-776655')).toBeTruthy();
  });

  it('should empty phone not be valid', () => {
    expect(validate('')).toBeFalsy();
  });
});
