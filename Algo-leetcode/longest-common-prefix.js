//  Write a function to find the longest common prefix string
//  amongst an array of strings.
//  If there is no common prefix,
// return an empty string "".

function longestCommonPrefix(strs) {
  //returns an empty string if common prefix is not found//
  if (strs.length === 0) {
    return "";
  }

  //setting a variable prefix to 1st index of array//
  let prefix = strs[0];
//["flower","flow","flight"]//
  //iterating over each elements//
  for (let i = 0; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) != 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }
  return prefix;
}

longestCommonPrefix(["ishwor", "flow", "flight"])
