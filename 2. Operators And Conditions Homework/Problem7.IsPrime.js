// Write an expression that checks if given positive integer number n (n ≤ 100) is prime.

function isPrime(n) {
    var numberIsPrime = true;
    if (n <= 1) {
        numberIsPrime = false;
    }
    else {
        for (var i = 2; i <= Math.sqrt(n); i++) {
            if (!(n % i)) {    // !(n % i) is the same as (n % i === 0)
                numberIsPrime = false;
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