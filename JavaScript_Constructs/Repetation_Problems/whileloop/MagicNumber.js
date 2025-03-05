const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lowerBound = 1;
let upperBound = 100;

console.log("Think of a number between 1 and 100, and I will guess it.");

function guessNumber() {
    if (lowerBound > upperBound) {
        console.log("There seems to be a mistake. Please make sure you're following the instructions correctly.");
        rl.close();
        return;
    }

    let mid = Math.floor((lowerBound + upperBound) / 2);

    rl.question("Is your number less than, greater than, or equal to"+mid+"? (type 'less', 'greater', or 'equal'): ", function(answer) {
        if (answer === 'less') {
            upperBound = mid - 1;
            guessNumber();
        } else if (answer === 'greater') {
            lowerBound = mid + 1;
            guessNumber();
        } else if (answer === 'equal') {
            console.log("Yay! I found your number. It is"+mid);
            rl.close();
        } else {
            console.log("Please respond with 'less', 'greater', or 'equal'.");
            guessNumber();
        }
    });
}
guessNumber();
