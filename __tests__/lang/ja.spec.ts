import { vi } from 'vitest';
import { register, format } from '../../src';
import ja from '../../src/lang/ja';

register('ja', ja);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('ja', () => {
  test('time ago', () => {
    vi.setSystemTime(9000);
    expect(format(date, 'ja')).toEqual('すこし前');

    vi.setSystemTime(30000);
    expect(format(date, 'ja')).toEqual('30秒前');

    vi.setSystemTime(60000);
    expect(format(date, 'ja')).toEqual('1分前');

    vi.setSystemTime(1800000);
    expect(format(date, 'ja')).toEqual('30分前');

    vi.setSystemTime(3600000);
    expect(format(date, 'ja')).toEqual('1時間前');

    vi.setSystemTime(28800000);
    expect(format(date, 'ja')).toEqual('8時間前');

    vi.setSystemTime(86400000);
    expect(format(date, 'ja')).toEqual('1日前');

    vi.setSystemTime(259200000);
    expect(format(date, 'ja')).toEqual('3日前');

    vi.setSystemTime(604800000);
    expect(format(date, 'ja')).toEqual('1週間前');

    vi.setSystemTime(1814400000);
    expect(format(date, 'ja')).toEqual('3週間前');

    vi.setSystemTime(2678400000);
    expect(format(date, 'ja')).toEqual('1ヶ月前');

    vi.setSystemTime(10713600000);
    expect(format(date, 'ja')).toEqual('4ヶ月前');

    vi.setSystemTime(31622400000);
    expect(format(date, 'ja')).toEqual('1年前');

    vi.setSystemTime(316224000000);
    expect(format(date, 'ja')).toEqual('10年前');
  });
  test('time in', () => {
    vi.setSystemTime(-9000);
    expect(format(date, 'ja')).toEqual('すぐに');

    vi.setSystemTime(-30000);
    expect(format(date, 'ja')).toEqual('30秒後');

    vi.setSystemTime(-60000);
    expect(format(date, 'ja')).toEqual('1分後');

    vi.setSystemTime(-1800000);
    expect(format(date, 'ja')).toEqual('30分後');

    vi.setSystemTime(-3600000);
    expect(format(date, 'ja')).toEqual('1時間後');

    vi.setSystemTime(-28800000);
    expect(format(date, 'ja')).toEqual('8時間後');

    vi.setSystemTime(-86400000);
    expect(format(date, 'ja')).toEqual('1日後');

    vi.setSystemTime(-259200000);
    expect(format(date, 'ja')).toEqual('3日後');

    vi.setSystemTime(-604800000);
    expect(format(date, 'ja')).toEqual('1週間後');

    vi.setSystemTime(-1814400000);
    expect(format(date, 'ja')).toEqual('3週間後');

    vi.setSystemTime(-2678400000);
    expect(format(date, 'ja')).toEqual('1ヶ月後');

    vi.setSystemTime(-10713600000);
    expect(format(date, 'ja')).toEqual('4ヶ月後');

    vi.setSystemTime(-31622400000);
    expect(format(date, 'ja')).toEqual('1年後');

    vi.setSystemTime(-316224000000);
    expect(format(date, 'ja')).toEqual('10年後');
  });
});
