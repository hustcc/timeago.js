import { advanceBy, advanceTo, clear } from 'jest-date-mock';
import { register, format } from '../../src';
import fa from '../../src/lang/fa';

register('fa', fa);

let date = new Date();

beforeEach(() => {
  advanceTo(0);
  date = new Date();
});
afterEach(() => {
  clear();
});
describe('fa', () => {
  test('time ago', () => {
    advanceTo(9 * 1000);
    expect(format(date, 'fa')).toEqual('لحظاتی پیش');

    advanceTo(30 * 1000);
    expect(format(date, 'fa')).toEqual('۳۰ ثانیه پیش');

    advanceTo(1000 * 60);
    expect(format(date, 'fa')).toEqual('۱ دقیقه پیش');

    advanceTo(1000 * 60 * 30);
    expect(format(date, 'fa')).toEqual('۳۰ دقیقه پیش');

    advanceTo(1000 * 60 * 60);
    expect(format(date, 'fa')).toEqual('۱ ساعت پیش');

    advanceTo(1000 * 60 * 60 * 8);
    expect(format(date, 'fa')).toEqual('۸ ساعت پیش');

    advanceTo(1000 * 60 * 60 * 24);
    expect(format(date, 'fa')).toEqual('۱ روز پیش');

    advanceTo(1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'fa')).toEqual('۳ روز پیش');

    advanceTo(1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'fa')).toEqual('۱ هفته پیش');

    advanceTo(1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'fa')).toEqual('۳ هفته پیش');

    advanceTo(1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'fa')).toEqual('۱ ماه پیش');

    advanceTo(1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'fa')).toEqual('۴ ماه پیش');

    advanceTo(1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'fa')).toEqual('۱ سال پیش');

    advanceTo(1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'fa')).toEqual('۱۰ سال پیش');
  });
  test('time in', () => {
    advanceTo(-9 * 1000);
    expect(format(date, 'fa')).toEqual('همین حالا');

    advanceTo(-30 * 1000);
    expect(format(date, 'fa')).toEqual('۳۰ ثانیه دیگر');

    advanceTo(-1000 * 60);
    expect(format(date, 'fa')).toEqual('۱ دقیقه دیگر');

    advanceTo(-1000 * 60 * 30);
    expect(format(date, 'fa')).toEqual('۳۰ دقیقه دیگر');

    advanceTo(-1000 * 60 * 60);
    expect(format(date, 'fa')).toEqual('۱ ساعت دیگر');

    advanceTo(-1000 * 60 * 60 * 8);
    expect(format(date, 'fa')).toEqual('۸ ساعت دیگر');

    advanceTo(-1000 * 60 * 60 * 24);
    expect(format(date, 'fa')).toEqual('۱ روز دیگر');

    advanceTo(-1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'fa')).toEqual('۳ روز دیگر');

    advanceTo(-1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'fa')).toEqual('۱ هفته دیگر');

    advanceTo(-1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'fa')).toEqual('۳ هفته دیگر');

    advanceTo(-1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'fa')).toEqual('۱ ماه دیگر');

    advanceTo(-1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'fa')).toEqual('۴ ماه دیگر');

    advanceTo(-1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'fa')).toEqual('۱ سال دیگر');

    advanceTo(-1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'fa')).toEqual('۱۰ سال دیگر');
  });
});
