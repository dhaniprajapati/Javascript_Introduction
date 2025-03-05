//function to find repeated digits in 2 digit numbers
function findRepeatedDigits() {
    let repeatedDigits = [];
    //loop through 0 to 100
    for (let i = 0; i <= 100; i++) {
        //convert the number to string
        let str = i.toString();
        //check if the number has repeated digits
        if (str.length === 2 && str[0] === str[1]) {
            repeatedDigits.push(i);
        }
    }
    return repeatedDigits;
}
//find the repeated digits
let repeatedDigitsArray = findRepeatedDigits();
console.log(repeatedDigitsArray);
