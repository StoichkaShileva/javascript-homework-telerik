/*
 Using loops implement a javascript function that converts a hex number to its decimal representation.
 The input will consists of a single line containing a single hexadecimal number as string.
 The output should consist of a single line - the decimal representation of the number as string.
 */

function hexToDecimal(number) {
    number = String(number);
    var i,
        j,
        len,
        index,
        result = 0,
        hexKey = '0123456789ABCDEF';

    len = number.length;
    for (i = 0, j = len - 1; i < len; i += 1, j -= 1) {
       index = hexKey.indexOf(number[i]);
        result += index * Math.pow(16, j);
    }
    return result;
}

//Examples:
console.log(hexToDecimal('FE'));
console.log(hexToDecimal('1AE3'));
console.log(hexToDecimal('4ED528CBB4'));

