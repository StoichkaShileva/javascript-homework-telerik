/* Write a method that returns the index of the first element in array that is larger
 than its neighbours, or -1, if there is no such element.
 Input:
 On the first line you will receive the number N - the size of the array.
 On the second line you will receive N numbers separated by spaces - the array.
 Output:
 Print the index of the first element that is larger than its neighbours or -1 if none are. */

function firstLarger(args) {
    var i,
        len,
        arr,
        index;

    args = String(args).split('\n');
    len = +args[0];
    arr = String(args[1]);
    arr = arr.split(' ');

    for (i = 1; i < len - 1; i += 1) {
        arr[i] = +arr[i];
        if ((arr[i] > arr[i - 1]) && (arr[i] > arr[i + 1])) {
            index = i;
            break;
        }
    }
    if (index) {
        return index;
    }
    else {
        return -1;
    }
}

// Example:
console.log(firstLarger([ '6\n-26 -25 -28 31 2 27' ]));