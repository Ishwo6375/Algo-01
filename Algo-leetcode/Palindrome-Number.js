// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as 
// forward. For example, 121 is palindrome while 123 is not.
//Example 1:            
// Input: x = 121
// Output: true
//  Example 2:
// Input: x = -121
 // Output: false
// Explanation: From left to right, it reads -121. From right to
//  left, it becomes 121-. Therefore it is not a palindrome.

var isPalindrome = function(num) {
    
let reversed = num.toString().split('').reverse().join('')
return(num.toString() === reversed)
    
};

//Another solution//

const x = 121
var isPalindrome = function(x){
  //edge case//
  if(x < 0){
    return false;
  }

  return x === reversedInteger(x)
}

var reversedInteger = function(x){
  let reversed = 0;

  while(x > 0){
    reversed = (reversed * 10) + (x % 10);
    x = Math.floor(x / 10)
  }

  return reversed;
}

isPalindrome(x) //output => true

 

