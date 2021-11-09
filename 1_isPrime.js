//A number is a prime number when it is divisible only by one and itself.
//If a number is not divisible to any number starting 2 to the SQRT of itself, then that number is a prime number


function isPrime(num) {
    for ( let i=2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }

    }
    return true;

} 

console.log(isPrime(11));