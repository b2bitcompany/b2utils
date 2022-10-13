import { describe, it, expect } from 'vitest';

import { validate } from './validate';

describe('validate CNPJ', () => {
  it('should 99.497.228/0001-04 be valid', () => {
    expect(validate('99.497.228/0001-04')).toBeTruthy();
  });

  it('should 99497228000104 be valid', () => {
    expect(validate('99497228000104')).toBeTruthy();
  });

  it('should 11.111.111/1111-11 not be valid', () => {
    expect(validate('11.111.111/1111-11')).toBeFalsy();
  });

  it('should empty CNPJ not be valid', () => {
    expect(validate('')).toBeFalsy();
  });

  it('should 11.111.111 not be valid', () => {
    expect(validate('11.111.111')).toBeFalsy();
  });
});
