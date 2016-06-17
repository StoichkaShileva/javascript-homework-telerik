/*
 Write a javascript function that prints a matrix like in the examples below by a given integer N. Use two nested loops.
 The input array will contain a single number as string, the integer N.
 Example: N = 4
 1 2 3 4
 2 3 4 5
 3 4 5 6
 4 5 6 7
 */
function matrix(N) {
    N = +N;
    var row,
        col,
        result = '';
    for (row = 1; row <= N; row += 1) {
        for (col = row; col <= row + N - 1; col += 1) {
            result += col + ' ';
        }
        result += '\n';
    }
    console.log(result);
}
// Examples:
matrix('2');
console.log('------------------');
matrix('3');
console.log('------------------');
matrix('4');
