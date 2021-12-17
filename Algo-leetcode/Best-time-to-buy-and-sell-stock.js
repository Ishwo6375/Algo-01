// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy 
// one stock and choosing a different day in the future to sell that stock.
// // Return the maximum profit you can achieve from this transaction.
// If you cannot achieve any profit, return 0.
// // Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

//PSUDEO CODE//
//assign a variable minimium buy price and set it eqaul to infinity//
//assign a variable maxprofit to hold the maximum profit and set it equal to 0//
//iterate over each elements in the array//
//check if the price of current stock we are on is lower than minimum buy price//
//if it is  less than minimum buy price//
//replace minimum buy price with curren stock//
//else if our current price minus minimum buy price is greater than our max profit//
//update our max profit with that differnce//

const stocks = [7, 1, 5, 3, 6, 4];

var maxProfit = function(prices) {
  //set a default min price and set it to infinity//
  let minBuyPrice = Infinity;
  //assign a variable to hold max profit and set it equals to 0//
  let maximumProfit = 0;

  //iterate over each elements in array//
  for (let price of prices) {
    //check if the price of the current stock we are on lower than our minimal buy price//
    if (price < minBuyPrice) {
      //if it is less than minimum buy price//
      //repalce minimum buy price with our current stock//
      minBuyPrice = price;
      //else if our current price minus minimum buy price is greater than our max profit//
      //update our max profit with that differnce//
    }else if(price - minBuyPrice > maximumProfit){
     maximumProfit = price - minBuyPrice;
    }
  }
  return maximumProfit;

}

maxProfit(stocks) //output : 5

