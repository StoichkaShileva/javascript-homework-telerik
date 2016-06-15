/* Implement a javascript function that takes an argument array as a parameter
and calculates rectangle’s area and perimeter by given width and height.
The width and height will both be passed in the argument array.
Output a single line - the rectangle's area and perimeter, separated by a whitespace.
Print the area and perimeter values with exactly 2-digits precision after the floating point.
*/

function rectAreaParam(params) {
    var area,
        perimeter,
        width = Number(params[0]),
        height = Number(params[1]);
    area = width * height;
    perimeter = 2 * width + 2 * height;
    return area.toFixed(2) + ' ' + perimeter.toFixed(2);
}

// Examples:
console.log(rectAreaParam(['3', '4']));
console.log(rectAreaParam(['2.5', '3']));
console.log(rectAreaParam(['5', '5']));


