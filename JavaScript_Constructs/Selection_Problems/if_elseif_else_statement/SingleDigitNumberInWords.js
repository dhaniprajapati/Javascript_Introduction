const readline= require('readline');
const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
rl.question("Enter a number(0-9):", function(number){
    number= parseInt(number)
    if(number==0){
        console.log("Zero");
    }
    else if(number==1){
        console.log("One");
    }
    else if(number==2){
        console.log("Two");
    }
    else if(number==3){
        console.log("Three");
    }
    else if(number==4){
        console.log("Four");
    }
    else if(number==5){
        console.log("Five");
    }
    else if(number==6){
        console.log("Six");
    }
    else if(number==7){
        console.log("Seven");
    }
    else if(number==8){
        console.log("Eight");
    }
    else if(number==9){
        console.log("Nine");
    }
    else{
        console.log("Invalid input. Please input number within given range.");
    }
    rl.close();
})