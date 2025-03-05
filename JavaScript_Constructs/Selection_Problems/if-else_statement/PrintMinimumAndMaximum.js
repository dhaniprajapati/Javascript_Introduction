//generate random 5-digit numbers
let num1=Math.floor(Math.random()*900)+100;
let num2=Math.floor(Math.random()*900)+100;
let num3=Math.floor(Math.random()*900)+100;
let num4=Math.floor(Math.random()*900)+100;
let num5=Math.floor(Math.random()*900)+100;
//print generated numbers
console.log("Generated numbers:", num1, num2, num3, num4, num5);
// assign num1 as minimum and maximum value
let minValue= num1;
let maxValue= num1;
//if statement to fing maximum and minimum value
if(num2<minValue){
    minValue= num2;
}
if(num2>maxValue){
    maxValue= num2;
}
if(num3<minValue){
    minValue= num3;
}
if(num3>maxValue){
    maxValue= num3;
}
if(num4<minValue){
    minValue= num4;
}
if(num4>maxValue){
    maxValue= num4;
}
if(num5<minValue){
    minValue= num5;
}
if(num5>maxValue){
    maxValue= num5;
}
//print minimum and maximum number
console.log("Minimum Number: "+minValue);
console.log("Maximum Number: "+maxValue);