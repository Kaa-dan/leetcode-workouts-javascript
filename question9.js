// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.


// this is my code 

// var isPalindrome = function (x) {
//   let value = x.toString();
//   for (let i = 0; i < value.length / 2; i++) {
//     if (value[i] !== value[length - 1 - i]) return false;
//   }
//   return true;
// };

// let num = 233;

// isPalindrome(num);


// this is the optimised solution for numbers 
var isPalindrome = function(x) {
    if (x < 0) {
        return false; 
    }
    let n=x;
    let rev=0;
    while(n!=0){
        let rem=n%10;
        rev=rev*10+rem;
        n=Math.floor(n/10);
    }
    return rev==x;
};
