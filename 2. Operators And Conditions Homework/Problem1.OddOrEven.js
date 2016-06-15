// Implement a javascript function that uses an expression to check if given integer is odd or even,
// and prints "even NUMBER" or "odd NUMBER", where you should print the input number's value instead of NUMBER.
// The input will consist of an array containing a single integer value as a string.

function oddOrEven(number) {
    number = +number;  // cast string to number
    if (number % 2) {      // by default the condition equals to 1, i.e. true
        return 'odd ' + number;
    }
    else {
        return 'even ' + number;
    }
}

// Examples:
console.log(oddOrEven(['3']));
console.log(oddOrEven(['2']));
console.log(oddOrEven(['-2']));
console.log(oddOrEven(['-1']));
console.log(oddOrEven(['0']));