// Given an array of integers, both -ve and +ve, find a contiguous subarray that sums to a numberX.
// For example: [2,4,-2,1,-3,5,-3], X = 5 --> Result = [2,4,-2,1]

// let array1 = [2,4,-2,1,-3,5,-3];
// let x = 5;

// function prefix(array, target){
//   if(array == null || array.length == 0){
//     return null;
//   }

//   let sum = 0;
//   let map = new Map();

//   for(let i = 0; i < array.length - 1; i++){
//     sum += array[i];
//     if(sum == target){
//       return([0,i]);
//     }
//     if(map.has(sum-target)){
//       return([(sum-target) + 1, i])
//     }
//     map.set(sum, i);
//   }

//   return null;

// }

// console.log(prefix(array1,x));

// let array1 = [2,4,-2,1,-3,5,-3];
// let x = 5;

// function prefix(array, target){
//   if(array == null || array.length == 0){
//     return null;
//   }
//   let sum = 0;
//   let map = new Map();

//   for(let i = 0; i < array.length -1; i++){
//     sum += array[i];
//     if(sum == target){
//       return ([0,i]);
//     }
//     if(map.has(sum - target)){
//       return([(sum-target)+1, i]);
//     }
//     map.set(sum, i)
//   }

//   return null;
// }

// console.log(prefix(array1, x))

let array1 = [2,4,-2,1,-3,5,-3];
let x = 5;

function prefix(array, target){
  if(array == null || array.length == 0){
    return null;
  }
  let sum = 0;
  let map = new Map();
  for(let i = 0; i < array.length -1; i++){
    sum += array[i];
    if(sum == target){
      return ([0,i]);
    }
    if(map.has(sum-target)){
      return ([(sum-target)+1, i]);
    }
    map.set(sum, i)
  }

  return null;

}

console.log(prefix(array1, x));