/*
 Write a program that reads an array of numbers and prints how many of them are larger than their neighbours.
 Input:
 On the first line you will receive the number N - the size of the array.
 On the second line you will receive N numbers separated by spaces - the array.
 Output:
 Print how many numbers in the array are larger than their neighbours.
 */

function largerThanNeighbours(args) {
    var i,
        arr,
        len,
        count = 0;

    args = String(args).split('\n');
    len = +args[0];
    arr = String(args[1]);
    arr = arr.split(' ');

    for (i = 0; i < len; i += 1) {
        arr[i] = +arr[i];
            if ((arr[i] > arr[i - 1]) && (arr[i] > arr[i + 1])) {
                count += 1;
            }
    }
   return count;
}

// Example:
console.log(largerThanNeighbours([ '6\n-26 -25 -28 31 2 27' ]));
