import { vi } from 'vitest';
import { register, format } from '../../src';
import ar from '../../src/lang/ar';

register('ar', ar);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('ar', () => {
  test('time ago', () => {
    vi.setSystemTime(9 * 1000);
    expect(format(date, 'ar')).toEqual('منذ لحظات');

    vi.setSystemTime(30 * 1000);
    expect(format(date, 'ar')).toEqual('منذ 30 ثانية');

    vi.setSystemTime(1000 * 60);
    expect(format(date, 'ar')).toEqual('منذ دقيقة');

    vi.setSystemTime(1000 * 60 * 30);
    expect(format(date, 'ar')).toEqual('منذ 30 دقيقة');

    vi.setSystemTime(1000 * 60 * 60);
    expect(format(date, 'ar')).toEqual('منذ ساعة');

    vi.setSystemTime(1000 * 60 * 60 * 8);
    expect(format(date, 'ar')).toEqual('منذ 8 ساعات');

    vi.setSystemTime(1000 * 60 * 60 * 24);
    expect(format(date, 'ar')).toEqual('منذ يوم');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'ar')).toEqual('منذ 3 أيام');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'ar')).toEqual('منذ أسبوع');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'ar')).toEqual('منذ 3 أسابيع');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'ar')).toEqual('منذ شهر');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'ar')).toEqual('منذ 4 أشهر');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'ar')).toEqual('منذ عام');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'ar')).toEqual('منذ 10 أعوام');
  });
  test('time in', () => {
    vi.setSystemTime(-9 * 1000);
    expect(format(date, 'ar')).toEqual('بعد لحظات');

    vi.setSystemTime(-30 * 1000);
    expect(format(date, 'ar')).toEqual('بعد 30 ثانية');

    vi.setSystemTime(-1000 * 60);
    expect(format(date, 'ar')).toEqual('بعد دقيقة');

    vi.setSystemTime(-1000 * 60 * 30);
    expect(format(date, 'ar')).toEqual('بعد 30 دقيقة');

    vi.setSystemTime(-1000 * 60 * 60);
    expect(format(date, 'ar')).toEqual('بعد ساعة');

    vi.setSystemTime(-1000 * 60 * 60 * 8);
    expect(format(date, 'ar')).toEqual('بعد 8 ساعات');

    vi.setSystemTime(-1000 * 60 * 60 * 24);
    expect(format(date, 'ar')).toEqual('بعد يوم');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'ar')).toEqual('بعد 3 أيام');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'ar')).toEqual('بعد أسبوع');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'ar')).toEqual('بعد 3 أسابيع');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'ar')).toEqual('بعد شهر');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'ar')).toEqual('بعد 4 أشهر');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'ar')).toEqual('بعد عام');

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'ar')).toEqual('بعد 10 أعوام');
  });
});
