import { vi } from 'vitest';
import { register, format } from '../../src';
import pt_PT from '../../src/lang/pt_PT';

register('pt_PT', pt_PT);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('pt_PT', () => {
  test('time ago', () => {
    vi.setSystemTime(9000);
    expect(format(date, 'pt_PT')).toEqual('agora mesmo');

    vi.setSystemTime(30000);
    expect(format(date, 'pt_PT')).toEqual('há 30 segundos');

    vi.setSystemTime(60000);
    expect(format(date, 'pt_PT')).toEqual('há 1 minuto');

    vi.setSystemTime(1800000);
    expect(format(date, 'pt_PT')).toEqual('há 30 minutos');

    vi.setSystemTime(3600000);
    expect(format(date, 'pt_PT')).toEqual('há 1 hora');

    vi.setSystemTime(28800000);
    expect(format(date, 'pt_PT')).toEqual('há 8 horas');

    vi.setSystemTime(86400000);
    expect(format(date, 'pt_PT')).toEqual('há 1 dia');

    vi.setSystemTime(259200000);
    expect(format(date, 'pt_PT')).toEqual('há 3 dias');

    vi.setSystemTime(604800000);
    expect(format(date, 'pt_PT')).toEqual('há 1 semana');

    vi.setSystemTime(1814400000);
    expect(format(date, 'pt_PT')).toEqual('há 3 semanas');

    vi.setSystemTime(2678400000);
    expect(format(date, 'pt_PT')).toEqual('há 1 mês');

    vi.setSystemTime(10713600000);
    expect(format(date, 'pt_PT')).toEqual('há 4 meses');

    vi.setSystemTime(31622400000);
    expect(format(date, 'pt_PT')).toEqual('há 1 ano');

    vi.setSystemTime(316224000000);
    expect(format(date, 'pt_PT')).toEqual('há 10 anos');
  });
  test('time in', () => {
    vi.setSystemTime(-9000);
    expect(format(date, 'pt_PT')).toEqual('agora');

    vi.setSystemTime(-30000);
    expect(format(date, 'pt_PT')).toEqual('em 30 segundos');

    vi.setSystemTime(-60000);
    expect(format(date, 'pt_PT')).toEqual('em 1 minuto');

    vi.setSystemTime(-1800000);
    expect(format(date, 'pt_PT')).toEqual('em 30 minutos');

    vi.setSystemTime(-3600000);
    expect(format(date, 'pt_PT')).toEqual('em 1 hora');

    vi.setSystemTime(-28800000);
    expect(format(date, 'pt_PT')).toEqual('em 8 horas');

    vi.setSystemTime(-86400000);
    expect(format(date, 'pt_PT')).toEqual('em 1 dia');

    vi.setSystemTime(-259200000);
    expect(format(date, 'pt_PT')).toEqual('em 3 dias');

    vi.setSystemTime(-604800000);
    expect(format(date, 'pt_PT')).toEqual('em 1 semana');

    vi.setSystemTime(-1814400000);
    expect(format(date, 'pt_PT')).toEqual('em 3 semanas');

    vi.setSystemTime(-2678400000);
    expect(format(date, 'pt_PT')).toEqual('em 1 mês');

    vi.setSystemTime(-10713600000);
    expect(format(date, 'pt_PT')).toEqual('em 4 meses');

    vi.setSystemTime(-31622400000);
    expect(format(date, 'pt_PT')).toEqual('em 1 ano');

    vi.setSystemTime(-316224000000);
    expect(format(date, 'pt_PT')).toEqual('em 10 anos');
  });
});
