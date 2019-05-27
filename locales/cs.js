module.exports = function(number, index) {
    return [
      ['právě teď', 'právě teď'],
      ['před %s vteřinami', 'za %s vteřin'],
      ['před minutou', 'za minutu'],
      ['před %s minutami', 'za %s minut'],
      ['před hodinou', 'za hodinu'],
      ['před %s hodinami', 'za %s hodin'],
      ['včera', 'zítra'],
      ['před %s dny', 'za %s dny'],
      ['minulý týden', 'příští týden'],
      ['před %s týdny', 'za %s týdnů'],
      ['minulý měsíc', 'přístí měsíc'],
      ['před %s měsíci', 'za %s měsíců'],
      ['vloni', 'přístí rok'],
      ['před %s lety', 'za %s let']
    ][index];
  }
