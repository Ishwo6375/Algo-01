// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
// Example 1:
// Input: s = "leetcode"
// Output: 0
// Example 2:
// Input: s = "loveleetcode"
// Output: 2
// Example 3:
// Input: s = "aabb"
// Output: -1

var firstUniqueChar = function(s) {
  //create a map that holds character with its frequency//
  let frequencies = new Map();
  let result = -1;


  for(let char of s){
    //if map doesnot have the character add it to map and set frequency to 1//
    if(!frequencies[char]){
      frequencies[char] = 1;
    }else{
      //if its alreadyin the map increment frequency//
      frequencies[char]++;
    }
  }
//loop over each elements//
  for(let i = 0; i < s.length; i++){
    //set char equals to 1st index of array//
    let char = s.charAt(i);
//return the index of any character whose frequency is 1 and found first//
    if(frequencies[char] === 1){
      return i;
    }
  }
  return result;
};

firstUniqueChar("ishwor"); // out put: 0 because i is the first unique character