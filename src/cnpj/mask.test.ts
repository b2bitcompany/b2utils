import { describe, it, expect } from 'vitest';

import { mask } from './mask';

describe('mask CNPJ', () => {
  it('should 99497228000104 be transform 99.497.228/0001-04', () => {
    expect(mask('99497228000104')).equal('99.497.228/0001-04');
  });
});
