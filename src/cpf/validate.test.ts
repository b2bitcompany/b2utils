import { describe, it, expect } from 'vitest';

import { validate } from './validate';

describe('validate CPF helper', () => {
  it('should 141.875.110-32 be valid', () => {
    expect(validate('141.875.110-32')).toBeTruthy();
  });

  it('should 14187511032 be valid', () => {
    expect(validate('14187511032')).toBeTruthy();
  });

  it('should 111.111.111-11 not be valid', () => {
    expect(validate('111.111.111-11')).toBeFalsy();
  });

  it('should empty CPF not be valid', () => {
    expect(validate('')).toBeFalsy();
  });

  it('should 111.111.111 not be valid', () => {
    expect(validate('111.111.111')).toBeFalsy();
  });

  it('should 140.875.110-32 be valid', () => {
    expect(validate('140.875.110-32')).toBeFalsy();
  });
});
