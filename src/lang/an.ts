export default function(number: number, index: number): [string, string] {
  return [
    ['fa un momento', "d'aquí a un momento"],
    ['fa %s segundos', "d'aquí a %s segundos"],
    ['fa 1 minuto', "d'aquí a 1 minuto"],
    ['fa %s minutos', "d'aquí a %s minutos"],
    ['fa 1 hora', "d'aquí a 1 hora"],
    ['fa %s horas', "d'aquí a %s horas"],
    ['fa 1 día', "d'aquí a 1 día"],
    ['fa %s días', "d'aquí a %s días"],
    ['fa 1 semana', "d'aquí a 1 semana"],
    ['fa %s semanas', "d'aquí a %s semanas"],
    ['fa 1 mes', "d'aquí a 1 mes"],
    ['fa %s meses', "d'aquí a %s meses"],
    ['fa 1 anyo', "d'aquí a 1 anyo"],
    ['fa %s anyos', "d'aquí a %s anyos"],
  ][index] as [string, string];
}
