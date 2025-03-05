const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function getPalindrome(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}

rl.question("Enter a number: ", function(num) {
    num = parseInt(num);
    if (isNaN(num)) {
        console.log("Invalid input. Please enter a valid number.");
    } else {
        if (isPrime(num)) {
            console.log(num + " is a prime number.");
            let palindrome = getPalindrome(num);
            console.log("The palindrome of " + num + " is " + palindrome);
            if (isPrime(palindrome)) {
                console.log(palindrome + " is also a prime number.");
            } else {
                console.log(palindrome + " is not a prime number.");
            }
        } else {
            console.log(num + " is not a prime number.");
        }
    }
    rl.close();
});
