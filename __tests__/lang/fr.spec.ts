import { vi } from 'vitest';
import { register, format } from '../../src';
import fr from '../../src/lang/fr';

register('fr', fr);

let date = new Date();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
  date = new Date();
});
afterEach(() => {
  vi.useRealTimers();
});
describe('fr', () => {
  test('time ago', () => {
    vi.setSystemTime(9000);
    expect(format(date, 'fr')).toEqual("à l'instant");

    vi.setSystemTime(30000);
    expect(format(date, 'fr')).toEqual('il y a 30 secondes');

    vi.setSystemTime(60000);
    expect(format(date, 'fr')).toEqual('il y a 1 minute');

    vi.setSystemTime(1800000);
    expect(format(date, 'fr')).toEqual('il y a 30 minutes');

    vi.setSystemTime(3600000);
    expect(format(date, 'fr')).toEqual('il y a 1 heure');

    vi.setSystemTime(28800000);
    expect(format(date, 'fr')).toEqual('il y a 8 heures');

    vi.setSystemTime(86400000);
    expect(format(date, 'fr')).toEqual('il y a 1 jour');

    vi.setSystemTime(259200000);
    expect(format(date, 'fr')).toEqual('il y a 3 jours');

    vi.setSystemTime(604800000);
    expect(format(date, 'fr')).toEqual('il y a 1 semaine');

    vi.setSystemTime(1814400000);
    expect(format(date, 'fr')).toEqual('il y a 3 semaines');

    vi.setSystemTime(2678400000);
    expect(format(date, 'fr')).toEqual('il y a 1 mois');

    vi.setSystemTime(10713600000);
    expect(format(date, 'fr')).toEqual('il y a 4 mois');

    vi.setSystemTime(31622400000);
    expect(format(date, 'fr')).toEqual('il y a 1 an');

    vi.setSystemTime(316224000000);
    expect(format(date, 'fr')).toEqual('il y a 10 ans');
  });
  test('time in', () => {
    vi.setSystemTime(-9000);
    expect(format(date, 'fr')).toEqual('dans un instant');

    vi.setSystemTime(-30000);
    expect(format(date, 'fr')).toEqual('dans 30 secondes');

    vi.setSystemTime(-60000);
    expect(format(date, 'fr')).toEqual('dans 1 minute');

    vi.setSystemTime(-1800000);
    expect(format(date, 'fr')).toEqual('dans 30 minutes');

    vi.setSystemTime(-3600000);
    expect(format(date, 'fr')).toEqual('dans 1 heure');

    vi.setSystemTime(-28800000);
    expect(format(date, 'fr')).toEqual('dans 8 heures');

    vi.setSystemTime(-86400000);
    expect(format(date, 'fr')).toEqual('dans 1 jour');

    vi.setSystemTime(-259200000);
    expect(format(date, 'fr')).toEqual('dans 3 jours');

    vi.setSystemTime(-604800000);
    expect(format(date, 'fr')).toEqual('dans 1 semaine');

    vi.setSystemTime(-1814400000);
    expect(format(date, 'fr')).toEqual('dans 3 semaines');

    vi.setSystemTime(-2678400000);
    expect(format(date, 'fr')).toEqual('dans 1 mois');

    vi.setSystemTime(-10713600000);
    expect(format(date, 'fr')).toEqual('dans 4 mois');

    vi.setSystemTime(-31622400000);
    expect(format(date, 'fr')).toEqual('dans 1 an');

    vi.setSystemTime(-316224000000);
    expect(format(date, 'fr')).toEqual('dans 10 ans');
  });
});
