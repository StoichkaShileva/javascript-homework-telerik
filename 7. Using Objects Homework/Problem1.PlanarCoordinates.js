/*
 Write functions for working with shapes in standard Planar coordinate system.
 Points are represented by coordinates (X,Y). Lines are represented by two points, marking their beginning and ending.
 You will be given three line segments. Calculate their length. Check if the line segments can form a triangle.
 Input:
 The input will consist of an array containing twelve values.
 Output:
 The output should consist of four lines. Three lines showing the length of each line segment. Use 2 digits of precision.
 Fourth line should be one of:  'Triangle can be built', 'Triangle can not be built'.
 */

function planarCoordSystem(args) {
    var line1,
        line2,
        line3;

    function buildLine(l, m, n, p) {
        var line = {
            begpoint: {x: l, y: m},
            endpoint: {x: n, y: p},
            len: function () {
                var a = this.endpoint.x - this.begpoint.x;
                var b = this.endpoint.y - this.begpoint.y;
                return Math.sqrt(a * a + b * b);
            }
        };
        return line;
    }

    line1 = buildLine(+args[0], +args[1], +args[2], +args[3]);
    line2 = buildLine(+args[4], +args[5], +args[6], +args[7]);
    line3 = buildLine(+args[8], +args[9], +args[10], +args[11]);

    function checkTriangle(a, b, c) {
        if ((a + b) > c && (a + c) > b && (b + c) > a) {
            return 'Triangle can be built';
        }
        return 'Triangle can not be built';
    }

    console.log(line1.len().toFixed(2));
    console.log(line2.len().toFixed(2));
    console.log(line3.len().toFixed(2));
    console.log(checkTriangle(line1.len(), line2.len(), line3.len()));
}

// Examples:
planarCoordSystem([
    '5', '6', '7', '8',
    '1', '2', '3', '4',
    '9', '10', '11', '12'
]);
console.log('-------------');
planarCoordSystem([
    '7', '7', '2', '2',
    '5', '6', '2', '2',
    '95', '-14.5', '0', '-0.123'
]);

