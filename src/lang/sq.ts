export default function(number: number, index: number): [string, string] {
  return [
    ['pak më parë', 'pas pak'],
    ['para %s sekondash', 'pas %s sekondash'],
    ['para një minute', 'pas një minute'],
    ['para %s minutash', 'pas %s minutash'],
    ['para një ore', 'pas një ore'],
    ['para %s orësh', 'pas %s orësh'],
    ['dje', 'nesër'],
    ['para %s ditësh', 'pas %s ditësh'],
    ['para një jave', 'pas një jave'],
    ['para %s javësh', 'pas %s javësh'],
    ['para një muaji', 'pas një muaji'],
    ['para %s muajsh', 'pas %s muajsh'],
    ['para një viti', 'pas një viti'],
    ['para %s vjetësh', 'pas %s vjetësh'],
  ][index] as [string, string];
}
