/*
 Write a program that finds the length of the maximal increasing sequence in an array of N integers.
 Input:
 On the first line you will receive the number N.
 On the next N lines the numbers of the array will be given.
 Output:
 Print the length of the maximal increasing sequence.
 */

function increasingSequence(arr) {
    var i,
        start = 0,
        len = 0,
        maxLen = 0,
        result = [],
        bestResult = [];

    arr = String(arr);
    arr = arr.split('\n');
    arr = arr.slice(1);

    for (i in arr) {
        arr[i] = +arr[i];
        if (arr[i] > arr[start]) {
            result.push(arr[i]);
            start = i;
            len += 1;
        }
        else {
            result = [arr[i]];
            start = i;
            len = 1;
        }
        if (len > maxLen) {
            maxLen = len;
            if (result.length === maxLen) {
                bestResult = result;
            }
        }
    }
    return bestResult.length;
}

//Example:
console.log(increasingSequence(['8\n7\n3\n2\n3\n4\n2\n2\n4']));
console.log(increasingSequence(['1\n1']));
