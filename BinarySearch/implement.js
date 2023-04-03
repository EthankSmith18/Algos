// Q. Given a sorted array, search for a target item.

// let array1 = [1,2,3,4,5,6,7,8]
// let target1 = 5;


// function binarySearch(array, target){
//   if(array  == null || array.length == 0){
//     return -1;
//   }

//   let start = 0;
//   let end = array.length-1;

//   while(start <= end){
//     let mid = Math.ceil(start + (end - start)/2);
//     // console.log(mid)
//     if(array[mid] < target){
//       start = mid + 1;
//     }
//     else if(array[mid] > target){
//       end = mid -1;
//       // console.log(mid)
//     }
//     else{
//       return mid;
//     }
//   }

//   return -1;

// }

// console.log(binarySearch(array1, target1))


let array1 = [1,2,3,4,5,6,7,8]
let target1 = 50;

// function binarySearch(array, target){
//   if(array == null || array.length == 0){
//     return -1;
//   }

//   let start = 0;
//   let end = array.length -1;

//   while(start <= end){
//     let mid = Math.floor(start + (end - start)/2)
//     if(array[mid] < target){
//       start = mid + 1;
//     }
//     else if(array[mid] > target){
//       end = mid -1;
//     }
//     else{
//       return mid;
//     }
//   }

//   return -1;
// }

// console.log(binarySearch(array1, target1))

function binarySearch(array, target){
  if(array == null || array.length == 0){
    return -1;
  }
  let start = 0;
  let end = array.length -1;

  while(start <= end){
    let mid = Math.floor(start + (end - start)/2)
    if(array[mid] < target){
      start = mid + 1;
    }
    else if(array[mid] > target){
      end = mid -1;
    }
    else{
      return mid;
    }
  }

  return -1
}

console.log(binarySearch(array1, target1))