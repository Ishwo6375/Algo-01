
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// Example 1:
// Input: nums = [1,2,3,1]
// Output: true
// Example 2:
// Input: nums = [1,2,3,4]
// Output: false
// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true


//Psudedo Code///
//solving problem using set// //set can only have unique value//
//create a new set//
//iterate over each elements in the array//
//check if current element we are on is in set or not//
//if its not in set add it to set//
//if the current element we are on already in set return true//
//if there is  no any dublicates found return false 

//time complexity = O(N) linear
//space complexity = O(1) constant

const nums = [1,2,3,1];


var containDuplicate = function(nums){
  //create a new set ///
  let numbers = new Set();
//loop over each elements// using for of instead of for loop//
  for(let num of nums){
    //check condition if set has the current number or not//
    //if the current number is not on set ADD IT TO SET//
    if(!numbers.has(num)){
      numbers.add(num);
    
    }else{
      //if its already in the set that means there is a dublicate //
      //hence it returns true//
      return true;
    }
  }
  //if None dublicate found return false //
  return false;
}

containDuplicate(nums);