function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNumbers = new Set();
  for (const number of array) {
    const complement = target - number;

    if (seenNumbers.has(complement)) return true;
    seenNumbers.add(number);
  }
  return false;

}

/* 
  Write the Big O time complexity of your function here
  run time 0(n*2)
  space time 0(n)
*/

/* 
  Add your pseudocode here
  hasTargetSum([3, 8, 12, 4, 6, 8], 11);
  we are looking for a number in the array that will add upto 11
  8+3=11 so it will return true 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
