import { vi } from 'vitest';
import { register, format } from '../../src';
import fi from '../../src/lang/fi';

register('fi', fi);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('fi', () => {
  test('time ago', () => {
    vi.setSystemTime(9000);
    expect(format(date, 'fi')).toEqual('juuri äsken');

    vi.setSystemTime(30000);
    expect(format(date, 'fi')).toEqual('30 sekuntia sitten');

    vi.setSystemTime(60000);
    expect(format(date, 'fi')).toEqual('minuutti sitten');

    vi.setSystemTime(1800000);
    expect(format(date, 'fi')).toEqual('30 minuuttia sitten');

    vi.setSystemTime(3600000);
    expect(format(date, 'fi')).toEqual('tunti sitten');

    vi.setSystemTime(28800000);
    expect(format(date, 'fi')).toEqual('8 tuntia sitten');

    vi.setSystemTime(86400000);
    expect(format(date, 'fi')).toEqual('päivä sitten');

    vi.setSystemTime(259200000);
    expect(format(date, 'fi')).toEqual('3 päivää sitten');

    vi.setSystemTime(604800000);
    expect(format(date, 'fi')).toEqual('viikko sitten');

    vi.setSystemTime(1814400000);
    expect(format(date, 'fi')).toEqual('3 viikkoa sitten');

    vi.setSystemTime(2678400000);
    expect(format(date, 'fi')).toEqual('kuukausi sitten');

    vi.setSystemTime(10713600000);
    expect(format(date, 'fi')).toEqual('4 kuukautta sitten');

    vi.setSystemTime(31622400000);
    expect(format(date, 'fi')).toEqual('vuosi sitten');

    vi.setSystemTime(316224000000);
    expect(format(date, 'fi')).toEqual('10 vuotta sitten');
  });
  test('time in', () => {
    vi.setSystemTime(-9000);
    expect(format(date, 'fi')).toEqual('juuri nyt');

    vi.setSystemTime(-30000);
    expect(format(date, 'fi')).toEqual('30 sekunnin päästä');

    vi.setSystemTime(-60000);
    expect(format(date, 'fi')).toEqual('minuutin päästä');

    vi.setSystemTime(-1800000);
    expect(format(date, 'fi')).toEqual('30 minuutin päästä');

    vi.setSystemTime(-3600000);
    expect(format(date, 'fi')).toEqual('tunnin päästä');

    vi.setSystemTime(-28800000);
    expect(format(date, 'fi')).toEqual('8 tunnin päästä');

    vi.setSystemTime(-86400000);
    expect(format(date, 'fi')).toEqual('päivän päästä');

    vi.setSystemTime(-259200000);
    expect(format(date, 'fi')).toEqual('3 päivän päästä');

    vi.setSystemTime(-604800000);
    expect(format(date, 'fi')).toEqual('viikon päästä');

    vi.setSystemTime(-1814400000);
    expect(format(date, 'fi')).toEqual('3 viikon päästä');

    vi.setSystemTime(-2678400000);
    expect(format(date, 'fi')).toEqual('kuukauden päästä');

    vi.setSystemTime(-10713600000);
    expect(format(date, 'fi')).toEqual('4 kuukauden päästä');

    vi.setSystemTime(-31622400000);
    expect(format(date, 'fi')).toEqual('vuoden päästä');

    vi.setSystemTime(-316224000000);
    expect(format(date, 'fi')).toEqual('10 vuoden päästä');
  });
});
