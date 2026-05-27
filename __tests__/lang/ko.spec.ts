import { vi } from 'vitest';
import { register, format } from '../../src';
import ko from '../../src/lang/ko';

register('ko', ko);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('ko', () => {
  test('time ago', () => {
    vi.setSystemTime(9000);
    expect(format(date, 'ko')).toEqual('방금');

    vi.setSystemTime(30000);
    expect(format(date, 'ko')).toEqual('30초 전');

    vi.setSystemTime(60000);
    expect(format(date, 'ko')).toEqual('1분 전');

    vi.setSystemTime(1800000);
    expect(format(date, 'ko')).toEqual('30분 전');

    vi.setSystemTime(3600000);
    expect(format(date, 'ko')).toEqual('1시간 전');

    vi.setSystemTime(28800000);
    expect(format(date, 'ko')).toEqual('8시간 전');

    vi.setSystemTime(86400000);
    expect(format(date, 'ko')).toEqual('1일 전');

    vi.setSystemTime(259200000);
    expect(format(date, 'ko')).toEqual('3일 전');

    vi.setSystemTime(604800000);
    expect(format(date, 'ko')).toEqual('1주일 전');

    vi.setSystemTime(1814400000);
    expect(format(date, 'ko')).toEqual('3주일 전');

    vi.setSystemTime(2678400000);
    expect(format(date, 'ko')).toEqual('1개월 전');

    vi.setSystemTime(10713600000);
    expect(format(date, 'ko')).toEqual('4개월 전');

    vi.setSystemTime(31622400000);
    expect(format(date, 'ko')).toEqual('1년 전');

    vi.setSystemTime(316224000000);
    expect(format(date, 'ko')).toEqual('10년 전');
  });
  test('time in', () => {
    vi.setSystemTime(-9000);
    expect(format(date, 'ko')).toEqual('곧');

    vi.setSystemTime(-30000);
    expect(format(date, 'ko')).toEqual('30초 후');

    vi.setSystemTime(-60000);
    expect(format(date, 'ko')).toEqual('1분 후');

    vi.setSystemTime(-1800000);
    expect(format(date, 'ko')).toEqual('30분 후');

    vi.setSystemTime(-3600000);
    expect(format(date, 'ko')).toEqual('1시간 후');

    vi.setSystemTime(-28800000);
    expect(format(date, 'ko')).toEqual('8시간 후');

    vi.setSystemTime(-86400000);
    expect(format(date, 'ko')).toEqual('1일 후');

    vi.setSystemTime(-259200000);
    expect(format(date, 'ko')).toEqual('3일 후');

    vi.setSystemTime(-604800000);
    expect(format(date, 'ko')).toEqual('1주일 후');

    vi.setSystemTime(-1814400000);
    expect(format(date, 'ko')).toEqual('3주일 후');

    vi.setSystemTime(-2678400000);
    expect(format(date, 'ko')).toEqual('1개월 후');

    vi.setSystemTime(-10713600000);
    expect(format(date, 'ko')).toEqual('4개월 후');

    vi.setSystemTime(-31622400000);
    expect(format(date, 'ko')).toEqual('1년 후');

    vi.setSystemTime(-316224000000);
    expect(format(date, 'ko')).toEqual('10년 후');
  });
});
