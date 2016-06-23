/* Write a script that compares two char arrays lexicographically.
 Input:
 On the first line you will receive the first char array as a string
 On the second line you will receive the second char array as a string
 Output:
 Print < if the first array is lexicographically smaller
 Print > if the second array is lexicographically smaller
 Print = if the arrays are equal
 */

function compareStrings(str) {
    str = String(str);
    str = str.split('\n');

    var str1 = str[0],
        str2 = str[1];

    if (str1 > str2) {
        return '>';
    }
    else if (str1 < str2) {
        return '<';
    }
    else {
        return '=';
    }
}

console.log(compareStrings(['hello\nhalo']));
console.log(compareStrings(['food\nfood']));
