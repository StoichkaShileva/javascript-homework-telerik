/*
 Implement a javascript function that accepts an array of floating-point numbers as strings
 and returns the minimal, the maximal number, the sum and the average of all numbers
 (displayed with 2 digits after the decimal point).
 All numbers will be valid floating-point numbers that will be in the range [-10000, 10000].
 You output must always consist of exactly 4 lines - the minimal element on the first line,
 the maximal on the second, the sum on the third and the average on the fourth.
 */

function findMinMax(numbers) {
    var min = 10000,
        max = -10000,
        index,
        average,
        count = 0,
        sum = 0;
    for (index in numbers) {
        numbers[index] = +numbers[index];
        if (numbers[index] > max) {
            max = numbers[index];
        }
        if (numbers[index] < min) {
            min = numbers[index];
        }
        sum += numbers[index];
        count += 1;
    }
    min = min.toFixed(2);
    max = max.toFixed(2);
    sum = sum.toFixed(2);
    average = (sum / count).toFixed(2);
    console.log('min=' + min);
    console.log('max=' + max);
    console.log('sum=' + sum);
    console.log('avg=' + average);
}

// Examples
findMinMax(['3', '2', '5', '1']);
console.log('------------------');
findMinMax(['2', '-1', '4', '8', '-3']);
console.log('------------------');
findMinMax(['100', '-503', '126', '650']);
console.log('------------------');
findMinMax(['-2']);