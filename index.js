function hasTargetSum(array, target) {
  const seenNumbers = {};
  
  for (let i = 0; i < array.length; i++) { 
  const complement = target - array[i];
  console.log(`seenNumbers = ${seenNumbers}`);
  console.log(`i = ${i}`)
  console.log(`complement = ${target - array[i]}`);
  if (complement in seenNumbers) return true;
  seenNumbers[array[i]] = true;
  console.log(`seenNumbers assignment = ${seenNumbers}`);
  }
  return false;
}


// function hasTargetSum(array, target) {
//   // Write your algorithm here: Input [3, 8, 12, 4, 11, 7], 10; length = array.length then get the last index Iteration initiated at index 0, condition less than length keep iterating. Iterate until index.  Input 2 sum of Index 0 and Index 5 d=== 2, return true. 
//   const lastIndexInArray = array.length - 1;
//   const lastIntegerInArray = array[lastIndexInArray];

//   for (indexInArray = 0; indexInArray <= lastIndexInArray; indexInArray++) {
//     console.log(`index ${indexInArray}`);
//     console.log(`integer ${array[indexInArray]}`);
//     console.log(`last integer in array ${lastIntegerInArray}`);
//     console.log(array[indexInArray] + lastIntegerInArray);
//     if (((array[indexInArray]) + array[array.length - 1]) === target) {
//       return true;
//     } else if (((array[indexInArray]) + (array[array.length - 2])) === target) {
//       return true;
//     }

//   }
//   return false;

// }

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  An random pair of integers in the array needs to equal the target when they're summed up. 
  We need to make sure the array and target are integers.
  Then we need a way to loop through pairs of the array until the condition of the sum of the pairs equals the target, then return true. Else false.

  Array: 3, 8, 12, 4, 11, 7
  Index: 0, 1,  2, 3,  4, 5

  We could start iterating from 0 as variable i 
  And iterating from the last index 5 as variable j
  Add the iterating integar to the last integar until it reaches the array length
  If nothing returns true then keep iterating and add the interating integar to the second to the last variable in the array. Continue until all pairs have been added.

  Return true if sum of pair equals target.

  Return false if sum of all pairs equal the target.

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
  console.log("=>", Number.isInteger(10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
