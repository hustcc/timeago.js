export default function(number: number, index: number): [string, string] {
  return [
    ['gerade eben', 'gleich'],
    ['vor %s Sekunden', 'in %s Sekunden'],
    ['vor 1 Minute', 'in 1 Minute'],
    ['vor %s Minuten', 'in %s Minuten'],
    ['vor 1 Stunde', 'in 1 Stunde'],
    ['vor %s Stunden', 'in %s Stunden'],
    ['vor 1 Tag', 'in 1 Tag'],
    ['vor %s Tagen', 'in %s Tagen'],
    ['vor 1 Woche', 'in 1 Woche'],
    ['vor %s Wochen', 'in %s Wochen'],
    ['vor 1 Monat', 'in 1 Monat'],
    ['vor %s Monaten', 'in %s Monaten'],
    ['vor 1 Jahr', 'in 1 Jahr'],
    ['vor %s Jahren', 'in %s Jahren'],
  ][index] as [string, string];
}
