import { vi } from 'vitest';
import { register, format } from '../../src';
import gl from '../../src/lang/gl';

register('gl', gl);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('gl', () => {
  test('time ago', () => {
    vi.setSystemTime(9000);
    expect(format(date, 'gl')).toEqual('xusto agora');

    vi.setSystemTime(30000);
    expect(format(date, 'gl')).toEqual('hai 30 segundos');

    vi.setSystemTime(60000);
    expect(format(date, 'gl')).toEqual('hai 1 minuto');

    vi.setSystemTime(1800000);
    expect(format(date, 'gl')).toEqual('hai 30 minutos');

    vi.setSystemTime(3600000);
    expect(format(date, 'gl')).toEqual('hai 1 hora');

    vi.setSystemTime(28800000);
    expect(format(date, 'gl')).toEqual('hai 8 horas');

    vi.setSystemTime(86400000);
    expect(format(date, 'gl')).toEqual('hai 1 día');

    vi.setSystemTime(259200000);
    expect(format(date, 'gl')).toEqual('hai 3 días');

    vi.setSystemTime(604800000);
    expect(format(date, 'gl')).toEqual('hai 1 semana');

    vi.setSystemTime(1814400000);
    expect(format(date, 'gl')).toEqual('hai 3 semanas');

    vi.setSystemTime(2678400000);
    expect(format(date, 'gl')).toEqual('hai 1 mes');

    vi.setSystemTime(10713600000);
    expect(format(date, 'gl')).toEqual('hai 4 meses');

    vi.setSystemTime(31622400000);
    expect(format(date, 'gl')).toEqual('hai 1 ano');

    vi.setSystemTime(316224000000);
    expect(format(date, 'gl')).toEqual('hai 10 anos');
  });
  test('time in', () => {
    vi.setSystemTime(-9000);
    expect(format(date, 'gl')).toEqual('daquí a un pouco');

    vi.setSystemTime(-30000);
    expect(format(date, 'gl')).toEqual('en 30 segundos');

    vi.setSystemTime(-60000);
    expect(format(date, 'gl')).toEqual('nun minuto');

    vi.setSystemTime(-1800000);
    expect(format(date, 'gl')).toEqual('en 30 minutos');

    vi.setSystemTime(-3600000);
    expect(format(date, 'gl')).toEqual('nunha hora');

    vi.setSystemTime(-28800000);
    expect(format(date, 'gl')).toEqual('en 8 horas');

    vi.setSystemTime(-86400000);
    expect(format(date, 'gl')).toEqual('nun día');

    vi.setSystemTime(-259200000);
    expect(format(date, 'gl')).toEqual('en 3 días');

    vi.setSystemTime(-604800000);
    expect(format(date, 'gl')).toEqual('nunha semana');

    vi.setSystemTime(-1814400000);
    expect(format(date, 'gl')).toEqual('en 3 semanas');

    vi.setSystemTime(-2678400000);
    expect(format(date, 'gl')).toEqual('nun mes');

    vi.setSystemTime(-10713600000);
    expect(format(date, 'gl')).toEqual('en 4 meses');

    vi.setSystemTime(-31622400000);
    expect(format(date, 'gl')).toEqual('nun ano');

    vi.setSystemTime(-316224000000);
    expect(format(date, 'gl')).toEqual('en 10 anos');
  });
});
