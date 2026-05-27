export default function(number: number, index: number): [string, string] {
  return [
    ['agora mesmo', 'agora'],
    ['há %s segundos', 'em %s segundos'],
    ['há 1 minuto', 'em 1 minuto'],
    ['há %s minutos', 'em %s minutos'],
    ['há 1 hora', 'em 1 hora'],
    ['há %s horas', 'em %s horas'],
    ['há 1 dia', 'em 1 dia'],
    ['há %s dias', 'em %s dias'],
    ['há 1 semana', 'em 1 semana'],
    ['há %s semanas', 'em %s semanas'],
    ['há 1 mês', 'em 1 mês'],
    ['há %s meses', 'em %s meses'],
    ['há 1 ano', 'em 1 ano'],
    ['há %s anos', 'em %s anos'],
  ][index] as [string, string];
}
