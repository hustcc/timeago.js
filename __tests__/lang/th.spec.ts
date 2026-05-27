import { vi } from 'vitest';
import { register, format } from '../../src';
import th from '../../src/lang/th';

register('th', th);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('th', () => {
  test('time ago', () => {
    vi.setSystemTime(9000);
    expect(format(date, 'th')).toEqual('เมื่อสักครู่นี้');

    vi.setSystemTime(30000);
    expect(format(date, 'th')).toEqual('30 วินาทีที่แล้ว');

    vi.setSystemTime(60000);
    expect(format(date, 'th')).toEqual('1 นาทีที่แล้ว');

    vi.setSystemTime(1800000);
    expect(format(date, 'th')).toEqual('30 นาทีที่แล้ว');

    vi.setSystemTime(3600000);
    expect(format(date, 'th')).toEqual('1 ชั่วโมงที่แล้ว');

    vi.setSystemTime(28800000);
    expect(format(date, 'th')).toEqual('8 ชั่วโมงที่แล้ว');

    vi.setSystemTime(86400000);
    expect(format(date, 'th')).toEqual('1 วันที่แล้ว');

    vi.setSystemTime(259200000);
    expect(format(date, 'th')).toEqual('3 วันที่แล้ว');

    vi.setSystemTime(604800000);
    expect(format(date, 'th')).toEqual('1 อาทิตย์ที่แล้ว');

    vi.setSystemTime(1814400000);
    expect(format(date, 'th')).toEqual('3 อาทิตย์ที่แล้ว');

    vi.setSystemTime(2678400000);
    expect(format(date, 'th')).toEqual('1 เดือนที่แล้ว');

    vi.setSystemTime(10713600000);
    expect(format(date, 'th')).toEqual('4 เดือนที่แล้ว');

    vi.setSystemTime(31622400000);
    expect(format(date, 'th')).toEqual('1 ปีที่แล้ว');

    vi.setSystemTime(316224000000);
    expect(format(date, 'th')).toEqual('10 ปีที่แล้ว');
  });
  test('time in', () => {
    vi.setSystemTime(-9000);
    expect(format(date, 'th')).toEqual('อีกสักครู่');

    vi.setSystemTime(-30000);
    expect(format(date, 'th')).toEqual('ใน 30 วินาที');

    vi.setSystemTime(-60000);
    expect(format(date, 'th')).toEqual('ใน 1 นาที');

    vi.setSystemTime(-1800000);
    expect(format(date, 'th')).toEqual('ใน 30 นาที');

    vi.setSystemTime(-3600000);
    expect(format(date, 'th')).toEqual('ใน 1 ชั่วโมง');

    vi.setSystemTime(-28800000);
    expect(format(date, 'th')).toEqual('ใน 8 ชั่วโมง');

    vi.setSystemTime(-86400000);
    expect(format(date, 'th')).toEqual('ใน 1 วัน');

    vi.setSystemTime(-259200000);
    expect(format(date, 'th')).toEqual('ใน 3 วัน');

    vi.setSystemTime(-604800000);
    expect(format(date, 'th')).toEqual('ใน 1 อาทิตย์');

    vi.setSystemTime(-1814400000);
    expect(format(date, 'th')).toEqual('ใน 3 อาทิตย์');

    vi.setSystemTime(-2678400000);
    expect(format(date, 'th')).toEqual('ใน 1 เดือน');

    vi.setSystemTime(-10713600000);
    expect(format(date, 'th')).toEqual('ใน 4 เดือน');

    vi.setSystemTime(-31622400000);
    expect(format(date, 'th')).toEqual('ใน 1 ปี');

    vi.setSystemTime(-316224000000);
    expect(format(date, 'th')).toEqual('ใน 10 ปี');
  });
});
