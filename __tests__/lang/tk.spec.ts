import { advanceTo, clear } from 'jest-date-mock';
import { format, register } from '../../src';
import tk from '../../src/lang/tk';

register('tk', tk);

let date = new Date();

beforeEach(() => {
  advanceTo(0);
  date = new Date();
});
afterEach(() => {
  clear();
});
describe('tk', () => {
  test('time ago', () => {
    advanceTo(9 * 1000);
    expect(format(date, 'tk')).toEqual('biraz öň');

    advanceTo(30 * 1000);
    expect(format(date, 'tk')).toEqual('30 sekunt öň');

    advanceTo(1000 * 60);
    expect(format(date, 'tk')).toEqual('1 minut öň');

    advanceTo(1000 * 60 * 30);
    expect(format(date, 'tk')).toEqual('30 minut öň');

    advanceTo(1000 * 60 * 60);
    expect(format(date, 'tk')).toEqual('1 sagat öň');

    advanceTo(1000 * 60 * 60 * 8);
    expect(format(date, 'tk')).toEqual('8 sagat öň');

    advanceTo(1000 * 60 * 60 * 24);
    expect(format(date, 'tk')).toEqual('1 gün öň');

    advanceTo(1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'tk')).toEqual('3 gün öň');

    advanceTo(1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'tk')).toEqual('1 hepde öň');

    advanceTo(1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'tk')).toEqual('3 hepde öň');

    advanceTo(1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'tk')).toEqual('1 aý öň');

    advanceTo(1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'tk')).toEqual('4 aý öň');

    advanceTo(1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'tk')).toEqual('1 ýyl öň');

    advanceTo(1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'tk')).toEqual('10 ýyl öň');
  });
  test('time in', () => {
    advanceTo(-9 * 1000);
    expect(format(date, 'tk')).toEqual('şuwagt');

    advanceTo(-30 * 1000);
    expect(format(date, 'tk')).toEqual('30 sekuntdan');

    advanceTo(-1000 * 60);
    expect(format(date, 'tk')).toEqual('1 minutdan');

    advanceTo(-1000 * 60 * 30);
    expect(format(date, 'tk')).toEqual('30 minutdan');

    advanceTo(-1000 * 60 * 60);
    expect(format(date, 'tk')).toEqual('1 sagatdan');

    advanceTo(-1000 * 60 * 60 * 8);
    expect(format(date, 'tk')).toEqual('8 sagatdan');

    advanceTo(-1000 * 60 * 60 * 24);
    expect(format(date, 'tk')).toEqual('1 günden');

    advanceTo(-1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'tk')).toEqual('3 günden');

    advanceTo(-1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'tk')).toEqual('1 hepdeden');

    advanceTo(-1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'tk')).toEqual('3 hepdeden');

    advanceTo(-1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'tk')).toEqual('1 aýdan');

    advanceTo(-1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'tk')).toEqual('4 aýdan');

    advanceTo(-1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'tk')).toEqual('1 ýyldan');

    advanceTo(-1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'tk')).toEqual('10 ýyldan');
  });
});
