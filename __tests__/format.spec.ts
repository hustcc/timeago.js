import { vi } from 'vitest';
import { format } from '../src/';

describe('format', () => {
  test('format', () => {
    const now = new Date();
    expect(format(+now - 5000)).toBe('just now');
    expect(format(+now - 5000, undefined, { relativeDate: now })).toBe('just now');

    expect(format(+now - 1000 * 1000, 'zh_CN')).toBe('16 分钟前');
    expect(format(+now - 1000 * 1000, 'zh_CN', { relativeDate: now })).toBe('16 分钟前');

    expect(format(+now - 1000 * 1000, 'not-exist-locale', { relativeDate: now })).toBe('16 minutes ago');
  });

  test('format with fake time', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2024-01-01T00:00:00Z'));
    const date = new Date('2024-01-01T00:00:00Z');
    expect(format(date)).toBe('just now');
    vi.useRealTimers();
  });
});

