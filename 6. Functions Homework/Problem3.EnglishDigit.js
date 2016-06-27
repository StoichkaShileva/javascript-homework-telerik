// Write a function that returns the last digit of given integer as an English word.


function digitAsWord(n) {
    var i,
        word,
        lastDigit,
        digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    lastDigit = n % 10;
    for (i in digits) {
        word = digits[lastDigit];
    }
    console.log(word);
}

// Examples:
digitAsWord(512);
digitAsWord(12309);
