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


//solution using hashmap//

const nums = [2, 4, 5, 6, 9,7];
const target = 15

function twoSum(nums, target){
  //create a new empty hashmap//

  const comp = {};
  //itereate over each elements//
  for(let i = 0; i < nums.length; i++){
    let value = nums[i];
    let complimentaryPair = target - value;
    //check the conditions//
    if(comp[complimentaryPair] !== undefined){
      return[comp[complimentaryPair], i]
    }else {
     comp[value] = i;
    }
  }
}

twoSum(nums, target);

//time complexity = o(N^2) => O(n)
//space complexity = O(1)