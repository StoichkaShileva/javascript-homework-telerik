// Using bitwise operators, write a javascript function(that accepts a single array with arguments as a parameter)
// that uses an expression to find the value of the bit at index 3 of an unsigned integer read from the console.
// The bits are counted from right to left, starting from bit 0.
// The result of the expression should be either 1 or 0. Print it on the console.

function thirdBit(dec) {
    var bin,
        bit;
    dec = Number(dec[0]);
    bin = dec.toString(2);
    while (bin.length < 32) {
        bin = '0' + bin;
    }
    bin = bin.slice(-4);
    bit = bin.substring(0, 1);
    if (bit === '0') {
        return '0';
    }
    return '1';
}

// Examples:
console.log(thirdBit(['5']));
console.log(thirdBit(['9']));
console.log(thirdBit(['0']));
console.log(thirdBit(['15']));
console.log(thirdBit(['1024']));
console.log(thirdBit(['5343']));
console.log(thirdBit(['62241']));
