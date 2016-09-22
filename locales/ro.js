var timeTypes = [
    ['o secundă',   '%s secunde',   '%s de secunde'],   // Seconds
    ['un minut',    '%s minute',    '%s de minute' ],   // Minutes
    ['o oră',       '%s ore',       '%s de ore'],       // Hours
    ['o zi',        '%s zile',      '%s de zile'],      // Days
    ['o săptămână', '%s săptămâni', '%s de săptămâni'], // Weeks
    ['o lună',      '%s luni',      '%s de luni'],      // Months
    ['un an',       '%s ani',       '%s de ani']        // Years
];

function formatTime(type, number) {
    if (number == 1)
        return timeTypes[type][0];
    else if (number % 100 >= 20 || (number >= 100 && number % 100 === 0))
        return timeTypes[type][2];
    else
        return timeTypes[type][1];
}

module.exports = function(number, index) {
    if (index === 0) {
      return ['chiar acum', 'imediat'];
    }

    var timeType;
    switch (index) {
        case 1: timeType = 1; break;
        case 2:
        case 3: timeType = 2; break;
        case 4:
        case 5: timeType = 3; break;
        case 6:
        case 7: timeType = 4; break;
        case 8:
        case 9: timeType = 5; break;
        case 10:
        case 11: timeType = 6; break;
        case 12:
        case 13: timeType = 7; break;
    }

    var timeStr = formatTime(timeType, number);
    return ['acum ' + timeStr, 'peste ' + timeStr];
}