const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter a number: ", function(number) {
    number = parseInt(number);

    switch (number) {
        case 1:
            console.log("Unit");
            break;
        case 10:
            console.log("Tens");
            break;
        case 100:
            console.log("Hundreds");
            break;
        case 1000:
            console.log("Thousands");
            break;
        case 10000:
            console.log("Ten-thousands");
            break;
        default:
            console.log("Invalid input.");
    }

    rl.close();
});
