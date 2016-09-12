module.exports = function(number, index) {
  return [
    ['néhány másodperc', 'néhány másodperce'],
    ['%s másodperc', '%s másodperce'],
    ['1 perc', '1 perce'],
    ['%s perc', '%s perce'],
    ['1 óra', '1 órája'],
    ['%s óra', '%s órája'],
    ['1 nap', '1 napja'],
    ['%s nap', '%s napja'],
    ['1 hét', '1 hete'],
    ['%s hét', '%s hete'],
    ['1 hónap', '1 hónapja'],
    ['%s hónap', '%s hónapja'],
    ['1 év', '1 éve'],
    ['%s év', '%s éve']
  ][index];
}
