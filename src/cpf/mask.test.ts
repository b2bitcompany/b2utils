import { describe, it, expect } from 'vitest';

import { mask } from './mask';

describe('mask CPF', () => {
  it('should 14187511032 be transform 141.875.110-32', () => {
    expect(mask('14187511032')).equal('141.875.110-32');
  });
});
