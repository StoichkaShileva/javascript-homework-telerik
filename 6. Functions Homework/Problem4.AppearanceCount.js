/*
 Write a method that counts how many times a given number appears in a given array.
 Input:
 On the first line you will receive a number N - the size of the array
 On the second line you will receive N numbers separated by spaces - the numbers in the array
 On the third line you will receive a number X
 Output:
 Print how many times the number X appears in the array
 */

function appCount(args) {
    var i,
        count,
        arr,
        X;

    args = String(args).split('\n');
    X = args[2];
    arr = String(args[1]);
    arr = arr.split(' ');

    count = 0;
    for (i in arr) {
        if (arr[i] === X) {
            count += 1;
        }
    }
    return count;
}

// Example:
console.log(appCount([ '8\n28 6 21 6 -7856 73 73 -56\n73' ]));