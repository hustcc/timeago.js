/**
 * Created by hustcc on 18/5/24.
 * Contact: i@hust.cc
 */

import { format, register } from '../../src';
import ka from '../../src/lang/ka';

register('ka', ka);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('ka', () => {
  test('time ago', () => {
    vi.setSystemTime(9 * 1000);
    expect(format(date, 'ka')).toEqual('ამ წამს');

    vi.setSystemTime(30 * 1000);
    expect(format(date, 'ka')).toEqual('30 წამის წინ');

    vi.setSystemTime(1000 * 60);
    expect(format(date, 'ka')).toEqual('1 წუთის წინ');

    vi.setSystemTime(1000 * 60 * 30);
    expect(format(date, 'ka')).toEqual('30 წუთის წინ');

    vi.setSystemTime(1000 * 60 * 60);
    expect(format(date, 'ka')).toEqual('1 საათის წინ');

    vi.setSystemTime(1000 * 60 * 60 * 8);
    expect(format(date, 'ka')).toEqual('8 საათის წინ');

    vi.setSystemTime(1000 * 60 * 60 * 24);
    expect(format(date, 'ka')).toEqual('1 დღის წინ');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'ka')).toEqual('3 დღის წინ');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'ka')).toEqual('1 კვირის წინ');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'ka')).toEqual('3 კვირის წინ');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'ka')).toEqual('1 თვის წინ');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'ka')).toEqual('4 თვის წინ');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'ka')).toEqual('1 წლის წინ');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'ka')).toEqual('10 წლის წინ');
  });
  test('time in', () => {
    vi.setSystemTime(-9 * 1000);
    expect(format(date, 'ka')).toEqual('ახლა');

    vi.setSystemTime(-30 * 1000);
    expect(format(date, 'ka')).toEqual('30 წამში');

    vi.setSystemTime(-1000 * 60);
    expect(format(date, 'ka')).toEqual('1 წუთში');

    vi.setSystemTime(-1000 * 60 * 30);
    expect(format(date, 'ka')).toEqual('30 წუთში');

    vi.setSystemTime(-1000 * 60 * 60);
    expect(format(date, 'ka')).toEqual('1 საათში');

    vi.setSystemTime(-1000 * 60 * 60 * 8);
    expect(format(date, 'ka')).toEqual('8 საათში');

    vi.setSystemTime(-1000 * 60 * 60 * 24);
    expect(format(date, 'ka')).toEqual('1 დღეში');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'ka')).toEqual('3 დღეში');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'ka')).toEqual('1 კვირაში');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'ka')).toEqual('3 კვირაში');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'ka')).toEqual('1 თვეში');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'ka')).toEqual('4 თვეში');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'ka')).toEqual('1 წელიწადში');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'ka')).toEqual('10 წელიწადში');
  });
});
