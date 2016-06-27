/**
 Write a method GetMax() with two parameters that returns the larger of two integers.
 Write a program that reads 3 integers from the console and prints the largest of them using the method GetMax().
 */

function printLargest(args) {
    args = String(args);
    args = args.split(' ');

    var a = +args[0],
        b = +args[1],
        c = +args[2],
        larger;

    function GetMax(n, m) {
        var max;
        if (n > m) {
            max = n;
        }
        else {
            max = m;
        }
        return max;
    }

    larger = GetMax(a, b);
    console.log(GetMax(larger, c));
}

printLargest(['8 3 6']);
printLargest(['7 19 19']);
printLargest(['7 12 15']);