const readline = require('readline-sync');

//take user input
const month = parseInt(readline.question("Enter month (1-12): "));
const day = parseInt(readline.question("Enter day (1-31): "));

if (isNaN(month) || isNaN(day) || month < 1 || month > 12 || day < 1 || day > 31) {
    console.log("Invalid input.");
} else {
    let isValid = false;

    //Check if the date is between March 20 and June 20
    if ((month == 3 && day >= 20) || (month > 3 && month < 6) || (month === 6 && day <= 20)) {
        isValid = true;
    }

    console.log(isValid);
}
