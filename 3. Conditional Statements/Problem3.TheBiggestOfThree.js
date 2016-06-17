/*
 Write a script that finds the biggest of three numbers.
 Use nested if statements.
 The input will consist of an array containing three values represented as strings.
 The output should be a single line containing a number.
  */

function biggest(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2];
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
console.log(biggest(['5','2', '2']));
console.log(biggest(['-2', '-2', '1']));
console.log(biggest(['-2', '4', '3']));
console.log(biggest(['0', '-2.5', '5']));
console.log(biggest(['-0.1', '-0.5', '-1.1']));
console.log(biggest(['2', '2', '1']));