const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number to check if it's prime: ", function(num) {
    num = parseInt(num);
    let isPrime = true;

    if (isNaN(num) || num <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        console.log(num + " is a prime number.");
    } else {
        console.log(num + " is not a prime number.");
    }

    rl.close();
});
