import { describe, it, expect } from 'vitest';

import { centsToBrl } from './centsToBrl';

describe('transform cents into BRL format', () => {
  it('should convert 100 to R$ 1,00', () => {
    expect(centsToBrl(100).replace(/\u00a0/g, ' ')).toBe('R$ 1,00'); //The replace is to remove the non-breaking space, see https://github.com/testing-library/jest-dom/issues/376 for more info
  });
});
