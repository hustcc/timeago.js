export default function(number: number, index: number): [string, string] {
  return [
    ['nun mem', 'post iom'],
    ['antaŭ %s sekundoj', 'en %s sekundoj'],
    ['antaŭ 1 minuto', 'en 1 minuto'],
    ['antaŭ %s minutoj', 'en %s minutoj'],
    ['antaŭ 1 horo', 'en 1 horo'],
    ['antaŭ %s horoj', 'en %s horoj'],
    ['antaŭ 1 tago', 'en 1 tago'],
    ['antaŭ %s tagoj', 'en %s tagoj'],
    ['antaŭ 1 semajno', 'en 1 semajno'],
    ['antaŭ %s semajnoj', 'en %s semajnoj'],
    ['antaŭ 1 monato', 'en 1 monato'],
    ['antaŭ %s monatoj', 'en %s monatoj'],
    ['antaŭ 1 jaro', 'en 1 jaro'],
    ['antaŭ %s jaroj', 'en %s jaroj'],
  ][index] as [string, string];
}
