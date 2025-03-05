const readline= require('readline');
const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
rl.question("Enter a number(1-7):", function(number){
    number= parseInt(number)
    if(number==1){
        console.log("Monday");
    }
    else if(number==2){
        console.log("Tuesday");
    }
    else if(number==3){
        console.log("Wednesday");
    }
    else if(number==4){
        console.log("Thursday");
    }
    else if(number==5){
        console.log("Friday");
    }
    else if(number==6){
        console.log("Saturday");
    }
    else if(number==7){
        console.log("Sunday");
    }
    else{
        console.log("Invalid input. Please input number within given range.");
    }
    rl.close();
})