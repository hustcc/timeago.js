import { vi } from 'vitest';
import { register, format } from '../../src';
import id_ID from '../../src/lang/id_ID';

register('id_ID', id_ID);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('id_ID', () => {
  test('time ago', () => {
    vi.setSystemTime(9000);
    expect(format(date, 'id_ID')).toEqual('baru saja');

    vi.setSystemTime(30000);
    expect(format(date, 'id_ID')).toEqual('30 detik yang lalu');

    vi.setSystemTime(60000);
    expect(format(date, 'id_ID')).toEqual('semenit yang lalu');

    vi.setSystemTime(1800000);
    expect(format(date, 'id_ID')).toEqual('30 menit yang lalu');

    vi.setSystemTime(3600000);
    expect(format(date, 'id_ID')).toEqual('sejam yang lalu');

    vi.setSystemTime(28800000);
    expect(format(date, 'id_ID')).toEqual('8 jam yang lalu');

    vi.setSystemTime(86400000);
    expect(format(date, 'id_ID')).toEqual('sehari yang lalu');

    vi.setSystemTime(259200000);
    expect(format(date, 'id_ID')).toEqual('3 hari yang lalu');

    vi.setSystemTime(604800000);
    expect(format(date, 'id_ID')).toEqual('seminggu yang lalu');

    vi.setSystemTime(1814400000);
    expect(format(date, 'id_ID')).toEqual('3 minggu yang lalu');

    vi.setSystemTime(2678400000);
    expect(format(date, 'id_ID')).toEqual('sebulan yang lalu');

    vi.setSystemTime(10713600000);
    expect(format(date, 'id_ID')).toEqual('4 bulan yang lalu');

    vi.setSystemTime(31622400000);
    expect(format(date, 'id_ID')).toEqual('setahun yang lalu');

    vi.setSystemTime(316224000000);
    expect(format(date, 'id_ID')).toEqual('10 tahun yang lalu');
  });
  test('time in', () => {
    vi.setSystemTime(-9000);
    expect(format(date, 'id_ID')).toEqual('sebentar lagi');

    vi.setSystemTime(-30000);
    expect(format(date, 'id_ID')).toEqual('dalam 30 detik');

    vi.setSystemTime(-60000);
    expect(format(date, 'id_ID')).toEqual('dalam semenit');

    vi.setSystemTime(-1800000);
    expect(format(date, 'id_ID')).toEqual('dalam 30 menit');

    vi.setSystemTime(-3600000);
    expect(format(date, 'id_ID')).toEqual('dalam sejam');

    vi.setSystemTime(-28800000);
    expect(format(date, 'id_ID')).toEqual('dalam 8 jam');

    vi.setSystemTime(-86400000);
    expect(format(date, 'id_ID')).toEqual('dalam sehari');

    vi.setSystemTime(-259200000);
    expect(format(date, 'id_ID')).toEqual('dalam 3 hari');

    vi.setSystemTime(-604800000);
    expect(format(date, 'id_ID')).toEqual('dalam seminggu');

    vi.setSystemTime(-1814400000);
    expect(format(date, 'id_ID')).toEqual('dalam 3 minggu');

    vi.setSystemTime(-2678400000);
    expect(format(date, 'id_ID')).toEqual('dalam sebulan');

    vi.setSystemTime(-10713600000);
    expect(format(date, 'id_ID')).toEqual('dalam 4 bulan');

    vi.setSystemTime(-31622400000);
    expect(format(date, 'id_ID')).toEqual('dalam setahun');

    vi.setSystemTime(-316224000000);
    expect(format(date, 'id_ID')).toEqual('dalam 10 tahun');
  });
});
