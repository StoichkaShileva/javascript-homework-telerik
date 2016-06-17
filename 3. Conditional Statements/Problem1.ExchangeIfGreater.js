/*
 Write an if statement that takes two double variables a and b
 and exchanges their values if the first one is greater than the second.
 As a result print the values a and b, separated by a space.
 The input will consist of an array containing two values - a and b represented as strings.
*/

function exchange(args) {
    var a = +args[0],
        b = +args[1];
    if (a > b) {
        var temp = b;
        b = a;
        a = temp;
    }
    return a + " " + b;

}

// Examples:
console.log(exchange(['5', '2']));
console.log(exchange(['3', '4']));
console.log(exchange(['5.5', '4.5']));