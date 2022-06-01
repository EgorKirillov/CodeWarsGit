// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
//
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)
//
// You can find some examples in the test fixtures.
//
// (0), '00:00:00', 'humanReadable(0)');
// strictEqual(humanReadable(59), '00:00:59', 'humanReadable(59)');
// strictEqual(humanReadable(60), '00:01:00', 'humanReadable(60)');
// strictEqual(humanReadable(90), '00:01:30', 'humanReadable(90)');
// strictEqual(humanReadable(3599), '00:59:59', 'humanReadable(3599)');
// strictEqual(humanReadable(3600), '01:00:00', 'humanReadable(3600)');


function humanReadable (seconds) {
    let hours = Math.floor(seconds/3600)
    let minutes = Math.floor((seconds-hours*3600)/60)
    let second = seconds-hours*3600-minutes*60
    return `${(hours<10)?"0"+hours:hours}:${(minutes<10)?"0"+minutes:minutes}:${(second<10)?"0"+second:second}`
}
//
//
 console.log(humanReadable(59)) // 00:00:59
 console.log(humanReadable(60)) // 00:01:00
 console.log(humanReadable(90)) // 00:01:30
 console.log(humanReadable(3599)) // 00:59:59
 console.log(humanReadable(3600)) // 01:00:00
