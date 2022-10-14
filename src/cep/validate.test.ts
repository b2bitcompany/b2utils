import { describe, it, expect } from 'vitest';

import { validate } from './validate';

describe('validate CEP', () => {
  it('should 12345678 be valid', () => {
    expect(validate('12345678')).toBeTruthy();
  });

  it('should 123456 not be valid', () => {
    expect(validate('123456')).toBeFalsy();
  });

  it('should empty CEP not be valid', () => {
    expect(validate('')).toBeFalsy();
  });
});
