import { vi } from 'vitest';
import { register, format } from '../../src';
import es from '../../src/lang/es';

register('es', es);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('es', () => {
  test('time ago', () => {
    vi.setSystemTime(9000);
    expect(format(date, 'es')).toEqual('justo ahora');

    vi.setSystemTime(30000);
    expect(format(date, 'es')).toEqual('hace 30 segundos');

    vi.setSystemTime(60000);
    expect(format(date, 'es')).toEqual('hace 1 minuto');

    vi.setSystemTime(1800000);
    expect(format(date, 'es')).toEqual('hace 30 minutos');

    vi.setSystemTime(3600000);
    expect(format(date, 'es')).toEqual('hace 1 hora');

    vi.setSystemTime(28800000);
    expect(format(date, 'es')).toEqual('hace 8 horas');

    vi.setSystemTime(86400000);
    expect(format(date, 'es')).toEqual('hace 1 día');

    vi.setSystemTime(259200000);
    expect(format(date, 'es')).toEqual('hace 3 días');

    vi.setSystemTime(604800000);
    expect(format(date, 'es')).toEqual('hace 1 semana');

    vi.setSystemTime(1814400000);
    expect(format(date, 'es')).toEqual('hace 3 semanas');

    vi.setSystemTime(2678400000);
    expect(format(date, 'es')).toEqual('hace 1 mes');

    vi.setSystemTime(10713600000);
    expect(format(date, 'es')).toEqual('hace 4 meses');

    vi.setSystemTime(31622400000);
    expect(format(date, 'es')).toEqual('hace 1 año');

    vi.setSystemTime(316224000000);
    expect(format(date, 'es')).toEqual('hace 10 años');
  });
  test('time in', () => {
    vi.setSystemTime(-9000);
    expect(format(date, 'es')).toEqual('en un rato');

    vi.setSystemTime(-30000);
    expect(format(date, 'es')).toEqual('en 30 segundos');

    vi.setSystemTime(-60000);
    expect(format(date, 'es')).toEqual('en 1 minuto');

    vi.setSystemTime(-1800000);
    expect(format(date, 'es')).toEqual('en 30 minutos');

    vi.setSystemTime(-3600000);
    expect(format(date, 'es')).toEqual('en 1 hora');

    vi.setSystemTime(-28800000);
    expect(format(date, 'es')).toEqual('en 8 horas');

    vi.setSystemTime(-86400000);
    expect(format(date, 'es')).toEqual('en 1 día');

    vi.setSystemTime(-259200000);
    expect(format(date, 'es')).toEqual('en 3 días');

    vi.setSystemTime(-604800000);
    expect(format(date, 'es')).toEqual('en 1 semana');

    vi.setSystemTime(-1814400000);
    expect(format(date, 'es')).toEqual('en 3 semanas');

    vi.setSystemTime(-2678400000);
    expect(format(date, 'es')).toEqual('en 1 mes');

    vi.setSystemTime(-10713600000);
    expect(format(date, 'es')).toEqual('en 4 meses');

    vi.setSystemTime(-31622400000);
    expect(format(date, 'es')).toEqual('en 1 año');

    vi.setSystemTime(-316224000000);
    expect(format(date, 'es')).toEqual('en 10 años');
  });
});
