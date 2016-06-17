/*
 Write a script that reads the coefficients a, b and c of a quadratic equation ax2 + bx + c = 0
 and solves it (prints its real roots).
 Note: Quadratic equations may have 0, 1 or 2 real roots.
 The input will consist of an array containing three values - a, b and c represented as strings.
 The output should be a single line containing the real roots. Print numbers with two digits of precision after the floating point.
 If there are two roots then x1 < x2.
 */

function quadraticEquation(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2],
        discriminant = Math.pow(b, 2) - 4 * a * c,
        x1 = ((-b + Math.sqrt(discriminant)) / (2 * a)).toFixed(2),
        x2 = ((-b - Math.sqrt(discriminant)) / (2 * a)).toFixed(2);

    if (discriminant > 0) {
        if ((x1-x2) > (x2-x1)) {
            var temp = x2;
            x2 = x1;
            x1 = temp;
        }
        return 'x1=' + x1 + ';' + ' ' + 'x2=' + x2;

    }
    else if (discriminant < 0) {
        return 'no real roots';
    }
    else {
        return 'x1=x2=' + x1;
    }
}

// Examples:
console.log(quadraticEquation(['2', '5', '-3']));
console.log(quadraticEquation(['-1', '3', '0']));
console.log(quadraticEquation(['-0.5', '4', '-8']));
console.log(quadraticEquation(['5', '2', '8']));
console.log(quadraticEquation(['0.2', '9.572', '0.2']));
