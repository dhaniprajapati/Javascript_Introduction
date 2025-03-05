const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("Choose a conversion:");
console.log("1. Feet to Inch");
console.log("2. Feet to Meter");
console.log("3. Inch to Feet");
console.log("4. Meter to Feet");

rl.question("Enter your Data (1-4): ", function(inputData) {
    inputData = parseInt(inputData);

    rl.question("Enter the value to convert: ", function(value) {
        value = parseFloat(value);
        let result;

        switch (inputData) {
            case 1:
                // 1 foot = 12 inches
                result = value * 12; 
                console.log("RESULT: "+result+ " inches.");
                break;
            case 2:
                // 1 foot = 0.3048 meters
                result = value * 0.3048; 
                console.log( "RESULT: "+result+ "meters.");
                break;
            case 3:
                // 1 inch = 1/12 feet
                result = value / 12; 
                console.log("RESULT: "+result+ " feet.");
                break;
            case 4:
                 // 1 meter = 1/0.3048 feet
                result = value / 0.3048;
                console.log("RESULT: "+result+ " feet.");
                break;
            default:
                console.log("Invalid inputData. Please select a valid option (1-4).");
        }

        rl.close();
    });
});
