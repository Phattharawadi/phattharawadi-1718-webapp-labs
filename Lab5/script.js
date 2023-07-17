let input;
let primes = [];

do {
  input = prompt("Enter a positive integer:");
} while (!Number.isInteger(parseFloat(input)) || parseFloat(input) <= 0);

// Function to check if a number is prime
function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function displayPrime() {
  for (let num = 2; num <= input; num++) {
    if (isPrime(num)) {
      primes.push(num);
    }
  }
}

displayPrime();
alert("For n: " + input + " prime numbers are: " + primes.join(", "));
