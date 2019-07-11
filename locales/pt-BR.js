module.exports = function(number, index) {
  return [
    ['agora pouco', 'agora mesmo'],
    ['há %s segundos', 'em %s segundos'],
    ['há 1 minuto', 'em 1 minuto'],
    ['há %s minutos', 'em %s minutos'],
    ['há 1 hora', 'em 1 hora'],
    ['há %s horas', 'em %s horas'],
    ['ontem', 'amanhã'],
    ['há %s dias', 'em %s dias'],
    ['semana passada', 'semana que vem'],
    ['há %s semanas', 'em %s semanas'],
    ['mês passado', 'mês que vem'],
    ['há %s meses', 'em %s meses'],
    ['ano passado', 'em 1 ano'],
    ['há %s anos', 'em %s anos']
  ][index];
}
