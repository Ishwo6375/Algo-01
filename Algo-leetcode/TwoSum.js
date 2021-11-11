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