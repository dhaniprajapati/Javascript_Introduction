const readline= require('readline')
const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
rl.question("Enter a number(0-9): ", function(number){
    number= parseInt(number)
    let word;
    switch(number){
        case 0:
            word="Zero";
            break;
        case 1:
            word="one";
            break;
        case 2:
            word="two";
            break;
        case 3:
            word="three";
            break;
        case 4:
            word="four";
            break;
        case 5:
            word="five";
            break;
        case 6:
            word="six";
            break;
        case 7:
            word="seven";
            break;
        case 8:
            word="eight";
            break;
        case 9:
            word="nine";
            break;
        default:
            console.log("Invalid input.")
    }
    console.log(word);
    rl.close();
})