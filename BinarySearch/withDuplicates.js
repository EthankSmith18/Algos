// Level: Easy

// Given a sorted array that can contain duplicates, find the first occurrence of thetarget element. For example:

// A = [1,3,4,6,6,6,7] and Target = 6, return index 3.

// let array1 = [1,3,4,5,6,6,7];
// let target = 6;

// function binarySearch(array, target){
//   if(array == null || array.length == 0){
//     return -1;
//   }

//   let start = 0;
//   let end = array.length-1;

//   while(start <= end){
//     let mid = Math.floor(start + (end - start)/2);
//     if(array[mid] > target || array[mid] == target && array[mid-1] == target && mid > 0){
//       end = mid -1;
//     } else if(array[mid] < target){
//       start = mid + 1;
//     }
//     else{
//       return mid;
//     }
//   }

//   return -1;
// }

// console.log(binarySearch(array1, target))

// let array1 = [1,3,4,5,6,6,7];
// let target = 6;

// function binarySearch(array, target){
//   if(array == null || array.length == 0){
//     return -1;
//   }

//   let start = 0;
//   let end = array.length-1;

//   while( start <= end){
//     let mid = Math.floor(start + (end - start)/2);
//     if(array[mid] > target || mid > 0 && array[mid] == target && array[mid -1] == target){
//       end = mid -1;
//     } else if(array[mid] < target){
//       start = mid + 1;
//     } else{
//       return mid;
//     }
//   }
//   return -1;
// }

// console.log(binarySearch(array1, target))

let array1 = [1,3,4,5,6,6,7];
let target = 6;

function binarySearch(array, target){
  if(array == null || array.length == 0){
    return -1;
  }

  let start = 0;
  let end = array.length -1;

  while(start <= end){
    let mid = Math.floor(start + (end - start)/2);
    if(array[mid] > target || mid > 0 && array[mid] == target && array[mid-1] == target){
      end = mid -1;
    } else if(array[mid] < target){
      start = mid + 1;
    }else{
      return mid;
    }
  }
  return -1;
}

console.log(binarySearch(array1, target))