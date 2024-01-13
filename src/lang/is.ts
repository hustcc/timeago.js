export default function(number: number, index: number): [string, string] {
  return [
    ['rétt í þessu', 'rétt strax'],
    ['fyrir %s sekúndum', 'eftir %s sekúndur'],
    ['fyrir 1 mínútu', 'eftir 1 mínútu'],
    ['fyrir %s mínútum', 'eftir %s mínútur'],
    ['fyrir 1 klukkutíma', 'eftir 1 klukkutíma'],
    ['fyrir %s klukkutímum', 'eftir %s klukkutíma'],
    ['fyrir 1 degi', 'eftir 1 dag'],
    ['fyrir %s dögum', 'eftir %s daga'],
    ['fyrir 1 viku', 'eftir 1 viku'],
    ['fyrir %s vikum', 'eftir %s vikur'],
    ['fyrir 1 mánuði', 'eftir 1 mánuð'],
    ['fyrir %s mánuðum', 'eftir %s mánuði'],
    ['fyrir 1 ári', 'eftir 1 ár'],
    ['fyrir %s árum', 'eftir %s ár'],
  ][index] as [string, string];
}
