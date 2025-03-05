const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", function(number) {
    number = parseInt(number);
    
    if (isNaN(number) || number < 0) {
        console.log("Please enter a non-negative integer as the argument.");
        rl.close();
        return;
    }

    console.log("Powers of 2 that are less than or equal to 2^" + n + " till 256:");

    for (let i = 0; i <= n && Math.pow(2, i) <= 256; i++) {
        console.log("2^" + i + " = " + Math.pow(2, i));
    }
    rl.close();
});
