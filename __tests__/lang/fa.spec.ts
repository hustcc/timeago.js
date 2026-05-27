
import { register, format } from '../../src';
import fa from '../../src/lang/fa';

register('fa', fa);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('fa', () => {
  test('time ago', () => {
    vi.setSystemTime(9 * 1000);
    expect(format(date, 'fa')).toEqual('لحظاتی پیش');

    vi.setSystemTime(30 * 1000);
    expect(format(date, 'fa')).toEqual('۳۰ ثانیه پیش');

    vi.setSystemTime(1000 * 60);
    expect(format(date, 'fa')).toEqual('۱ دقیقه پیش');

    vi.setSystemTime(1000 * 60 * 30);
    expect(format(date, 'fa')).toEqual('۳۰ دقیقه پیش');

    vi.setSystemTime(1000 * 60 * 60);
    expect(format(date, 'fa')).toEqual('۱ ساعت پیش');

    vi.setSystemTime(1000 * 60 * 60 * 8);
    expect(format(date, 'fa')).toEqual('۸ ساعت پیش');

    vi.setSystemTime(1000 * 60 * 60 * 24);
    expect(format(date, 'fa')).toEqual('۱ روز پیش');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'fa')).toEqual('۳ روز پیش');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'fa')).toEqual('۱ هفته پیش');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'fa')).toEqual('۳ هفته پیش');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'fa')).toEqual('۱ ماه پیش');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'fa')).toEqual('۴ ماه پیش');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'fa')).toEqual('۱ سال پیش');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'fa')).toEqual('۱۰ سال پیش');
  });
  test('time in', () => {
    vi.setSystemTime(-9 * 1000);
    expect(format(date, 'fa')).toEqual('همین حالا');

    vi.setSystemTime(-30 * 1000);
    expect(format(date, 'fa')).toEqual('۳۰ ثانیه دیگر');

    vi.setSystemTime(-1000 * 60);
    expect(format(date, 'fa')).toEqual('۱ دقیقه دیگر');

    vi.setSystemTime(-1000 * 60 * 30);
    expect(format(date, 'fa')).toEqual('۳۰ دقیقه دیگر');

    vi.setSystemTime(-1000 * 60 * 60);
    expect(format(date, 'fa')).toEqual('۱ ساعت دیگر');

    vi.setSystemTime(-1000 * 60 * 60 * 8);
    expect(format(date, 'fa')).toEqual('۸ ساعت دیگر');

    vi.setSystemTime(-1000 * 60 * 60 * 24);
    expect(format(date, 'fa')).toEqual('۱ روز دیگر');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'fa')).toEqual('۳ روز دیگر');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'fa')).toEqual('۱ هفته دیگر');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'fa')).toEqual('۳ هفته دیگر');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'fa')).toEqual('۱ ماه دیگر');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'fa')).toEqual('۴ ماه دیگر');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'fa')).toEqual('۱ سال دیگر');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'fa')).toEqual('۱۰ سال دیگر');
  });
});
