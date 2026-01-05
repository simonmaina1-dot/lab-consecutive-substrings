const consecutiveSubstrings = require('./src/consecutiveSubstrings.js');

describe('consecutiveSubstrings', () => {
  test('returns an empty array for an empty string', () => {
    expect(consecutiveSubstrings('')).toEqual([]);
  });

  test('returns a single substring for a one-character string', () => {
    expect(consecutiveSubstrings('a')).toEqual(['a']);
  });

  test('returns all consecutive substrings for a short string', () => {
    expect(consecutiveSubstrings('ab')).toEqual(['a', 'ab', 'b']);
  });

  test('returns all consecutive substrings for a longer string', () => {
    expect(consecutiveSubstrings('abc')).toEqual([
      'a',
      'ab',
      'abc',
      'b',
      'bc',
      'c'
    ]);
  });
});

