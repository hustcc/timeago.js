import { getLocale, register } from '../src/register';

describe('register', () => {
  test('register', () => {
    const test = (_diff: number, _idx: number, _totalSec: number) => ['test', 'locale'] as [string, string];
    register('test', test);

    expect(getLocale('test')).toBe(test);
    expect(getLocale('test')(1, 1, 0)).toEqual(['test', 'locale']);
  });
});

