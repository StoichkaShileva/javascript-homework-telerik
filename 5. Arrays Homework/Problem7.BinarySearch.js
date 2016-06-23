/*
 Write a program that finds the index of given element X in a sorted array of N integers by using the Binary search algorithm.
 On the first line you will receive the number N.
 On the next N lines the numbers of the array will be given.
 On the last line you will receive the number X.
 Print the index where X is in the array:
 If there is more than one occurrence print the first one.
 If there are no occurrences print -1.
 */

function binarySearch(arr) {
    var X,
        i,
        leftIndex,
        rightIndex,
        middle;

    arr = String(arr);
    arr = arr.split('\n');
    X = +arr[arr.length - 1];
    arr = arr.slice(1, arr.length - 1);

    /* Sorting the array - if necessary:
     arr = arr.sort(function (a, b) {
     return a - b
     });
     */

    leftIndex = 0;
    rightIndex = arr.length - 1;
    while (X !== +arr[middle]) {
        if (leftIndex > rightIndex) {
            return -1;
        }
        else {
            middle = Math.floor((leftIndex + rightIndex) / 2);
            if (X < arr[middle]) {
                rightIndex = middle - 1;
            }
            else if (X > arr[middle]) {
                leftIndex = middle + 1;
            }
        }
    }
    return middle;
}

// Example:
console.log(binarySearch(['10\n1\n2\n4\n8\n16\n31\n32\n64\n77\n99\n32']));