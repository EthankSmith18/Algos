// Given an array of integers where all values are present an even number of times except one, return the number that is present an odd number of times

// numbers = [1, 2, 1, 3, 3] return 2

const numbers = [1,2,2,3,1];


function findTheOdd(nums){
  const tracker = {};

  for(let i = 0; i < nums.length; i++){
    let currentNumber = nums[i];
    if(tracker[currentNumber]){
      delete tracker[currentNumber]
    } else{
      tracker[currentNumber] = 1;
    }
  }

  return(Object.keys(tracker)[0])

}

console.log(findTheOdd(numbers))





























// function odd(nums){
//   const tracker = {};

//   for(let i = 0; i <= nums.length -1; i++){
//     let currentKey = nums[i];
//     // console.log(currentKey)
//     if(tracker[currentKey]){
//       delete tracker[currentKey]
//     } else {
//       tracker[currentKey] = 1;
//     }
//   }

//   return(Object.keys(tracker)[0])

// }

// console.log(odd(numbers))