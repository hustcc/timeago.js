export default function(number: number, index: number): [string, string] {
  return [
    ['ĵus', 'post momento'],
    ['antaŭ %s sekundoj', 'post %s sekundoj'],
    ['antaŭ 1 minuto', 'post 1 minuto'],
    ['antaŭ %s minutoj', 'post %s minutoj'],
    ['antaŭ 1 horo', 'post 1 horo'],
    ['antaŭ %s horoj', 'post %s horoj'],
    ['antaŭ 1 tago', 'post 1 tago'],
    ['antaŭ %s tagoj', 'post %s tagoj'],
    ['antaŭ 1 semajno', 'post 1 semajno'],
    ['antaŭ %s semajnoj', 'post %s semajnoj'],
    ['antaŭ 1 monato', 'post 1 monato'],
    ['antaŭ %s monatoj', 'post %s monatoj'],
    ['antaŭ 1 jaro', 'post 1 jaro'],
    ['antaŭ %s jaroj', 'post %s jaroj'],
  ][index] as [string, string];
}
