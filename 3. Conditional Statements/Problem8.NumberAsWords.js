// Write a script that converts a number in the range [0…999] to words, corresponding to its English pronunciation.
// The input will consist of an array containing the number as a string.

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function digitAsWord(number) {
    var digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
        teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    number = +number;

    if (number >= 0 && number <= 9) {
        return capitalize(digits[number]);
    }
    else if (number >= 10 && number <= 19) {
        return capitalize(teens[number - 10]);

    }
    else if (number >= 20 && number <= 99) {
        var firstDig = Math.floor(number / 10),
            secondDig = number % 10;
        return capitalize(tens[firstDig] + ' ' + digits[secondDig]);

    }
    else if (number >= 100 && number <= 999) {
        firstDig = Math.floor(number / 100);
        secondDig = Math.floor((number % 100) / 10);
        var thirdDig = number % 10;
        if (secondDig > 1) {
            if (thirdDig > 0) {
                return capitalize(digits[firstDig] + ' ' + 'hundred' + ' ' + 'and' + ' ' + tens[secondDig] + ' ' + digits[thirdDig]);
            }
            return capitalize(digits[firstDig] + ' ' + 'hundred' + ' ' + 'and' + ' ' + tens[secondDig]);
        }
        else if (secondDig == 0) {
            if (thirdDig == 0) {
                return capitalize(digits[firstDig] + ' ' + 'hundred');
            }
            return capitalize(digits[firstDig] + ' ' + 'hundred' + ' ' + 'and' + ' ' + digits[thirdDig]);
        }
        else {
            return capitalize(digits[firstDig] + ' ' + 'hundred' + ' ' + 'and' + ' ' + teens[thirdDig]);
        }
    }
}

// Examples:
console.log(digitAsWord(['0']));
console.log(digitAsWord(['9']));
console.log(digitAsWord(['10']));
console.log(digitAsWord(['12']));
console.log(digitAsWord(['19']));
console.log(digitAsWord(['25']));
console.log(digitAsWord(['98']));
console.log(digitAsWord(['204']));
console.log(digitAsWord(['273']));
console.log(digitAsWord(['400']));
console.log(digitAsWord(['501']));
console.log(digitAsWord(['510']));
console.log(digitAsWord(['617']));
console.log(digitAsWord(['620']));
console.log(digitAsWord(['711']));
console.log(digitAsWord(['999']));
