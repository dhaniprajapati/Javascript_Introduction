const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", function(num) {
    num = parseInt(num);
    if (isNaN(num) || num < 2) {
        console.log("Enter an integer greater than 1.");
    } else {
        console.log("Prime factors: ");
        
        while (num % 2 === 0) {
            console.log(2);
            num /= 2;
        }

        for (let i = 3; i * i <= num; i += 2) {
            while (num % i === 0) {
                console.log(i);
                num /= i;
            }
        }

        if (num > 1) {
            console.log(num);
        }
    }
})