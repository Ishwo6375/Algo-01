// Given a string s containing just the characters
// '(', ')', '{', '}', '[' and ']', determine
// if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the
// same type of brackets.
// Open brackets must be
// closed in the correct order.
// Example 1:
// Input: s = "()"
// Output: true
// Example 2:
// Input: s = "([)]"
// Output: false

const s = "{[]}";

var isValid = function (s) {
  const map = new Map();
  const stack = [];

  map.set(")", "(");
  map.set("]", "[");
  map.set("}", "{");

  //iterating over each elements//
  for (let i = 0; i < s.length; i++) {
    //Input: s = "()[]{}"//
    const curr = s[i];
    const peek = stack[stack.length - 1];

    if (map.has(curr) && map.get(curr) === peek) {
      stack.pop();
    } else {
      stack.push(curr);
    }
  }

  return stack.length === 0;
};

isValid(s); //True
isValid("[][[]("); //False

//time complexity = O(n)
//space complexity = O(n)
