// Write a boolean expression for finding the bit #3 (counting from 0) of a given integer.
// The bits are counted from right to left, starting from bit #0.
// The result of the expression should be either 1 or 0.

function createBinaryString(nMask) {  // Creates 32-bit binary string
    for (var nFlag = 0, nShifted = nMask, sMask = ""; nFlag < 32;
         nFlag++, sMask += String(nShifted >>> 31), nShifted <<= 1);
    return sMask;
}
function thirdDigit(decim) {
    decim = createBinaryString(decim);
    decim = decim.slice(-4);
    if (decim.startsWith('0')) {
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
