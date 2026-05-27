import { vi } from 'vitest';
import { register, format } from '../../src';
import ca from '../../src/lang/ca';

register('ca', ca);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('ca', () => {
  test('time ago', () => {
    vi.setSystemTime(9000);
    expect(format(date, 'ca')).toEqual('fa un moment');

    vi.setSystemTime(30000);
    expect(format(date, 'ca')).toEqual('fa 30 segons');

    vi.setSystemTime(60000);
    expect(format(date, 'ca')).toEqual('fa 1 minut');

    vi.setSystemTime(1800000);
    expect(format(date, 'ca')).toEqual('fa 30 minuts');

    vi.setSystemTime(3600000);
    expect(format(date, 'ca')).toEqual('fa 1 hora');

    vi.setSystemTime(28800000);
    expect(format(date, 'ca')).toEqual('fa 8 hores');

    vi.setSystemTime(86400000);
    expect(format(date, 'ca')).toEqual('fa 1 dia');

    vi.setSystemTime(259200000);
    expect(format(date, 'ca')).toEqual('fa 3 dies');

    vi.setSystemTime(604800000);
    expect(format(date, 'ca')).toEqual('fa 1 setmana');

    vi.setSystemTime(1814400000);
    expect(format(date, 'ca')).toEqual('fa 3 setmanes');

    vi.setSystemTime(2678400000);
    expect(format(date, 'ca')).toEqual('fa 1 mes');

    vi.setSystemTime(10713600000);
    expect(format(date, 'ca')).toEqual('fa 4 mesos');

    vi.setSystemTime(31622400000);
    expect(format(date, 'ca')).toEqual('fa 1 any');

    vi.setSystemTime(316224000000);
    expect(format(date, 'ca')).toEqual('fa 10 anys');
  });
  test('time in', () => {
    vi.setSystemTime(-9000);
    expect(format(date, 'ca')).toEqual("d'aquí un moment");

    vi.setSystemTime(-30000);
    expect(format(date, 'ca')).toEqual("d'aquí 30 segons");

    vi.setSystemTime(-60000);
    expect(format(date, 'ca')).toEqual("d'aquí 1 minut");

    vi.setSystemTime(-1800000);
    expect(format(date, 'ca')).toEqual("d'aquí 30 minuts");

    vi.setSystemTime(-3600000);
    expect(format(date, 'ca')).toEqual("d'aquí 1 hora");

    vi.setSystemTime(-28800000);
    expect(format(date, 'ca')).toEqual("d'aquí 8 hores");

    vi.setSystemTime(-86400000);
    expect(format(date, 'ca')).toEqual("d'aquí 1 dia");

    vi.setSystemTime(-259200000);
    expect(format(date, 'ca')).toEqual("d'aquí 3 dies");

    vi.setSystemTime(-604800000);
    expect(format(date, 'ca')).toEqual("d'aquí 1 setmana");

    vi.setSystemTime(-1814400000);
    expect(format(date, 'ca')).toEqual("d'aquí 3 setmanes");

    vi.setSystemTime(-2678400000);
    expect(format(date, 'ca')).toEqual("d'aquí 1 mes");

    vi.setSystemTime(-10713600000);
    expect(format(date, 'ca')).toEqual("d'aquí 4 mesos");

    vi.setSystemTime(-31622400000);
    expect(format(date, 'ca')).toEqual("d'aquí 1 any");

    vi.setSystemTime(-316224000000);
    expect(format(date, 'ca')).toEqual("d'aquí 10 anys");
  });
});
