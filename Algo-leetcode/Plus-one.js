//You are given a large integer represented as an integer array digits,
//  where each digits[i] is the ith digit of the integer.
//  The digits are ordered from most significant to least significant in left-to-right order. 
//  The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.
// Example 1: Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

// Example 2: Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].

const digits = [1, 2, 4];

var plusOne = function(digits){
  //loop over each element from right to left//
  for(let i = digits.length - 1; i >= 0; i--){
    //check condition if number is 9 or not//
   //if it is 9 increment digit.
    if(digits[i] !== 9) {
     digits[i]++;
     return digits;
     //if it is 9 change digit equal to 0
    }else{
      digits[i] = 0;
    }
  }
 //add 1 to the first of array if all digits of arrayis 9//
 //[9,9,9] => [0,0,0] 
 digits.unshift(1);
 //after the above code is run it returns [1,0,0,0]//
 return digits;
}

plusOne(digits); // => output = [1, 2, 5]
plusOne([9,9,9]) // => output = [1, 0, 0,,0]

//time complexity = O(n) linear
