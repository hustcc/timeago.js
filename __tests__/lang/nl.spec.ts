/**
 * Created by hustcc on 18/5/24.
 * Contact: i@hust.cc
 */

import { format, register } from '../../src';
import nl from '../../src/lang/nl';

register('nl', nl);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('nl', () => {
  test('time ago', () => {
    vi.setSystemTime(9 * 1000);
    expect(format(date, 'nl')).toEqual('recent');

    vi.setSystemTime(30 * 1000);
    expect(format(date, 'nl')).toEqual('30 seconden geleden');

    vi.setSystemTime(1000 * 60);
    expect(format(date, 'nl')).toEqual('1 minuut geleden');

    vi.setSystemTime(1000 * 60 * 30);
    expect(format(date, 'nl')).toEqual('30 minuten geleden');

    vi.setSystemTime(1000 * 60 * 60);
    expect(format(date, 'nl')).toEqual('1 uur geleden');

    vi.setSystemTime(1000 * 60 * 60 * 8);
    expect(format(date, 'nl')).toEqual('8 uur geleden');

    vi.setSystemTime(1000 * 60 * 60 * 24);
    expect(format(date, 'nl')).toEqual('1 dag geleden');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'nl')).toEqual('3 dagen geleden');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'nl')).toEqual('1 week geleden');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'nl')).toEqual('3 weken geleden');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'nl')).toEqual('1 maand geleden');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'nl')).toEqual('4 maanden geleden');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'nl')).toEqual('1 jaar geleden');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'nl')).toEqual('10 jaar geleden');
  });
  test('time in', () => {
    vi.setSystemTime(-9 * 1000);
    expect(format(date, 'nl')).toEqual('binnenkort');

    vi.setSystemTime(-30 * 1000);
    expect(format(date, 'nl')).toEqual('binnen 30 seconden');

    vi.setSystemTime(-1000 * 60);
    expect(format(date, 'nl')).toEqual('binnen 1 minuut');

    vi.setSystemTime(-1000 * 60 * 30);
    expect(format(date, 'nl')).toEqual('binnen 30 minuten');

    vi.setSystemTime(-1000 * 60 * 60);
    expect(format(date, 'nl')).toEqual('binnen 1 uur');

    vi.setSystemTime(-1000 * 60 * 60 * 8);
    expect(format(date, 'nl')).toEqual('binnen 8 uur');

    vi.setSystemTime(-1000 * 60 * 60 * 24);
    expect(format(date, 'nl')).toEqual('binnen 1 dag');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'nl')).toEqual('binnen 3 dagen');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'nl')).toEqual('binnen 1 week');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'nl')).toEqual('binnen 3 weken');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'nl')).toEqual('binnen 1 maand');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'nl')).toEqual('binnen 4 maanden');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'nl')).toEqual('binnen 1 jaar');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'nl')).toEqual('binnen 10 jaar');
  });
});
