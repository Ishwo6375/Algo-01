// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution,
//  and you may not use the same element twice.
// You can return the answer in any order.

const nums = [2, 7, 11, 15];
const target = 9;

function twoSum(nums, target){
//using map//
const comp = new Map();
//assigng nums length to vaiable len//
const len = nums.length;
//iterate through each element//
for(let i = 0; i < len; i++){
  //check condition if comp exist//
if(comp[nums[i]] >= 0){
  return [comp[nums[i]], i]
}
//subtracting target with each num and saving index as a value//
  comp[target - nums[i]] = i;
}
return [];

}

twoSum(nums, target)