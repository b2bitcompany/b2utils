import { describe, it, expect } from 'vitest';

import { getIdFromUrl } from './getIdFromUrl';

describe('getIdFromUrl', () => {
  it('should get id from url', () => {
    expect(getIdFromUrl('https://www.youtube.com/watch?v=1')).toBe('1');
  });

  it('should get id from url with query params', () => {
    expect(getIdFromUrl('https://www.youtube.com/watch?v=1&list=2')).toBe('1');
  });

  it('should throw error if url is invalid', () => {
    expect(() => getIdFromUrl('https://www.youtube.com')).toThrowError(
      'Invalid url'
    );
    expect(() => getIdFromUrl('https://www.test.com/watch?v1')).toThrowError(
      'Invalid url'
    );
  });
});
