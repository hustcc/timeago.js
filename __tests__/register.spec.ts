import { getLocale, register } from '../src/register';

describe('register', () => {
  test('register', () => {
    const test = (_diff: number, _idx: number, _totalSec: number) => ['test', 'locale'] as [string, string];
    register('test_LOCALE', test);

    expect(getLocale('test_LOCALE')).toBe(test);
    expect(getLocale('test_locale')).toBe(test);
    expect(getLocale('test_locale')(1, 1, 0)).toEqual(['test', 'locale']);
  });
});
