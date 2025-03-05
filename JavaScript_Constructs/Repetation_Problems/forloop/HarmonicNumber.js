const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a positive integer (n): ", function(n) {
    n = parseInt(n);

    if (isNaN(n) || n <= 0) {
        console.log("Please enter a valid positive integer.");
        rl.close();
        return;
    }
    let harmonicNumber = 0;
    for (let i = 1; i <= n; i++) {
        harmonicNumber += 1 / i;
    }
    console.log("The nth harmonic number is:" +harmonicNumber);

    rl.close();
});
