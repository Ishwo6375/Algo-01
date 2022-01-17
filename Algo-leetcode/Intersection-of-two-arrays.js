// Given two integer arrays nums1 and nums2, 
// return an array of their intersection. Each element in the result must 
// appear as many times as it shows in both 
// arrays and you may return the result in any order.

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

//solving problem using set//
//create a first set//
//iterate over every elements in 1st array//
//add all elements to set//
//create another set for second array//
//iterate over each elements in second array//
//check condition if first array has the current element of second array or not//
//if it has the same element add it to second set//
//return second set using Array.from method//


const nums1 = [4,9,5];
const nums2 = [9,4,9,8,4];

var intersection = function(nums1, nums2) {
    //assign a variable and set it to new Set()//
    let originalSet = new Set();
    //iterate over each elements in nums1//
    for(let num of nums1){
        //This result the array of nums1 without dublicate value//
        originalSet.add(num);
    }

    //assign a variable and set it to  another set for nums2//
    let intersectionSet = new Set();

    //iterate over each elements in nums2//
    for(let num of nums2){
    //check if the current num of nums2 is in original set or not//
    if(originalSet.has(num)) {
    //if it is in original set//
    //add the number to the second set intersectionSet//
    intersectionSet.add(num);
    }
   }
//return the array of the second set intersection set//
   return Array.from(intersectionSet);
}

intersection(nums1, nums2); //output => [9, 4]
