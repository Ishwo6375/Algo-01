// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.
// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:
// Input: nums = [0]
// Output: [0]

//time complexity = O(N);
//space complexity = O(1);

var moveZeroes = function(nums){
  //assign a variable anchor and set it to 0//
  let anchor = 0;
  
  //loop over each elements in the array//
  for(let explore = 0; explore < nums.length; explore++){
    if(nums[explore] !== 0){
      let temp = nums[anchor];
      nums[anchor] = nums[explore];
      nums[explore] = temp;
      anchor++;
    }
  }
   return nums;
  
};

moveZeroes([0,0,6,0,12,1])//=>[ 6, 12, 1, 0, 0, 0 ]
console.log(moveZeroes([1,2,0,0,5,6,0,0,9])); //=> [ 1, 2, 5, 6, 9, 0, 0, 0, 0]

//Another solution//


const nums = [1,2,0,0,0,3,4,0,7,0,8]
var moveZeroes = function(nums) {
  //assign a variable index and set value equals to 0//
  let index = 0;

  //itereate over each elements //
  for (let i = 0; i < nums.length; i++) {
    //assign a variable num and set value to 1st index of array//
    const num = nums[i];

    //check condition if num is equal to 0 or not//
    if (num !== 0) {
      nums[index] = num;
      index++;
    }
  }

  for (let i = index; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;

}

moveZeroes(nums);

moveZeroes([0,0,6,0,12,1])//=>[ 6, 12, 1, 0, 0, 0 ]
console.log(moveZeroes([1,2,0,0,5,6,0,0,9])); //=> [ 1, 2, 5, 6, 9, 0, 0, 0, 0]


