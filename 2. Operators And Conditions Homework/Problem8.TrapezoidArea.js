// Implement a javascript function that calculates trapezoid's area by given sides a and b and height h.
// The input will consist of an array with exactly 3 numbers as elements: a, b and h, all as strings.
// Output the area with exactly 7-digit precision after the floating point.

function trapArea(args) {
    var a = Number(args[0]),
        b = Number(args[1]),
        h = Number(args[2]);
    return ((a + b) * h / 2).toFixed(7);
}

// Examples:
console.log(trapArea(['5', '7', '12']));
console.log(trapArea(['2', '1', '33']));
console.log(trapArea(['8.5', '4.3', '2.7']));
console.log(trapArea(['100', '200', '300']));
console.log(trapArea(['0.222', '0.333', '0.555']));
