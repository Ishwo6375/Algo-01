// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
// Input: s = "rat", t = "car"
// Output: false


const s = "rat";
const t = "tar";
 

 var isAnagram = function(s, t){
   //edge case// if the length of 1st string is not equal to second string return false//
   if(s.length !== t.length){
     return false;
   }
//create a new object//
   let letterCount = {};
//iterate over every letter in the first string//
   for(let letter of s){
     //if the object doesnot have the letter we are currently on
     if(letterCount[letter] === undefined) {
       //add it to object and set it count to 1//
       letterCount[letter] = 1;
     }else{
       //if its already in the object increment its count by 1//
       letterCount[letter]++;
     }
   }

   //loop over every letter in second string//
   for(let letter of t){
     if(!letterCount[letter]){
       return false;
     }

     if(letterCount[letter] < 1) {
       return false;
     }
     letterCount[letter]--;
   }

   return true;
 }
isAnagram(s,t) // output : true//