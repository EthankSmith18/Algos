// Given an array of integers, both -ve and +ve, find a contiguous subarray that sums to 0.
// For example: [2,4,-2,1,-3,5,-3] --> [4,-2,1,-3]

// let array1 = [2,4,-2,1,-3,5,-3];

// function prefix(array){
//   if(array == null || array.length == 0){
//     return null;
//   }
//   let sum = 0;
//   map = new Map();

// for(let i =0; i < array.length-1; i++){
//   sum += array[i];
//   if(sum == 0){
//     return([0,i]);
//   }
//   if(map.has(sum)){
//     return([map.get(sum) + 1, i])
//   }
//   map.set(sum,i)
// }

// }

// console.log(prefix(array1))

// let array1 = [2,4,-2,1,-3,5,-3];

// function prefix(array){
//   if(array == null || array.length == 0){
//     return null
//   }
//   let sum = 0;
//   let map = new Map();

//   for(let i =0; i < array.length -1; i++){
//     sum += array[i];
//     if(sum == 0){
//       return ([0, i])
//     }
//     if(map.has(sum)){
//       return([map.get(sum) + 1, i])
//     }
//     map.set(sum, i);
//   }
//   return null;
// }

// console.log(prefix(array1))

let array1 = [2,4,-2,1,-3,5,-3];

function prefix(array){
  if(array == null || array.length == 0){
    return null
  }
  let sum = 0;
  let map = new Map();

  for(let i = 0; i < array.length -1; i++){
    sum += array[i];
    if(sum == 0){
      return ([0, i]);
    }
    if(map.has(sum)){
      return ([map.get(sum) + 1, i])
    }
    map.set(sum, i)
  }

  return null

}

console.log(prefix(array1))