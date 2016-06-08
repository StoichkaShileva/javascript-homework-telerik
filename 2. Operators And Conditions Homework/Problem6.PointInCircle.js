// Write an expression that checks if given point P(x, y) is within a circle K({0,0}, 5).
// {0,0} is the centre and 5 is the radius

function pointInCircle(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);
    if ((x - circleCenter) + (y - circleCenter) <= circleRadius) {
        return true;
    }
    return false;
}
var circleCenter = 0,
    circleRadius = 5;

// Examples:
console.log(pointInCircle(0, 1));
console.log(pointInCircle(-5, 0));
console.log(pointInCircle(-4, 5));
console.log(pointInCircle(1.5, -3));
console.log(pointInCircle(-4, -3.5));
console.log(pointInCircle(100, -30));
console.log(pointInCircle(0, 0));
console.log(pointInCircle(0.2, -0.8));
console.log(pointInCircle(0.9, -4.93));
console.log(pointInCircle(2, 2.655));

