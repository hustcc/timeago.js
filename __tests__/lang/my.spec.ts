import { vi } from 'vitest';
import { register, format } from '../../src';
import my from '../../src/lang/my';

register('my', my);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('my', () => {
  test('time ago', () => {
    vi.setSystemTime(9000);
    expect(format(date, 'my')).toEqual('ယခုအတွင်း');

    vi.setSystemTime(30000);
    expect(format(date, 'my')).toEqual('30 စက္ကန့် အကြာက');

    vi.setSystemTime(60000);
    expect(format(date, 'my')).toEqual('1 မိနစ် အကြာက');

    vi.setSystemTime(1800000);
    expect(format(date, 'my')).toEqual('30 မိနစ် အကြာက');

    vi.setSystemTime(3600000);
    expect(format(date, 'my')).toEqual('1 နာရီ အကြာက');

    vi.setSystemTime(28800000);
    expect(format(date, 'my')).toEqual('8 နာရီ အကြာက');

    vi.setSystemTime(86400000);
    expect(format(date, 'my')).toEqual('1 ရက် အကြာက');

    vi.setSystemTime(259200000);
    expect(format(date, 'my')).toEqual('3 ရက် အကြာက');

    vi.setSystemTime(604800000);
    expect(format(date, 'my')).toEqual('1 ပတ် အကြာက');

    vi.setSystemTime(1814400000);
    expect(format(date, 'my')).toEqual('3 ပတ် အကြာက');

    vi.setSystemTime(2678400000);
    expect(format(date, 'my')).toEqual('1 လ အကြာက');

    vi.setSystemTime(10713600000);
    expect(format(date, 'my')).toEqual('4 လ အကြာက');

    vi.setSystemTime(31622400000);
    expect(format(date, 'my')).toEqual('1 နှစ် အကြာက');

    vi.setSystemTime(316224000000);
    expect(format(date, 'my')).toEqual('10 နှစ် အကြာက');
  });
  test('time in', () => {
    vi.setSystemTime(-9000);
    expect(format(date, 'my')).toEqual('ယခု');

    vi.setSystemTime(-30000);
    expect(format(date, 'my')).toEqual('30 စက္ကန့်အတွင်း');

    vi.setSystemTime(-60000);
    expect(format(date, 'my')).toEqual('1 မိနစ်အတွင်း');

    vi.setSystemTime(-1800000);
    expect(format(date, 'my')).toEqual('30 မိနစ်အတွင်း');

    vi.setSystemTime(-3600000);
    expect(format(date, 'my')).toEqual('1 နာရီအတွင်း');

    vi.setSystemTime(-28800000);
    expect(format(date, 'my')).toEqual('8 နာရီအတွင်း');

    vi.setSystemTime(-86400000);
    expect(format(date, 'my')).toEqual('1 ရက်အတွင်း');

    vi.setSystemTime(-259200000);
    expect(format(date, 'my')).toEqual('3 ရက်အတွင်း');

    vi.setSystemTime(-604800000);
    expect(format(date, 'my')).toEqual('1 ပတ်အတွင်း');

    vi.setSystemTime(-1814400000);
    expect(format(date, 'my')).toEqual('3 ပတ်အတွင်း');

    vi.setSystemTime(-2678400000);
    expect(format(date, 'my')).toEqual('1 လအတွင်း');

    vi.setSystemTime(-10713600000);
    expect(format(date, 'my')).toEqual('4 လအတွင်း');

    vi.setSystemTime(-31622400000);
    expect(format(date, 'my')).toEqual('1 နှစ်အတွင်း');

    vi.setSystemTime(-316224000000);
    expect(format(date, 'my')).toEqual('10 နှစ်အတွင်း');
  });
});
