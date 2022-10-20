import { describe, it, expect } from 'vitest';

import { addOpacityOnHexColor } from './addOpacityOnHexColor';

describe('addOpacityOnHexColor', () => {
  it('should add opacity on hex color', () => {
    expect(addOpacityOnHexColor('#000000', 0.5)).toBe('#00000080');
  });
});
