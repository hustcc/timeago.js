export default function(number: number, index: number): [string, string] {
  return [
    ['rétt í þessu', 'rétt strax'],
    ['fyrir %s sekúndum', 'eftir %s sekunder'],
    ['fyrir 1 mínútu síðan', 'eftir 1 mínútu'],
    ['fyrir %s mínútum síðan', 'eftir %s mínútur'],
    ['fyrir 1 klukkutíma síðan', 'eftir 1 klukkutíma'],
    ['fyrir %s klukkutímum síðan', 'eftir %s klukkutíma'],
    ['fyrir 1 degi síðan', 'eftir 1 dag'],
    ['fyrir %s dögum síðan', 'eftir %s daga'],
    ['fyrir 1 viku síðan', 'eftir 1 viku'],
    ['fyrir %s vikum síðan', 'eftir %s vikur'],
    ['fyrir 1 mánuði síðan', 'eftir 1 mánuð'],
    ['fyrir %s mánuðum síðan', 'eftir %s mánuði'],
    ['fyrir 1 ári síðan', 'eftir 1 ár'],
    ['fyrir %s árum síðan', 'eftir %s ár'],
  ][index] as [string, string];
}
