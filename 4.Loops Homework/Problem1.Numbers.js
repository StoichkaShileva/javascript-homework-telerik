/*
 Implement a javascript function that accepts an array with a single element - positive integer N as string
 and prints all the numbers from 1 to N inclusive, on a single line, separated by a whitespace.
 */

function printNumbers(N) {
    var result = '';
    for (var i = 1; i <= N; i += 1)
    {
        result += i + ' ';
    }
    console.log(result);

}
// Examples:
printNumbers(['5']);
printNumbers(['17']);
printNumbers(['56']);