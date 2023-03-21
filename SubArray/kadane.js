// Given an array of integers that can be both +ve and -ve, find the contiguous subarray with the largest sum.
// For example:  [1,2,-1,2,-3,2,-5]  -> first 4 elements have the largest sum. Return (0,3)

// ***********************Brute Force Method ****************************
// function maxSubArray(array){
//   if(array == null || array.length ==0){
//     try {
//       throw new Error("The array is undefined or does not exist");
//     } catch (error) {
//       console.error(`${error.name}: ${error.message}`);
//     }
//   }
//   let maxSum = array[0];
//   for(let i = 0; i < array.length; i++){
//     let sum = 0;
//     for(let j = i; j<array.length; j++){
//       sum = sum + array[j];
//       maxSum = Math.max(maxSum, sum);
//     }
//   }

//   return maxSum;

// }

// console.log(maxSubArray(array1))

// *****Kadane's Algorithm********

// function kadane(array){
//   if(array == null || array.length == 0){
//     try {
//       throw new Error("Array is null or does not exist")
//     } catch (error) {
//       console.error(`${error.name}: ${error.message}`);
//       return
//     }
//   }
//   let maxSum=array[0];
//   let maxEndingHere = array[0];

//   for(let i = 1; i < array.length-1; i++){
//     maxEndingHere = Math.max(maxEndingHere + array[i], array[i]);
//     maxSum = Math.max(maxSum, maxEndingHere);
//   }

//   return maxSum;

// }

// console.log(kadane(array1))

let array1 = [1, 2, -1, 2, -3, 2, -5];

function kadane(array) {
  if (array == null || array.length == 0) {
    try {
      throw new Error("Array is null or does not exist");
    } catch (error) {
      console.error(`${error.name}: ${error.message}`);
      return;
    }
  }

  let maxSum = array[0];
  let maxEndingHere = array[0];

  for(let i = 1; i < array.length -1; i++){
    maxEndingHere = Math.max(maxEndingHere + array[i], array[i]);
    maxSum = Math.max(maxEndingHere, maxSum);
  }
  return maxSum;

}

console.log(kadane(array1));
