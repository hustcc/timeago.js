export default function(number: number, index: number): [string, string] {
  let inflectionIndex = 0;

  const isInflectionNeeded =
    index == 1 || index == 3 || index == 5 || index == 7 || index == 9 || index == 11 || index == 13;
  if (isInflectionNeeded && number >= 5) {
    inflectionIndex = 1;
  }

  return [
    [['práve teraz', 'práve teraz']],
    [['pred %s sekundami', 'o %s sekundy'], ['pred %s sekundami', 'o %s sekúnd']],
    [['pred minútou', 'o minútu']],
    [['pred %s minútami', 'o %s minúty'], ['pred %s minútami', 'o %s minút']],
    [['pred hodinou', 'o hodinu']],
    [['pred %s hodinami', 'o %s hodiny'], ['pred %s hodinami', 'o %s hodín']],
    [['včera', 'zajtra']],
    [['pred %s dňami', 'o %s dni'], ['pred %s dňami', 'o %s dní']],
    [['minulý týždeň', 'budúci týždeň']],
    [['pred %s týždňami', 'o %s týždne'], ['pred %s týždňami', 'o %s týždňov']],
    [['minulý mesiac', 'budúci mesiac']],
    [['pred %s mesiacmi', 'o %s mesiace'], ['pred %s mesiacmi', 'o %s mesiacov']],
    [['pred rokom', 'budúci rok']],
    [['pred %s rokmi', 'o %s roky'], ['pred %s rokmi', 'o %s rokov']],
  ][index][inflectionIndex] as [string, string];
}
