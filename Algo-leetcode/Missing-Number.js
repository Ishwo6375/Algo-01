// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
// Example 1:
// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
// Example 2:
// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
// Example 3:
// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

//time complexity = O(N) linear
//space complexity = O(1) constant space

const nums = [0,1,3]
var missingNumber = function(nums){
  //assign a variable sumIfNoneMissing that equals to nums length//
  let sumifNoneMissing = nums.length;
  //asssign a variable actual sum that equals to 0
  let actualSum = 0;
//iterate over every index of array//
  for(let i = 0; i < nums.length; i++){
    //add length of array + sum of indexes//
    sumifNoneMissing += i;
    //add sum of all numbers in the array to actualSum//
  actualSum += nums[i];
  }
  //subtrate 
  return sumifNoneMissing - actualSum;
}

missingNumber(nums);