//Given an integer array nums sorted in non-decreasing order,
//  remove the duplicates in-place such that each unique element appears only 
//  once. The relative order of the elements should be kept the same.

//time complexity = O(n)
//space complexity = O(1)

var removeDuplicates = function(nums){
 //edge case check//
 if(!nums.length) return 0;

let i = 0;
for(let j = 1; j < nums.length; j++){
  //check conditions//
  if(nums[i] !== nums[j]) {
    i++;
    nums[i] = nums[j]
  }
}
return i + 1 
};