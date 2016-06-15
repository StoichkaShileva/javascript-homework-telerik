/*
 Implement a javascript function that accepts an array with a pair of coordinates x and y
 and uses an expression to checks for given point (x, y) if it is within the circle K({1, 1}, 1.5)
 and out of the rectangle R(top=1, left=-1, width=6, height=2).
 Print inside circle if the point is inside the circle and outside circle if it's outside.
 Then print a single whitespace followed by inside rectangle if the point is inside the rectangle and outside rectangle otherwise.
*/

// circle
var circleCenter = 1,
    circleRadius = 1.5;

// dimensions of rectangle
var rectTop = 1,
    rectLeft = -1,
    rectHeight = 2,
    rectWidth = 6,
    rectBottom = (rectTop - rectHeight),
    rectRight = (rectWidth + rectLeft);

function pointInCircleOutRect(arr) {
    var result = '',
        x = Number(arr[0]),
        y = Number(arr[1]),
        distance = Math.sqrt((x - circleCenter) * (x - circleCenter) + (y - circleCenter) * (y - circleCenter));
    if (distance <= circleRadius) { // checks if point is inside circle
        result += 'inside circle ';
    }
    else {
        result += 'outside circle ';
    }
    if ((y <= rectTop && y >= rectBottom) && (x <= rectRight && x >= rectLeft)) { // checks if point is inside rectangle
        result += 'inside rectangle'
    }
    else {
        result += 'outside rectangle';
    }
    return result;
}

// Examples:

console.log(pointInCircleOutRect(['2.5', '2']));
console.log(pointInCircleOutRect(['0', '1']));
console.log(pointInCircleOutRect(['2.5', '1']));
console.log(pointInCircleOutRect(['1', '2']));
console.log(pointInCircleOutRect(['4', '0']));


