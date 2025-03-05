const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function convertTemperature() {
    rl.question("Enter 'C' to convert to Fahrenheit or 'F' to convert to Celsius: ", function(conversionType)  {
        conversionType = conversionType.toUpperCase();
        switch (conversionType) {
            case 'C':
                rl.question("Enter temperature in Celsius (0°C to 100°C): ",function(inputCelsius)  {
                    let degC = parseFloat(inputCelsius);
                    if (isNaN(degC) || degC < 0 || degC > 100) {
                        console.log("Invalid input. Please enter a temperature between 0°C and 100°C.");
                    } else {
                        let degF = (degC * 9 / 5) + 32;
                        console.log(degC + "°C is equal to " + degF.toFixed(2) + "°F");
                    }
                    rl.close();
                });
                break;
            case 'F':
                rl.question("Enter temperature in Fahrenheit (32°F to 212°F): ", function(inputFahrenheit)  {
                    let degF = parseFloat(inputFahrenheit);
                    if (isNaN(degF) || degF < 32 || degF > 212) {
                        console.log("Invalid input. Please enter a temperature between 32°F and 212°F.");
                    } else {
                        let degC = (degF - 32) * 5 / 9;
                        console.log(degF + "°F is equal to " + degC.toFixed(2) + "°C");
                    }
                    rl.close();
                });
                break;
            default:
                console.log("Invalid selection. Please enter 'C' or 'F'.");
                rl.close();
        }
    });
}

convertTemperature();
