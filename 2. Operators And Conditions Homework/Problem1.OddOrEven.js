// Write an expression that checks if given integer is odd or even.

function oddOrEven(number) {
    if (number % 2) {      // by default the condition equals to 1, i.e. true
        return true;
    }
    else {
        return false;
    }
}

// Examples:
console.log(oddOrEven(3));
console.log(oddOrEven(2));
console.log(oddOrEven(-2));
console.log(oddOrEven(-1));
console.log(oddOrEven(0));