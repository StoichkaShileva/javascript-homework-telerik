// Write a script that reads the coefficients a, b and c of a quadratic equation ax2 + bx + c = 0 and solves it
// (Calculates and prints its real roots).
// Note: Quadratic equations may have 0, 1 or 2 real roots.

function quadraticEquation(a, b, c) {
    var discriminant = Math.pow(b, 2) - 4 * a * c;
    var x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    var x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    if (discriminant > 0) {
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
console.log(quadraticEquation(2, 5, -3));
console.log(quadraticEquation(-1, 3, 0));
console.log(quadraticEquation(-0.5, 4, -8));
console.log(quadraticEquation(5, 2, 8));
