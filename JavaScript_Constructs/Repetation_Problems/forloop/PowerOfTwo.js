const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("Enter a number (n): ", function(n) {
    n = parseInt(n);

    if (isNaN(n) || n < 0) {
        console.log("Please enter a valid non-negative integer.");
    } else {
        console.log("Table of powers of 2 up to 10:");
        for (let i = 0; i <= n; i++) {
            let power= Math.pow(2, i);
            console.log("2^"+i+ " = "+power);
        }
    }  
    rl.close();
});
