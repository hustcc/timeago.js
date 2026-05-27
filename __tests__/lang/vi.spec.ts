import { vi } from 'vitest';
import { register, format } from '../../src';
import viLocale from '../../src/lang/vi';

register('vi', viLocale);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('vi', () => {
  test('time ago', () => {
    vi.setSystemTime(9000);
    expect(format(date, 'vi')).toEqual('vừa xong');

    vi.setSystemTime(30000);
    expect(format(date, 'vi')).toEqual('30 giây trước');

    vi.setSystemTime(60000);
    expect(format(date, 'vi')).toEqual('1 phút trước');

    vi.setSystemTime(1800000);
    expect(format(date, 'vi')).toEqual('30 phút trước');

    vi.setSystemTime(3600000);
    expect(format(date, 'vi')).toEqual('1 giờ trước');

    vi.setSystemTime(28800000);
    expect(format(date, 'vi')).toEqual('8 giờ trước');

    vi.setSystemTime(86400000);
    expect(format(date, 'vi')).toEqual('1 ngày trước');

    vi.setSystemTime(259200000);
    expect(format(date, 'vi')).toEqual('3 ngày trước');

    vi.setSystemTime(604800000);
    expect(format(date, 'vi')).toEqual('1 tuần trước');

    vi.setSystemTime(1814400000);
    expect(format(date, 'vi')).toEqual('3 tuần trước');

    vi.setSystemTime(2678400000);
    expect(format(date, 'vi')).toEqual('1 tháng trước');

    vi.setSystemTime(10713600000);
    expect(format(date, 'vi')).toEqual('4 tháng trước');

    vi.setSystemTime(31622400000);
    expect(format(date, 'vi')).toEqual('1 năm trước');

    vi.setSystemTime(316224000000);
    expect(format(date, 'vi')).toEqual('10 năm trước');
  });
  test('time in', () => {
    vi.setSystemTime(-9000);
    expect(format(date, 'vi')).toEqual('một lúc');

    vi.setSystemTime(-30000);
    expect(format(date, 'vi')).toEqual('trong 30 giây');

    vi.setSystemTime(-60000);
    expect(format(date, 'vi')).toEqual('trong 1 phút');

    vi.setSystemTime(-1800000);
    expect(format(date, 'vi')).toEqual('trong 30 phút');

    vi.setSystemTime(-3600000);
    expect(format(date, 'vi')).toEqual('trong 1 giờ');

    vi.setSystemTime(-28800000);
    expect(format(date, 'vi')).toEqual('trong 8 giờ');

    vi.setSystemTime(-86400000);
    expect(format(date, 'vi')).toEqual('trong 1 ngày');

    vi.setSystemTime(-259200000);
    expect(format(date, 'vi')).toEqual('trong 3 ngày');

    vi.setSystemTime(-604800000);
    expect(format(date, 'vi')).toEqual('trong 1 tuần');

    vi.setSystemTime(-1814400000);
    expect(format(date, 'vi')).toEqual('trong 3 tuần');

    vi.setSystemTime(-2678400000);
    expect(format(date, 'vi')).toEqual('trong 1 tháng');

    vi.setSystemTime(-10713600000);
    expect(format(date, 'vi')).toEqual('trong 4 tháng');

    vi.setSystemTime(-31622400000);
    expect(format(date, 'vi')).toEqual('trong 1 năm');

    vi.setSystemTime(-316224000000);
    expect(format(date, 'vi')).toEqual('trong 10 năm');
  });
});
