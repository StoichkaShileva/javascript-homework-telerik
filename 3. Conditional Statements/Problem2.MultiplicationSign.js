// Write a script that shows the sign (+, - or 0) of the product of three real numbers, without calculating it.
// Use a sequence of if operators.

function productSign(a, b, c) {
    if (a === 0 || b === 0 || c === 0) {
        return "0";
    }
    else {
        if (a > 0 && b > 0 && c > 0) {
            return "+";
        }
        else if (a < 0 && b < 0 && c < 0){
            return "-";
        }
        else if (a < 0) {
            if (b > 0 && c > 0) {
                return "-";
            }
            else {
                return "+";
            }
        }
        else if( b < 0)        {
            if(a > 0 && c > 0){
                return "-";
            }
            else {
                return "+";
            }
        }
        else if( c < 0)        {
            if(a > 0 && b > 0){
                return "-";
            }
            else {
                return "+";
            }
        }
    }
}

// Examples:
console.log(productSign(5, 2, 2));
console.log(productSign(-2, -2, 1));
console.log(productSign(-2, 4, 3));
console.log(productSign(0, -2.5, 4));
console.log(productSign(-1, -0.5, -5.1));
