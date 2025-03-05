const readline= require('readline');
const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
rl.question("Enter a number:", function(number){
    number= parseInt(number)
    if(number==1){
        console.log("Unit");
    }
    else if(number==10){
        console.log("Tens");
    }
    else if(number==100){
        console.log("Hundreds");
    }
    else if(number==1000){
        console.log("Thousands");
    }
    else if(number==10000){
        console.log("Ten-thousands");
    }
    else{
        console.log("Invalid input.");
    }
    rl.close();
})