// Sort 3 real values in descending order.
// Use nested if statements.
// Note: Don’t use arrays and the built-in sorting functionality.

function sortNumbers(a, b, c) {
    if (a >= b) {
        if (b >= c) {
            return a + " " + b + " " + c;
        }
        else {
            if (a < c) {
                return c + " " + a + " " + b;
            }
            return a + " " + c + " " + b;
        }
    }
    else if (b >= a) {
        if (a >= c) {
            return b + " " + a + " " + c;
        }
        else {
            if (b < c) {
                return c + " " + b + " " + a;
            }
            return b + " " + c + " " + a;
        }
    }
}

// Examples:
console.log(sortNumbers(5, 1, 2));
console.log(sortNumbers(-2, -2, 1));
console.log(sortNumbers(-2, 4, 3));
console.log(sortNumbers(0, -2.5, 5));
console.log(sortNumbers(-1.1, -0.5, -0.1));
console.log(sortNumbers(10, 20, 30));
console.log(sortNumbers(1, 1, 1));

