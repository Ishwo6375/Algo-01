// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:
// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false

const s = "abc";
const t = "ahbgdc";

//pseudo code//
//create variable i and set it equal to 0//
//create variable j and set it equal to 0//
//while first string length and second string length is greater than 0//
//run this loop//
//check condition//
//if 1st char of first string is equal to 1st char of second string//
//move both string by 1//
//if it is not equal move only second string  by 1//


var isSubsequence = function(s, t){
  let i = 0;
  let j = 0;

  while(i < s.length && j < t.length){
      if(s[i] === t[j]){
          i++;
          j++;
      }else{
          j++;
      }
  }

  return i === s.length;
}

isSubsequence(s, t)    // => true
