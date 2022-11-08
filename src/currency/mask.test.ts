import { describe, it, expect } from 'vitest';

import { brlMask } from './brlMask';

describe('mask BRL currency', () => {
  it('should 1000 be transform R$ 10,00', () => {
    expect(brlMask('1000').replace(/\u00a0/g, ' ')).equal('R$ 10,00'); //The replace is to remove the non-breaking space, see https://github.com/testing-library/jest-dom/issues/376 for more info
  });
});
