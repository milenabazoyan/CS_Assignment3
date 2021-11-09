function isPrime(num) {
    for ( let i=2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }

    }
    return true;
} 

function Primes(num1, num2) {
    let primenumbers = []
    let start = num1
    let end = num2
    if (num1 > num2) {
        start = num2
        end = num1

    } else if (num1 === num2) { 
        return primenumbers
    }

    for (let i = start; i<=end; i++ ) {
        if (isPrime(i))
        primenumbers.push(i)
    }
    return primenumbers

}

console.log(Primes(8,47));