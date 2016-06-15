/*
 Implement a javascript function that by given coordinates of a point x and y
 and using an expression checks if given point (x, y) is inside a circle K({0, 0}, 2).
 The program should then print "yes DISTANCE" if the point is inside the circle or "no DISTANCE" if the point is outside the circle.
 In place of DISTANCE print the distance from the beginning of the coordinate system - (0, 0) - to the given point.
 The distance should always be printed with 2-digits of precision after the floating point.
 */

function pointInCircle(args) {
    var x, y,
        distance,
        circleCenter = 0,
        circleRadius = 2;
    x = Number(args[0]);
    y = Number(args[1]);
    distance = Math.sqrt((x - circleCenter) * (x - circleCenter) + (y - circleCenter) * (y - circleCenter)).toFixed(2);
    if (distance <= circleRadius) {
        return 'yes ' + distance;
    }
    return 'no ' + distance;
}

// Examples:
console.log(pointInCircle(['-2', '0']));
console.log(pointInCircle(['-1', '2']));
console.log(pointInCircle(['1.5', '-1']));
console.log(pointInCircle(['1.5', '-1.5']));
console.log(pointInCircle(['100', '-30']));
console.log(pointInCircle(['0', '0']));
console.log(pointInCircle(['0.2', '-0.8']));
console.log(pointInCircle(['0.9', '-1.93']));
console.log(pointInCircle(['1', '1.655']));
console.log(pointInCircle(['0', '1']));

