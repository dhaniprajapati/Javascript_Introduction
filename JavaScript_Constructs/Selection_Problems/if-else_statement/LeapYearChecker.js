const readline = require("readline");

//interface for reading user input from the console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a 4-digit year: ", function(year) {
    //convert the string to an integer
    year = parseInt(year);
    
    //check if the input is a 4-digit number
    if (isNaN(year) || year < 1000 || year > 9999) {
        console.log("Enter a valid 4-digit year.");
    } else if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + " is a Leap Year.");
    } else {
        console.log(year + " is not a Leap Year.");
    }
    //close the readline interface
    rl.close();
});
