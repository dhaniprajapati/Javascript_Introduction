const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the lower bound of the range: ", function(lowerBound)  {
    rl.question("Enter the upper bound of the range: ", function(upperBound) {
        lowerBound = parseInt(lowerBound);
        upperBound = parseInt(upperBound);

        if (isNaN(lowerBound) || isNaN(upperBound) || lowerBound > upperBound) {
            console.log("Invalid range. Please enter valid numbers.");
            rl.close();
            return;
        }

        console.log("Prime numbers between "+lowerBound+" and "+upperBound+" are: ");

        for (let num = lowerBound; num <= upperBound; num++) {
            if (num <= 1) continue;

            let isPrime = true;
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                console.log(num);
            }
        }

        rl.close();
    });
});
