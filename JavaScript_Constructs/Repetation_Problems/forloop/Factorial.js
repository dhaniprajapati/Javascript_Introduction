const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", function(num) {
    num = parseInt(num);
    if (isNaN(num) || num < 0) {
        console.log("Invalid input. Please enter a positive integer.");
        rl.close();
        return;
    }
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }

    console.log(`The factorial of ${num} is ${factorial}.`);
    rl.close();
});
