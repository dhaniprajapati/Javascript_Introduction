let randomNumbersArray=new Array();
for(let i=0;i<10;i++){
    let randomNumbers= Math.floor(Math.random()*900)+100;
    randomNumbersArray.push(randomNumbers);
}
//sort the array
randomNumbersArray.sort();
console.log("Sorted Array: "+randomNumbersArray);
//find the second largest and second smallest number
let largest=randomNumbersArray[0];
let smallest=randomNumbersArray[0];
let secondLargest=randomNumbersArray[0];
let secondSmallest=randomNumbersArray[0];
for(let i=0;i<randomNumbersArray.length;i++){
    if(randomNumbersArray[i]>largest){
        secondLargest=largest;
        largest=randomNumbersArray[i];
    }else if(randomNumbersArray[i]>secondLargest && randomNumbersArray[i]!=largest){
        secondLargest=randomNumbersArray[i];
    }
    if(randomNumbersArray[i]<smallest){
        secondSmallest=smallest;
        smallest=randomNumbersArray[i];
    }else if(randomNumbersArray[i]<secondSmallest && randomNumbersArray[i]!=smallest){
        secondSmallest=randomNumbersArray[i];
    }
}
console.log("Second Largest: "+secondLargest);
console.log("Second Smallest: "+secondSmallest);
