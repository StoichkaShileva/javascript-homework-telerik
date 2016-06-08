// Write an expression that checks for given integer if its third digit (right-to-left) is 7.

function thirdDigit(digit) {
    digit = String(digit);
    digit = digit.slice(-3);
    if( digit.startsWith('7')){
        return true;
    }
    return false;
}

// Examples:
console.log(thirdDigit(5));
console.log(thirdDigit(701));
console.log(thirdDigit(1732));
console.log(thirdDigit(9703));
console.log(thirdDigit(877));
console.log(thirdDigit(777877));
console.log(thirdDigit(9999799));
