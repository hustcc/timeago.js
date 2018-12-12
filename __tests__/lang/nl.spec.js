/**
 * Created by hustcc on 18/5/24.
 * Contact: i@hust.cc
 */
import { advanceBy, advanceTo, clear } from 'jest-date-mock';
import { format, register } from '../../src';
import nl from '../../src/lang/nl';

register('nl', nl);


let date = new Date();

beforeEach(() => {
  advanceTo(0);
  date = new Date();
});
afterEach(() => {
  clear();
});
describe('nl', () => {
  test('time ago', () => {
    advanceTo(9 * 1000);
    expect(format(date, 'nl')).toEqual('recent');

    advanceTo(30 * 1000);
    expect(format(date, 'nl')).toEqual('30 seconden geleden');

    advanceTo(1000 * 60);
    expect(format(date, 'nl')).toEqual('1 minuut geleden');

    advanceTo(1000 * 60 * 30);
    expect(format(date, 'nl')).toEqual('30 minuten geleden');

    advanceTo(1000 * 60 * 60);
    expect(format(date, 'nl')).toEqual('1 uur geleden');

    advanceTo(1000 * 60 * 60 * 8);
    expect(format(date, 'nl')).toEqual('8 uur geleden');

    advanceTo(1000 * 60 * 60 * 24);
    expect(format(date, 'nl')).toEqual('1 dag geleden');

    advanceTo(1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'nl')).toEqual('3 dagen geleden');

    advanceTo(1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'nl')).toEqual('1 week geleden');

    advanceTo(1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'nl')).toEqual('3 weken geleden');

    advanceTo(1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'nl')).toEqual('1 maand geleden');

    advanceTo(1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'nl')).toEqual('4 maanden geleden');

    advanceTo(1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'nl')).toEqual('1 jaar geleden');

    advanceTo(1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'nl')).toEqual('10 jaar geleden');
  });
  test('time in', () => {
    advanceTo(-9 * 1000);
    expect(format(date, 'nl')).toEqual('binnenkort');

    advanceTo(-30 * 1000);
    expect(format(date, 'nl')).toEqual('binnen 30 seconden');

    advanceTo(-1000 * 60);
    expect(format(date, 'nl')).toEqual('binnen 1 minuut');

    advanceTo(-1000 * 60 * 30);
    expect(format(date, 'nl')).toEqual('binnen 30 minuten');

    advanceTo(-1000 * 60 * 60);
    expect(format(date, 'nl')).toEqual('binnen 1 uur');

    advanceTo(-1000 * 60 * 60 * 8);
    expect(format(date, 'nl')).toEqual('binnen 8 uur');

    advanceTo(-1000 * 60 * 60 * 24);
    expect(format(date, 'nl')).toEqual('binnen 1 dag');

    advanceTo(-1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'nl')).toEqual('binnen 3 dagen');

    advanceTo(-1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'nl')).toEqual('binnen 1 week');

    advanceTo(-1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'nl')).toEqual('binnen 3 weken');

    advanceTo(-1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'nl')).toEqual('binnen 1 maand');

    advanceTo(-1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'nl')).toEqual('binnen 4 maanden');

    advanceTo(-1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'nl')).toEqual('binnen 1 jaar');

    advanceTo(-1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'nl')).toEqual('binnen 10 jaar');
  });
});
