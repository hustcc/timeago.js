export type LocaleFunc = (diff: number, idx: number, totalSec?: number) => [string, string];

export type LocaleMap = Record<string, LocaleFunc>;

export type TDate = Date | string | number;

export type TimerPool = Record<number, number>;
