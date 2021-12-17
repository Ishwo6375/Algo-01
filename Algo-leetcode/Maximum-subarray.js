//Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum 
// and return its sum.A subarray is a contiguous part of an array.
// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Example 2:
// Input: nums = [1]
// Output: 1

//psuedo code//
//declare two variable maxCurrent and maxGlobal//
//set both variable equal to 1st index of array//
//loop over each element in the array//
//get maximum number between maxCurrent + element we are on//
//check condition if maxCurrent is greater than maxGlobal//
//if maxGlobal is greater set maxGlobal equal to maxCurrent//
//return maxGlobal at the end//

const nums = [-1, 2, 3, -5, 4]

//make two variable curr and global string//
//set curr string equal to global string//
//curr =>  -1   2  5  0  4
//global => -1  2  5  5  5

var maxSubArray = function(nums) {
  //declare two variable maxCurrent and maxGlobal//
  //set both variable equal to 1st value of array//
   //one to keep track of current max sub array//
  //another to keep track of global max sub array//
  let maxCurrent = nums[0];
  let maxGlobal = nums[0];

  //loop over each element//
  for(let i = 1; i < nums.length; i++){
    maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
 //if maxCurrent is greater than maxGlobal//
 //set maxGlobal equal to maxCUrrent//
    if(maxCurrent > maxGlobal) {
      maxGlobal = maxCurrent;
    }
  }
  return maxGlobal;
}

maxSubArray(nums); // => [2, 3] output = 5

//time complexity = O(n)