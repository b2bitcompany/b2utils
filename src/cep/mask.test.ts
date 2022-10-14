import { describe, it, expect } from 'vitest';

import { mask } from './mask';

describe('mask CEP', () => {
  it('should 12345678 be transform 12.345-678', () => {
    expect(mask('12345678')).toBe('12.345-678');
  });

  it('should 123456 be transform 12.345-6', () => {
    expect(mask('123456')).toBe('12.345-6');
  });
});
