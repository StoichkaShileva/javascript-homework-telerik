/*
 Write a script that finds the greatest of given 5 variables.
 Use nested if statements.
 The input will consist of an array containing five values represented as strings
  */

function biggestOfFive(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2],
        d = +args[3],
        e = +args[4];
    function biggestOfThree(a, b, c) {
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
    function biggestOfTwo(d, e) {
        if (d > e) {
            return d;
        }
        return e;
    }
    var firstPretender = biggestOfThree(a, b, c),
        secondPretender = biggestOfTwo(d, e);
    return biggestOfTwo(firstPretender, secondPretender);
}

// Examples:
console.log(biggestOfFive(['5', '2', '2', '4', '1']));
console.log(biggestOfFive(['-2', '-22', '1', '0', '0']));
console.log(biggestOfFive(['-2', '4', '3', '2', '0']));
console.log(biggestOfFive(['0', '-2.5', '0', '5', '5']));
console.log(biggestOfFive(['-3', '-0.5', '-1.1', '-2', '-0.1']));