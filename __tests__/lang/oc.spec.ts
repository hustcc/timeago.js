
import { register, format } from '../../src';
import oc from '../../src/lang/oc';

register('oc', oc);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('oc', () => {
  test('time ago', () => {
    vi.setSystemTime(9 * 1000);
    expect(format(date, 'oc')).toEqual('fa un moment');

    vi.setSystemTime(30 * 1000);
    expect(format(date, 'oc')).toEqual('fa 30 segondas');

    vi.setSystemTime(1000 * 60);
    expect(format(date, 'oc')).toEqual('fa 1 minuta');

    vi.setSystemTime(1000 * 60 * 30);
    expect(format(date, 'oc')).toEqual('fa 30 minutas');

    vi.setSystemTime(1000 * 60 * 60);
    expect(format(date, 'oc')).toEqual('fa 1 ora');

    vi.setSystemTime(1000 * 60 * 60 * 8);
    expect(format(date, 'oc')).toEqual('fa 8 oras');

    vi.setSystemTime(1000 * 60 * 60 * 24);
    expect(format(date, 'oc')).toEqual('fa 1 jorn');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'oc')).toEqual('fa 3 jorns');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'oc')).toEqual('fa 1 setmana');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'oc')).toEqual('fa 3 setmanas');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'oc')).toEqual('fa 1 mes');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'oc')).toEqual('fa 4 meses');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'oc')).toEqual('fa 1 an');

    vi.setSystemTime(1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'oc')).toEqual('fa 10 ans');
  });
  test('time in', () => {
    vi.setSystemTime(-9 * 1000);
    expect(format(date, 'oc')).toEqual("d'aquí un moment");

    vi.setSystemTime(-30 * 1000);
    expect(format(date, 'oc')).toEqual("d'aquí 30 segondas");

    vi.setSystemTime(-1000 * 60);
    expect(format(date, 'oc')).toEqual("d'aquí 1 minuta");

    vi.setSystemTime(-1000 * 60 * 30);
    expect(format(date, 'oc')).toEqual("d'aquí 30 minutas");

    vi.setSystemTime(-1000 * 60 * 60);
    expect(format(date, 'oc')).toEqual("d'aquí 1 ora");

    vi.setSystemTime(-1000 * 60 * 60 * 8);
    expect(format(date, 'oc')).toEqual("d'aquí 8 oras");

    vi.setSystemTime(-1000 * 60 * 60 * 24);
    expect(format(date, 'oc')).toEqual("d'aquí 1 jorn");

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 3);
    expect(format(date, 'oc')).toEqual("d'aquí 3 jorns");

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 7);
    expect(format(date, 'oc')).toEqual("d'aquí 1 setmana");

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 7 * 3);
    expect(format(date, 'oc')).toEqual("d'aquí 3 setmanas");

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 31);
    expect(format(date, 'oc')).toEqual("d'aquí 1 mes");

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 31 * 4);
    expect(format(date, 'oc')).toEqual("d'aquí 4 meses");

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 366);
    expect(format(date, 'oc')).toEqual("d'aquí 1 an");

    vi.setSystemTime(-1000 * 60 * 60 * 24 * 366 * 10);
    expect(format(date, 'oc')).toEqual("d'aquí 10 ans");
  });
});
