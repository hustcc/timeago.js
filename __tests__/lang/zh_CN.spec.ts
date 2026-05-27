import { vi } from 'vitest';
import { register, format } from '../../src';
import zh_CN from '../../src/lang/zh_CN';

register('zh_CN', zh_CN);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('zh_CN', () => {
  test('time ago', () => {
    vi.setSystemTime(9000);
    expect(format(date, 'zh_CN')).toEqual('刚刚');

    vi.setSystemTime(30000);
    expect(format(date, 'zh_CN')).toEqual('30 秒前');

    vi.setSystemTime(60000);
    expect(format(date, 'zh_CN')).toEqual('1 分钟前');

    vi.setSystemTime(1800000);
    expect(format(date, 'zh_CN')).toEqual('30 分钟前');

    vi.setSystemTime(3600000);
    expect(format(date, 'zh_CN')).toEqual('1 小时前');

    vi.setSystemTime(28800000);
    expect(format(date, 'zh_CN')).toEqual('8 小时前');

    vi.setSystemTime(86400000);
    expect(format(date, 'zh_CN')).toEqual('1 天前');

    vi.setSystemTime(259200000);
    expect(format(date, 'zh_CN')).toEqual('3 天前');

    vi.setSystemTime(604800000);
    expect(format(date, 'zh_CN')).toEqual('1 周前');

    vi.setSystemTime(1814400000);
    expect(format(date, 'zh_CN')).toEqual('3 周前');

    vi.setSystemTime(2678400000);
    expect(format(date, 'zh_CN')).toEqual('1 个月前');

    vi.setSystemTime(10713600000);
    expect(format(date, 'zh_CN')).toEqual('4 个月前');

    vi.setSystemTime(31622400000);
    expect(format(date, 'zh_CN')).toEqual('1 年前');

    vi.setSystemTime(316224000000);
    expect(format(date, 'zh_CN')).toEqual('10 年前');
  });
  test('time in', () => {
    vi.setSystemTime(-9000);
    expect(format(date, 'zh_CN')).toEqual('片刻后');

    vi.setSystemTime(-30000);
    expect(format(date, 'zh_CN')).toEqual('30 秒后');

    vi.setSystemTime(-60000);
    expect(format(date, 'zh_CN')).toEqual('1 分钟后');

    vi.setSystemTime(-1800000);
    expect(format(date, 'zh_CN')).toEqual('30 分钟后');

    vi.setSystemTime(-3600000);
    expect(format(date, 'zh_CN')).toEqual('1 小时后');

    vi.setSystemTime(-28800000);
    expect(format(date, 'zh_CN')).toEqual('8 小时后');

    vi.setSystemTime(-86400000);
    expect(format(date, 'zh_CN')).toEqual('1 天后');

    vi.setSystemTime(-259200000);
    expect(format(date, 'zh_CN')).toEqual('3 天后');

    vi.setSystemTime(-604800000);
    expect(format(date, 'zh_CN')).toEqual('1 周后');

    vi.setSystemTime(-1814400000);
    expect(format(date, 'zh_CN')).toEqual('3 周后');

    vi.setSystemTime(-2678400000);
    expect(format(date, 'zh_CN')).toEqual('1 个月后');

    vi.setSystemTime(-10713600000);
    expect(format(date, 'zh_CN')).toEqual('4 个月后');

    vi.setSystemTime(-31622400000);
    expect(format(date, 'zh_CN')).toEqual('1 年后');

    vi.setSystemTime(-316224000000);
    expect(format(date, 'zh_CN')).toEqual('10 年后');
  });
});
