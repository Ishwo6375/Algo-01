// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
// Example 1:
// Input: nums = [3,2,3]
// Output: 3
// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2const nums = [3, 2, 3];


var majorityElement = function(nums) {
  //edge case//
  //if the array has only one element return that element as majority element//
  if (nums.length === 1) {
    return nums[0];
  }

  //assign a variable and set it equals to half of array length//
  let half = nums.length / 2;

  //create a new Map//
  let majorityCount = new Map();
  //loop over the array//
  for (let num of nums) {
    // check if the element we are on the map or not//
    //if it is not on the map//
    if (!majorityCount.has(num)) {
      //set it to the map with the count of 1//
      majorityCount.set(num, 1);
      //if it is already on the map set it count to 1 more than before//
    }else{
    majorityCount.set(num, majorityCount.get(num) + 1);
    }
 //if the number in the map has seen more than half of the length of array//
 //that number is the majority number//
    if (majorityCount.get(num) > half) {
      return num;
    }
  }
  //if none of the element is majority number//
  return -1;
}

majorityElement(nums) //output => 3