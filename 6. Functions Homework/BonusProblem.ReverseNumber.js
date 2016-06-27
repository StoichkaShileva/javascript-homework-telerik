// Write a function that reverses the digits of given decimal number.

var lastDigit,
    newNum;

function reverseNumber(arg) {
    var number = String(arg[0]);
    newNum = [];
    while (number) {
        lastDigit = number.slice(-1);
        newNum.push(lastDigit);
        number = number.slice(0, -1);
    }
    newNum = newNum.join('');
    return newNum;
}

//Examples:
console.log(reverseNumber(['256']));
console.log(reverseNumber(['123.45']));