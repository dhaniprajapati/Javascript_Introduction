const readline = require('readline-sync');

//take user input
const a = parseInt(readline.question("Enter first number: "));
const b = parseInt(readline.question("Enter second number: "));
const c = parseInt(readline.question("Enter third number: "));

const operation1= a+b*c;
console.log("Result1: "+operation1);
const operation2= a%b+c;
console.log("Result2: "+operation2);
const operation3= c+a/b;
console.log("Result3: "+operation3);
const operation4= a*b+c;
console.log("Result4: "+operation4);

let maxValue= operation1;
let minValue= operation1;
if(operation2<minValue){
    minValue= operation2;
}
if(operation2>maxValue){
    maxValue= operation2;
}
if(operation3<minValue){
    minValue= operation3;
}
if(operation3>maxValue){
    maxValue= operation3;
}
if(operation4<minValue){
    minValue= operation4;
}
if(operation4>maxValue){
    maxValue= operation4;
}
console.log("After comparing the results-");
//print minimum and maximum value
console.log("Minimum Number: "+minValue);
console.log("Maximum Number: "+maxValue);