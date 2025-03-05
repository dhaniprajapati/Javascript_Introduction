function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
//diceMap to store the dice number and the number of times it reached
let diceMap = new Map();
let diceNumber;
//count to keep track of number of times the dice is rolled
let count = 0;
//max and min to keep track of the maximum and minimum times a number is reached
let max = 0;
let min = 10;
let maxNumber;
let minNumber;
//loop through 10 times
while (count < 10) {
  diceNumber = rollDice();
  //check if the dice number is already present in the map
  if (diceMap.has(diceNumber)) {
    //set the dice number and the number of times it reached
    diceMap.set(diceNumber, diceMap.get(diceNumber) + 1);
  } else {
    diceMap.set(diceNumber, 1);
  }
  //check if the dice number reached maximum or minimum times
  if (diceMap.get(diceNumber) > max) {
    max = diceMap.get(diceNumber);
    maxNumber = diceNumber;
  }
  if (diceMap.get(diceNumber) < min) {
    min = diceMap.get(diceNumber);
    minNumber = diceNumber;
  }
  //increment the count
  count++;
}
//print results
console.log(diceMap);
console.log("Number that reached maximum times: " + maxNumber);
console.log("Number that reached minimum times: " + minNumber);

