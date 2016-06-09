// Write a boolean expression that checks for given integer if it can be divided (without remainder) by 7 and 5 in the same time.

function divBy7And5(number) {
    if (!(number % 5) && !(number % 7)) {   // !(number % 5) is the same as (number % 5 !== 0)
        return true;
    }
    else {
        return false;
    }
}

// Examples:
console.log(divBy7And5(3));
console.log(divBy7And5(0));
console.log(divBy7And5(5));
console.log(divBy7And5(7));
console.log(divBy7And5(35));
console.log(divBy7And5(140));
