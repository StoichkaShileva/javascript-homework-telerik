/*
 Write a program that finds the most frequent number in an array of N elements.
 Input:
 On the first line you will receive the number N.
 On the next N lines the numbers of the array will be given.
 Output:
 Print the most frequent number and how many time it is repeated.
 Output should be REPEATING_NUMBER (REPEATED_TIMES times).
 */

function mostFrequent(arr) {
    var i,
        start = 0,
        count = 0,
        maxCount = 0,
        result = [],
        bestResult;

    arr = String(arr);
    arr = arr.split('\n');
    arr = arr.slice(1);

    arr = arr.sort(function (a, b) {
        return a - b
    });

    for (i in arr) {
        if (arr[i] === arr[start]) {
            result.push(arr[i]);
            count += 1;
            start = i;
        }
        else {
            result = [arr[i]];
            count = 1;
            start = i;
        }
        if (count > maxCount) {
            maxCount = count;
            if (result.length === maxCount) {
                bestResult = result[0];
            }
        }
    }
    return bestResult + ' (' + maxCount + ' times)';
}

//Example:
console.log(mostFrequent(['13\n4\n1\n1\n4\n2\n3\n4\n4\n1\n2\n4\n9\n3']));