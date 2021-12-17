// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
//  and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function,
//  but instead be stored inside the array nums1. To accommodate this, 
//  nums1 has a length of m + n, where the first m elements denote the elements 
//  that should be merged, and the last n elements are set to 0 and should be ignored.
//  nums2 has a length of n.

// Example 1: Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

// Example 2: Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].

//Pseudo code//
//create a variable first and second to get the last element of each array//
//set it value to last index of each array//
//iterate over both elements backward// // right to left//
////finish the iteration immediatly if the length of second array is less than 0//
//compare between 1st array and second array which one is greater//
//if element fo first array is greater then element of second array//
//set that element to last elemlent of  first array//
//move to the next element from right to left//
//if the element of second array is greater then element on first array//
//set that element to last element of first array//
//move to the next element from right to left//
//return the array

const nums1 = [1, 2, 3, 0,0,0] 
const m = 3
const nums2 = [2,5,6] 
const n = 3

var merge = function(nums1, m, nums2, n){
  //get a reference to last initialize value to each array//
  let first = m - 1;
  let second = n - 1;

  //iterate over both arrays backword//
  for(let i = m + n - 1; i >= 0; i--){
    //finish iteration if second array is less than 0//
    if(second < 0){
      break;
    }
   //compare between 1st array and second array which one is greater//
//if the element of 1st array is greater than 2nd array
    if(nums1[first] > nums2[second]){
      //if  last element of 1st array is greater than 2nd array//
        nums1[i] = nums1[first];
        first--;
    } else{
      //if the element of 1st array is less than element of 2nd array//
       //assign nums1[i] = nums2[second]
      nums1[i] = nums2[second];
      second--;
    }
  }
  return nums1;
}


