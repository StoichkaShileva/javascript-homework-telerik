/*
 Write a program that allocates array of N integers, initializes each element by its index multiplied by 5.
 Print the obtained array on the console.
 Each number should be on a new line.
 */

function increaseArray(N) {
    var i,
        arr = [];
    while (N > 0) {
        arr.push(N);
        N -= 1;
    }
    for (i in arr) {
        arr[i] = i * 5;
        console.log(arr[i]);
    }
}

// Examples:
increaseArray(5);
console.log('---------');
increaseArray(20);
