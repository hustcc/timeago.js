import { vi } from 'vitest';
import { register, format } from '../../src';
import is from '../../src/lang/is';

register('is', is);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('is', () => {
  test('time ago', () => {
    vi.setSystemTime(9000);
    expect(format(date, 'is')).toEqual('rétt í þessu');

    vi.setSystemTime(30000);
    expect(format(date, 'is')).toEqual('fyrir 30 sekúndum');

    vi.setSystemTime(60000);
    expect(format(date, 'is')).toEqual('fyrir 1 mínútu');

    vi.setSystemTime(1800000);
    expect(format(date, 'is')).toEqual('fyrir 30 mínútum');

    vi.setSystemTime(3600000);
    expect(format(date, 'is')).toEqual('fyrir 1 klukkutíma');

    vi.setSystemTime(28800000);
    expect(format(date, 'is')).toEqual('fyrir 8 klukkutímum');

    vi.setSystemTime(86400000);
    expect(format(date, 'is')).toEqual('fyrir 1 degi');

    vi.setSystemTime(259200000);
    expect(format(date, 'is')).toEqual('fyrir 3 dögum');

    vi.setSystemTime(604800000);
    expect(format(date, 'is')).toEqual('fyrir 1 viku');

    vi.setSystemTime(1814400000);
    expect(format(date, 'is')).toEqual('fyrir 3 vikum');

    vi.setSystemTime(2678400000);
    expect(format(date, 'is')).toEqual('fyrir 1 mánuði');

    vi.setSystemTime(10713600000);
    expect(format(date, 'is')).toEqual('fyrir 4 mánuðum');

    vi.setSystemTime(31622400000);
    expect(format(date, 'is')).toEqual('fyrir 1 ári');

    vi.setSystemTime(316224000000);
    expect(format(date, 'is')).toEqual('fyrir 10 árum');
  });
  test('time in', () => {
    vi.setSystemTime(-9000);
    expect(format(date, 'is')).toEqual('rétt strax');

    vi.setSystemTime(-30000);
    expect(format(date, 'is')).toEqual('eftir 30 sekúndur');

    vi.setSystemTime(-60000);
    expect(format(date, 'is')).toEqual('eftir 1 mínútu');

    vi.setSystemTime(-1800000);
    expect(format(date, 'is')).toEqual('eftir 30 mínútur');

    vi.setSystemTime(-3600000);
    expect(format(date, 'is')).toEqual('eftir 1 klukkutíma');

    vi.setSystemTime(-28800000);
    expect(format(date, 'is')).toEqual('eftir 8 klukkutíma');

    vi.setSystemTime(-86400000);
    expect(format(date, 'is')).toEqual('eftir 1 dag');

    vi.setSystemTime(-259200000);
    expect(format(date, 'is')).toEqual('eftir 3 daga');

    vi.setSystemTime(-604800000);
    expect(format(date, 'is')).toEqual('eftir 1 viku');

    vi.setSystemTime(-1814400000);
    expect(format(date, 'is')).toEqual('eftir 3 vikur');

    vi.setSystemTime(-2678400000);
    expect(format(date, 'is')).toEqual('eftir 1 mánuð');

    vi.setSystemTime(-10713600000);
    expect(format(date, 'is')).toEqual('eftir 4 mánuði');

    vi.setSystemTime(-31622400000);
    expect(format(date, 'is')).toEqual('eftir 1 ár');

    vi.setSystemTime(-316224000000);
    expect(format(date, 'is')).toEqual('eftir 10 ár');
  });
});
