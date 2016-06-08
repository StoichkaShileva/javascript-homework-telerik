// Write an expression that calculates trapezoid's area by given sides a and b and height h.

function trapArea(a, b, h) {
    return (a + b) * h / 2;
}

// Examples:
console.log(trapArea(5, 7, 12));
console.log(trapArea(2, 1, 33));
console.log(trapArea(8.5, 4.3, 2.7));
console.log(trapArea(100, 200, 300));
console.log(trapArea(0.222, 0.333, 0.555).toFixed(7));
