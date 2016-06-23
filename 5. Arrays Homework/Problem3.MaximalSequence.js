/* Write a program that finds the length of the maximal sequence of equal elements in an array of N integers.
 On the first line you will receive the number N.
 On the next N lines the numbers of the array will be given.
 Print the length of the maximal sequence.
 */

function maximalSequence(arr) {
    var i,
        start = 0,
        len = 0,
        maxLen = 0,
        result = [],
        bestResult = [];

    arr = String(arr);
    arr = arr.split('\n');
    arr = arr.slice(1, arr.length);

    for (i in arr) {
        arr[i] = +arr[i];
        if (arr[i] === arr[start]) {
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
console.log(maximalSequence(['10\n2\n1\n1\n2\n3\n3\n2\n2\n2\n1']));



