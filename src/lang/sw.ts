export default function(number: number, index: number): [string, string] {
  return [
    ['sasa hivi', 'hivi sasa'],
    ['sekunde %s zilizopita', 'katika sekunde %s'],
    ['dakika 1 iliopita', 'katika dakika 1'],
    ['dakika %s zilizopita', 'katika dakika %s'],
    ['saa 1 iliyopita', 'ndani ya saa 1'],
    ['saa %s zilizopita', 'ndani ya saa %s'],
    ['siku 1 iliyopita', 'katika siku 1'],
    ['siku %s zilizopita', 'ndani ya siku %s'],
    ['wiki 1 iliyopita', 'katika wiki 1'],
    ['wiki %s zilizopita', 'katika wiki %s'],
    ['mwezi 1 uliopita', 'katika mwezi'],
    ['miezi %s iliyopita', 'katika miezi %s'],
    ['mwaka 1 uliopita', 'katika mwaka 1'],
    ['miaka %s iliyopita', 'katika miaka %s']
  ][index] as [string, string];
}
