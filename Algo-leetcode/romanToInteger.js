//Convert Roman number to Integer//
//for example MCMXCVI = 1995//
const s = "MCMXCVI";

var romanToInt = function (s) {
  //create an object//
  let romanToInteger = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    M: 1000,
  };

  //assigned vaiable total = 0 to keep track of total//
  let total = 0;

  //iterate over each element//
  for (let i = 0; i < s.length; i++) {
    let currentInt = romanToInteger[s.charAt(i)];
    let nextInt = romanToInteger[s.charAt(i + 1)];

    //check condition//
    //If nextInt exist check the condition//
    if (nextInt) {
      //if currentInt is greater or equal to nextInt add currentInt to total//
      if (currentInt >= nextInt) {
        total += currentInt;
      } else {
        //otherwise subtract nextInt with currentInt and add to total//
        total += nextInt - currentInt;
        //increase index i by 1//
        i++;
      }
      //if nextInt doesnot exist add currentInt to total//
    } else {
      total += currentInt;
    }
  }
  return total;
};

romanToInt(s);
