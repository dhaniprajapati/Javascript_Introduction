let stake = 100;
let goal = 200;
let bets = 0;
let wins = 0;

while (stake > 0 && stake < goal) {
    bets++;
    let outcome = Math.random() < 0.5; 

    if (outcome) {
        stake++;
        wins++;
    } else {
        stake--;
    }
}

console.log("Final amount: Rs " + stake);
console.log("Total bets made: " + bets);
console.log("Total wins: " + wins);

if (stake >= goal) {
    console.log("The gambler reached the goal!");
} else {
    console.log("The gambler went broke.");
}
