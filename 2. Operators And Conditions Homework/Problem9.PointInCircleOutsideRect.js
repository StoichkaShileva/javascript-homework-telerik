// Write an expression that checks for given point P(x, y) if it is within the circle K( (1,1), 3)
// and out of the rectangle R(top=1, left=-1, width=6, height=2)

function pointInCircleOutRect(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);
    if (((x - circleCenter) + (y - circleCenter) <= circleRadius) // checks if point is inside circle
        && ((y > rectTop || y < rectBottom) || (x > rectRight || x < rectLeft))) // checks if point is outside rectangle
    {
        return 'yes';
    }
    return 'no';
}

// dimensions of rectangle
var rectTop = 1,
    rectLeft = -1,
    rectHeight = 2,
    rectWidth = 6,
    rectBottom = (rectTop - rectHeight),
    rectRight = (rectWidth - rectLeft);

// circle
var circleCenter = 1,
    circleRadius = 3;

// Examples:
console.log(pointInCircleOutRect(1, 4));
console.log(pointInCircleOutRect(3, 2));
console.log(pointInCircleOutRect(0, 1));
console.log(pointInCircleOutRect(4, 1));
console.log(pointInCircleOutRect(2, 0));
console.log(pointInCircleOutRect(4, 0));
console.log(pointInCircleOutRect(2.5, 1.5));
console.log(pointInCircleOutRect(3.5, 1.5));
console.log(pointInCircleOutRect(-100, -100));
