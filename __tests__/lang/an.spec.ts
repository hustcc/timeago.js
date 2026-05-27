
import { register, format } from '../../src';
import an from '../../src/lang/an';

register('an', an);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('an', () => {
  test('time ago', () => {
    vi.setSystemTime(9 * 1000);
    expect(format(date, 'an')).toEqual('fa un momento');

    vi.setSystemTime(30 * 1000);
    expect(format(date, 'an')).toEqual('fa 30 segundos');

    vi.setSystemTime(1000 * 60);
    expect(format(date, 'an')).toEqual('fa 1 minuto');

    vi.setSystemTime(1000 * 60 * 30);
    expect(format(date, 'an')).toEqual('fa 30 minutos');

    vi.setSystemTime(1000 * 60 * 60);
    expect(format(date, 'an')).toEqual('fa 1 hora');

    vi.setSystemTime(1000 * 60 * 60 * 8);
    expect(format(date, 'an')).toEqual('fa 8 horas');

    vi.setSystemTime(1000 * 60 * 60 * 24);
    expect(format(date, 'an')).toEqual('fa 1 día');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'an')).toEqual('fa 3 días');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'an')).toEqual('fa 1 semana');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'an')).toEqual('fa 3 semanas');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'an')).toEqual('fa 1 mes');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'an')).toEqual('fa 4 meses');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'an')).toEqual('fa 1 anyo');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'an')).toEqual('fa 10 anyos');
  });
  test('time in', () => {
    vi.setSystemTime(-9 * 1000);
    expect(format(date, 'an')).toEqual("d'aquí a un momento");

    vi.setSystemTime(-30 * 1000);
    expect(format(date, 'an')).toEqual("d'aquí a 30 segundos");

    vi.setSystemTime(-1000 * 60);
    expect(format(date, 'an')).toEqual("d'aquí a 1 minuto");

    vi.setSystemTime(-1000 * 60 * 30);
    expect(format(date, 'an')).toEqual("d'aquí a 30 minutos");

    vi.setSystemTime(-1000 * 60 * 60);
    expect(format(date, 'an')).toEqual("d'aquí a 1 hora");

    vi.setSystemTime(-1000 * 60 * 60 * 8);
    expect(format(date, 'an')).toEqual("d'aquí a 8 horas");

    vi.setSystemTime(-1000 * 60 * 60 * 24);
    expect(format(date, 'an')).toEqual("d'aquí a 1 día");

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'an')).toEqual("d'aquí a 3 días");

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'an')).toEqual("d'aquí a 1 semana");

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'an')).toEqual("d'aquí a 3 semanas");

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'an')).toEqual("d'aquí a 1 mes");

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'an')).toEqual("d'aquí a 4 meses");

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'an')).toEqual("d'aquí a 1 anyo");

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'an')).toEqual("d'aquí a 10 anyos");
  });
});
