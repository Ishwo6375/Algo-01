// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.
// Example 1:
// Input: nums = [2,2,1]
// Output: 1
// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:
// Input: nums = [1]
// Output: 1

//sub-optimal approach (using HashSet)
//time complexity = O(N)
//Space complexity = O(N)

// Pseudo code//
//solving problem using set//
//create a new set// 
//iterate over each elements//
//check conditon if the element we are on is in set or not//
//if it is already in the set delete that element//
//if it is not in the set add it to set 
//return 1st index of set using Array.from method//
const nums = [1, 2, 2, 1, 3, 3, 4];

var singleNumber = function (nums) {
  //create a new set//
  let set = new Set();

  //iterate over every element in the array//
  for (let num of nums) {
    //num represent the number we currently on//
    //check condition if set has that current number or not//
    if (set.has(num)) {
      //if set has the number delete it from set
      set.delete(num);
    } else {
      //if set has no current  number add it to set//
      set.add(num);
    }
  }
  return Array.from(set)[0];
};

singleNumber(nums); //=> output = 4

//Optimal solution//
//time complexity = O(N) //linear//
//Space complexity = O(1) constant//




let singleNumber = function (nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i];
  }
  return result;
};

singleNumber(nums); //=> output = 4
