// Implement a javascript function that accepts an array containing an integer N as string
// (which will always be less than 100 or equal) and uses an expression to check if given N is prime
// (i.e. it is divisible without remainder only to itself and 1).
// Note: You should check if the number is positive.

function isPrime(N) {
    N = Number(N[0]);
    var numberIsPrime = true;
    if (N <= 1) {
        numberIsPrime = false;
    }
    else {
        for (var i = 2; i <= Math.sqrt(N); i++) {
            if (!(N % i)) {    // !(N % i) is the same as (N % i === 0)
                numberIsPrime = false;
            }
        }
    }
    return numberIsPrime;
}

// Examples:
console.log(isPrime(['-3']));
console.log(isPrime(['0']));
console.log(isPrime(['1']));
console.log(isPrime(['2']));
console.log(isPrime(['3']));
console.log(isPrime(['4']));
console.log(isPrime(['9']));
console.log(isPrime(['23']));
console.log(isPrime(['51']));
console.log(isPrime(['97']));
