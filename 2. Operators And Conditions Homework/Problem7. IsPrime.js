// Write an expression that checks if given positive integer number n (n ≤ 100) is prime.

var numberIsPrime = false;
function isPrime(number) {
    if (number <= 1) {
        return numberIsPrime;
    }
    else if (number === 2) {
        numberIsPrime = true;
    }
    else {
        for (var i = 2; i < number; i++) {
            if (!(number % i)) {    // !(number % i) is the same as (number % i === 0)
                numberIsPrime = false;
                return numberIsPrime;
            }
            else {
                numberIsPrime = true;
            }
        }
    }
    return numberIsPrime;
}

// Examples:
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(9));
console.log(isPrime(37));
console.log(isPrime(97));
console.log(isPrime(51));
console.log(isPrime(-3));
console.log(isPrime(0));