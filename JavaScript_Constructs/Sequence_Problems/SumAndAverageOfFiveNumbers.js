//initialize sum as 0
let sum=0;
//run loop to generate 5 random 2-digit numbers
for(let i=0;i<5;i++){
    let randomNumbers= Math.floor(Math.random()*99);
    //print random generated numbers
    console.log("Generated random numbers: "+randomNumbers);
    //sum the numbers
    sum=sum+randomNumbers;
}
//average of 5 numbers generated
let average= sum/5;
//print the sum and average
console.log("Sum of numbers: "+sum);
console.log("Average of numbers: "+average);