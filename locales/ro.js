var timeTypes = [
    ['chiar acum',  'imediat'],
    ['o secundă',   '%s secunde',   '%s de secunde'],   // Seconds
    ['un minut',    '%s minute',    '%s de minute' ],   // Minutes
    ['o oră',       '%s ore',       '%s de ore'],       // Hours
    ['o zi',        '%s zile',      '%s de zile'],      // Days
    ['o săptămână', '%s săptămâni', '%s de săptămâni'], // Weeks
    ['o lună',      '%s luni',      '%s de luni'],      // Months
    ['un an',       '%s ani',       '%s de ani']        // Years
];

function formatTime(type, number) {
    if (number == 1) {
        return timeTypes[type][0];
    } else if (number % 100 >= 20 || (number >= 100 && number % 100 === 0)) {
        return timeTypes[type][2];
    } else {
        return timeTypes[type][1];
    }
}

module.exports = function(number, index) {
    if (index === 0) {
        return timeTypes[0];
    }

    var timeType = Math.ceil((index + 1) / 2);
    var timeStr = formatTime(timeType, number);

    return ['acum ' + timeStr, 'peste ' + timeStr];
}