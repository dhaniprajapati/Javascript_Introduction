function isPalindrome(num) {
    let originalNum = num.toString();
    let reversedNum = originalNum.split('').reverse().join('');
    return originalNum === reversedNum;
}

function checkPalindromes(num1, num2) {
    let isNum1Palindrome = isPalindrome(num1);
    let isNum2Palindrome = isPalindrome(num2);

    return {
        num1: isNum1Palindrome,
        num2: isNum2Palindrome
    };
}

let num1 = 121;
let num2 = 1321;
let result = checkPalindromes(num1, num2);
console.log(num1 + " is a palindrome: " + result.num1);
console.log(num2 + " is a palindrome: " + result.num2);
