//function to generate birth month of 50 persons
function generateBirthMonth() {
    //creating a map to store individuals with same birth month
    let birthMonths = new Map();
    //loop through 50 times
    for (let i = 1; i <= 50; i++) {
        let month = Math.floor(Math.random() * 12) + 1; 
        //check if the month is already present in the map
        if (!birthMonths.has(month)) {
            birthMonths.set(month, []);
        }
        //push the individual to the map
        birthMonths.get(month).push(`Person${i}`);
    }
    //print the individuals grouped by birth month
    console.log("Individuals grouped by birth month:");
    //loop through the map and print the individuals
    birthMonths.forEach((individuals, month) => {
        console.log("Month " + month + ": " + individuals);
    });
    return birthMonths;
}
generateBirthMonth();