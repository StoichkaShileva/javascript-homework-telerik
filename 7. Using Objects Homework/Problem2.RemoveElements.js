/*
 Write a function that removes all elements with a given value.
 You will be given an array of strings. Remove all occurrences of the first element in the array.
 Input:
 The input will consist of an array of strings.
 Output:
 The output should be the array with some elements removed. Each string should be on a separate line.
 */

function removeElements(arr) {
    var i,
        element = arr[0],
        index = arr.indexOf(element);
    while (index >= 0) {
        arr.splice(index, 1);
        index = arr.indexOf(element);
    }
    return arr.join('\n');
}

// Examples:
console.log(removeElements(['1', '2', '1', '4', '1', '3', '4', '1', '111', '3', '2', '1', '1']));
console.log('-------------');
console.log(removeElements(['1', '2', '3', '2', '1', '2', '3', '2']));
console.log('-------------');
console.log(removeElements([
    '_h/_',
    '^54F#',
    'V',
    '^54F#',
    'Z285',
    'kv?tc`',
    '^54F#',
    '_h/_',
    'Z285',
    '_h/_',
    'kv?tc`',
    'Z285',
    '^54F#',
    'Z285',
    'Z285',
    '_h/_',
    '^54F#',
    'kv?tc`',
    'kv?tc`',
    'Z285'
]));


