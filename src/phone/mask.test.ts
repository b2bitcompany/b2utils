import { describe, it, expect } from 'vitest';

import { mask } from './mask';

describe('mask phone', () => {
  it('should 5584988776655 be transform +55 (84) 98877-6655', () => {
    expect(mask('5584988776655')).equal('+55 (84) 98877-6655');
  });

  it('should 558488776655 be transform +55 (84) 8877-6655', () => {
    expect(mask('558488776655')).equal('+55 (84) 8877-6655');
  });

  it('should 84988776655 be transform (84) 98877-6655', () => {
    expect(mask('84988776655')).equal('(84) 98877-6655');
  });

  it('should 8488776655 be transform (84) 8877-6655', () => {
    expect(mask('8488776655')).equal('(84) 8877-6655');
  });

  it('should 988776655 be transform 98877-6655', () => {
    expect(mask('988776655')).equal('98877-6655');
  });

  it('should 88776655 be transform 8877-6655', () => {
    expect(mask('88776655')).equal('8877-6655');
  });

  it('should 8877665 be transform 8877-665', () => {
    expect(mask('8877665')).equal('8877-665');
  });

  it('should 887766 be transform 8877-66', () => {
    expect(mask('887766')).equal('8877-66');
  });

  it('should 88776 be transform 8877-6', () => {
    expect(mask('88776')).equal('8877-6');
  });

  it('should 8877 be transform 8877', () => {
    expect(mask('8877')).equal('8877');
  });
});
