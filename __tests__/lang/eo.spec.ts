import { vi } from 'vitest';
import { register, format } from '../../src';
import eo from '../../src/lang/eo';

register('eo', eo);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('eo', () => {
  test('time ago', () => {
    vi.setSystemTime(9000);
    expect(format(date, 'eo')).toEqual('nun mem');

    vi.setSystemTime(30000);
    expect(format(date, 'eo')).toEqual('antaŭ 30 sekundoj');

    vi.setSystemTime(60000);
    expect(format(date, 'eo')).toEqual('antaŭ 1 minuto');

    vi.setSystemTime(1800000);
    expect(format(date, 'eo')).toEqual('antaŭ 30 minutoj');

    vi.setSystemTime(3600000);
    expect(format(date, 'eo')).toEqual('antaŭ 1 horo');

    vi.setSystemTime(28800000);
    expect(format(date, 'eo')).toEqual('antaŭ 8 horoj');

    vi.setSystemTime(86400000);
    expect(format(date, 'eo')).toEqual('antaŭ 1 tago');

    vi.setSystemTime(259200000);
    expect(format(date, 'eo')).toEqual('antaŭ 3 tagoj');

    vi.setSystemTime(604800000);
    expect(format(date, 'eo')).toEqual('antaŭ 1 semajno');

    vi.setSystemTime(1814400000);
    expect(format(date, 'eo')).toEqual('antaŭ 3 semajnoj');

    vi.setSystemTime(2678400000);
    expect(format(date, 'eo')).toEqual('antaŭ 1 monato');

    vi.setSystemTime(10713600000);
    expect(format(date, 'eo')).toEqual('antaŭ 4 monatoj');

    vi.setSystemTime(31622400000);
    expect(format(date, 'eo')).toEqual('antaŭ 1 jaro');

    vi.setSystemTime(316224000000);
    expect(format(date, 'eo')).toEqual('antaŭ 10 jaroj');
  });
  test('time in', () => {
    vi.setSystemTime(-9000);
    expect(format(date, 'eo')).toEqual('post iom');

    vi.setSystemTime(-30000);
    expect(format(date, 'eo')).toEqual('en 30 sekundoj');

    vi.setSystemTime(-60000);
    expect(format(date, 'eo')).toEqual('en 1 minuto');

    vi.setSystemTime(-1800000);
    expect(format(date, 'eo')).toEqual('en 30 minutoj');

    vi.setSystemTime(-3600000);
    expect(format(date, 'eo')).toEqual('en 1 horo');

    vi.setSystemTime(-28800000);
    expect(format(date, 'eo')).toEqual('en 8 horoj');

    vi.setSystemTime(-86400000);
    expect(format(date, 'eo')).toEqual('en 1 tago');

    vi.setSystemTime(-259200000);
    expect(format(date, 'eo')).toEqual('en 3 tagoj');

    vi.setSystemTime(-604800000);
    expect(format(date, 'eo')).toEqual('en 1 semajno');

    vi.setSystemTime(-1814400000);
    expect(format(date, 'eo')).toEqual('en 3 semajnoj');

    vi.setSystemTime(-2678400000);
    expect(format(date, 'eo')).toEqual('en 1 monato');

    vi.setSystemTime(-10713600000);
    expect(format(date, 'eo')).toEqual('en 4 monatoj');

    vi.setSystemTime(-31622400000);
    expect(format(date, 'eo')).toEqual('en 1 jaro');

    vi.setSystemTime(-316224000000);
    expect(format(date, 'eo')).toEqual('en 10 jaroj');
  });
});
