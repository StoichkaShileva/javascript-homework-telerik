// Write a boolean expression for finding the bit #3 (counting from 0) of a given integer.
// The bits are counted from right to left, starting from bit #0.
// The result of the expression should be either 1 or 0.

function zeroPaddedBin(dec) {  // Creates 32-bit binary string
    var bin = dec.toString(2);
    while (bin.length < 32) {
        bin = '0' + bin;
    }
    return bin;
}

function thirdDigit(dec) {
    dec = zeroPaddedBin(dec);
    dec = dec.slice(-4);
    if (dec.startsWith('0')) {
        return '0';
    }
    return '1';
}

// Examples:
console.log(thirdDigit(5));
console.log(thirdDigit(9));
console.log(thirdDigit(0));
console.log(thirdDigit(15));
console.log(thirdDigit(5343));
console.log(thirdDigit(62241));
