// Given an array of positive integers, find a subarray that sums to a given number X.

// For e.g, input = [1,2,3,5,2] and X=8, Result = [3,5] (indexes 2,3)


// function slidingWindow(array) {
//   if (array == null || array.length == 0) {
//     return null;
//   }

//   let start = 0;
//   let end = 0;
//   let sum = array[0];
//   while (start < array.length) {
//     if (start > end) {
//       end = start;
//       sum = array[start];
//     }
//     if (sum < target) {
//       if (end == array.length - 1) {
//         break;
//       }
//       end++;
//       sum = sum + array[end];
//     }
//     else if(sum > target){
//       sum = sum-array[start]
//       start++;
//     }
//     else{
//       return ([start, end])
//     }
//   }
  // return null;
// }

// console.log(slidingWindow(array1))



// function slidingWindow(array){
//   if(array == null || array.length == 0){
//     return null;
//   }
//   let start = 0;
//   let end = 0;
//   let sum = array[0]

//   while(end < array.length){
//     if(start > end){
//       end = start;
//       sum = array[start];
//     }
//     else if(sum < target){
//       if(end == array.length -1){
//         break;
//       }
//       end++;
//       sum += array[end];
//     }
//     else if(sum > target){
//       sum -= array[start];
//       start++;
//     }
//     else{
//       return([start, end]);
//     }
//   }

//   return null;

// }

// console.log(slidingWindow(array1))

let array1 = [1, 2, 3, 5, 2];
let target = 8;

function slidingWindow(array){
  if(array == null || array.length == 0){
    return null;
  }
  let start = 0;
  let end = 0;
  let sum = array[0];
  while(end < array.length){
    if(start > end){
      end = start;
      sum = array[start];
    }
    else if(sum < target){
      if(end == array.length-1){
        break;
      }
      end++;
      sum += array[end];
    }
    else if(sum > target){
      sum -= array[start];
      start++;
    }
    else{
      return ([start, end])
    }
  }
  return null;
}

console.log(slidingWindow(array1))