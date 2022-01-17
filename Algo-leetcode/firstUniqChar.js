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

//solving problem using map//
//create a new Map()//
//iterate over each character in the string//
//check condition weather the character we are on map or not//
//if it is on map already increment its frequency by 1//
//if it is not on map add it to map and set its frequency to 1//
//loop over each elements again//
//assin a variabl and set it equal to first index of array//
//if the characters stored in map frequency is equal to 1//
//return that character// because that is the first unique character//
//if no unique character found return -1//

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