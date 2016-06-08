// Write a script that finds the biggest of three numbers.
// Use nested if statements.

function biggest(a, b, c) {
    if (a >= b) {
        if (b >= c) {
            return a;
        }
        else {
            if (a < c) {
                return c;
            }
            return a;
        }
    }
    else if (b >= a) {
        if (a >= c) {
            return b;
        }
        else {
            if (b < c) {
                return c;
            }
            return b;
        }
    }
}

// Examples:
console.log(biggest(5, 2, 2));
console.log(biggest(-2, -2, 1));
console.log(biggest(-2, 4, 3));
console.log(biggest(0, -2.5, 5));
console.log(biggest(-0.1, -0.5, -1.1));
console.log(biggest(2, 2, 1));