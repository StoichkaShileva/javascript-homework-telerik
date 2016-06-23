/*
 Sorting an array means to arrange its elements in increasing order.
 Write a script to sort an array.
 Use the selection sort algorithm: Find the smallest element, move it at the first position,
 find the smallest from the rest, move it at the second position, etc.
 Input: On the first line you will receive the number N.
 On the next N lines the numbers of the array will be given.
 Output: Print the sorted array. Each number should be on a new line.
 */

function sortArray(arr) {
    var N,
        i,
        j,
        min,
        temp;

    arr = String(arr);
    arr = arr.split('\n');
    N = +arr[0];
    arr = arr.slice(1);

    for (i = 0; i < N; i += 1) {
        arr[i] = +arr[i];
        min = i;
        for (j = (i + 1); j < N; j += 1) {
            arr[j] = +arr[j];
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min != i) {
            temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr.join('\n');
}

console.log(sortArray(['6\n3\n4\n1\n5\n2\n6']));
console.log('------');
console.log(sortArray(['10\n36\n10\n1\n34\n28\n38\n31\n27\n30\n20']));

