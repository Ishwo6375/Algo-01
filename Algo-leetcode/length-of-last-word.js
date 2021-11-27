// Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.
// Example 1:
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:
// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:
// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.// Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.
// Example 1:
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:
// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:
// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

//short way using split() and trim()

var lengthOfLastWord = function(s){
  //edge case// if the length of arrray is 0 return 0//
  if(s.length === 0) return 0;

  //split string into array//
  let array = s.trim().split(' ');
  //return the last array length//
  return array[array.length -1].length;
}

lengthOfLastWord("hello world"); //output = 5


//###########Another solution////

let lengthOfLastWord = function(s) {
  let lastWordLength = 0;
  let beforeFirstNonEmptyChar = true;

  if (s.length === 0) {
    return lastWordLength;
  }
 //loop over elements from the last character of string//
  for (let i = s.length - 1; i >= 0; i--) {
    //check if the character we are in is empty string or not//
    //if it is not a empty string//
    if (s.charAt(i) !== ' ') {
      //increment the lastWordLength by 1//
      lastWordLength++;
      //now we are no longer before first none empty character set beforeFirstNoneEmptyChar to false//
      beforeFirstNonEmptyChar = false;
      //if we are on the empty character and//
      //if we are not before the first none empty character break out of loop//
    } else if (!beforeFirstNonEmptyChar) {
      break;   
    }
  }

  return lastWordLength;
};




lengthOfLastWord("hello world"); //output = 5