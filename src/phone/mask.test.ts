import { describe, it, expect } from 'vitest';

import { mask } from './mask';

describe('mask phone', () => {
  it('should 5584988776655 be transform +55 (84) 98877-6655', () => {
    expect(mask('5584988776655')).equal('+55 (84) 98877-6655');
  });

  it('should 558498877665 be transform +55 (84) 98877-665', () => {
    expect(mask('558498877665')).equal('+55 (84) 98877-665');
  });

  it('should 55849887766 be transform (55) 84988-7766', () => {
    expect(mask('55849887766')).equal('(55) 84988-7766');
  });

  it('should 5584988776 be transform (55) 84988-776', () => {
    expect(mask('5584988776')).equal('(55) 84988-776');
  });

  it('should 558498877 be transform 55849-8877', () => {
    expect(mask('558498877')).equal('55849-8877');
  });

  it('should 55849877 be transform 55849-877', () => {
    expect(mask('55849877')).equal('55849-877');
  });

  it('should 558498 be transform 55849-8', () => {
    expect(mask('558498')).equal('55849-8');
  });
});
