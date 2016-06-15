/* Implement a javascript function that does the following:
 Accepts an array containing a single integer number as string.
 Stores in a variable if the number can be divided by 7 and 5 without remainder.
 Prints on the console "true NUMBER" if the number is divisible without remainder by 7 and 5.
 Otherwise prints "false NUMBER". In place of NUMBER print the value of the input number.
 */

function divBy7And5(number) {
    number = +number;  // cast string to number
    if (!(number % 5) && !(number % 7)) {   // !(number % 5) is the same as (number % 5 === 0)
        return 'true ' + number;
    }
    else {
        return 'false ' + number;
    }
}

// Examples:
console.log(divBy7And5(['3']));
console.log(divBy7And5(['0']));
console.log(divBy7And5(['5']));
console.log(divBy7And5(['7']));
console.log(divBy7And5(['35']));
console.log(divBy7And5(['140']));
