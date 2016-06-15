// Implement a javascript function that takes an array with a single element -
// an integer N as parameter and prints true if the third digit of N is 7,
// or "false THIRD_DIGIT", where you should print the third digits of N.

function thirdDigit(N) {
    N = String(N);
    while (N.length < 3) {
        N = '0' + N;
    }
    N = N.slice(-3);
    var thirdDigit = N.substring(0, 1);
    if( thirdDigit === '7'){
        return true;
    }
    return false + ' ' + thirdDigit;
}

// Examples:
console.log(thirdDigit(['5']));
console.log(thirdDigit(['701']));
console.log(thirdDigit(['1732']));
console.log(thirdDigit(['9703']));
console.log(thirdDigit(['877']));
console.log(thirdDigit(['777877']));
console.log(thirdDigit(['9999799']));
