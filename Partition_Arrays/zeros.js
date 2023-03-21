// You are given an array of integers. Rearrange the array so that all zeroes are at the beginning of the array.

// For example: a = [4,2,0,1,0,3,0] -> [0,0,0,4,1,2,3]

let array1 = [4, 2, 0, 1, 0, 3, 0];

// function moveZeroesFront(array) {
//   let temp;
//   let boundary = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] == 0) {
//       temp = array[boundary];
//       array[boundary] = array[i];
//       array[i]=temp;
//       console.log(array[i])
//       boundary += 1;
//     }
//   }

//   return array;
// }

// console.log(moveZeroesFront(array1))

// function moveZeroesBack(array) {
//   let temp;
//   let boundary = array.length-1;
//   for (let i = array.length-1; i >= 0; i--) {
//     if (array[i] == 0) {
//       temp = array[boundary];
//       array[boundary] = array[i];
//       array[i]=temp;
//       boundary -= 1;
//     }
//   }

//   return array;
// }

// console.log(moveZeroesBack(array1))


function moveZeroesFront(array){
  let temp;
  let boundary = 0;
  for(let i = 0; i < array.length; i++){
    if(array[i] == 0){
      temp = array[boundary];
      array[boundary] = array[i];
      array[i] = temp;
      boundary ++;
    }
  }
  return array;
}

console.log(moveZeroesFront(array1))

function moveZeroesBack(array){
  let temp;
  let boundary = array.length -1;
  for(let i = array.length -1; i >= 0; i--){
    if(array[i] == 0){
      temp = array[boundary];
      array[boundary] = array[i];
      array[i] = temp;
      boundary--;
    }
  }
  return array
}

console.log(moveZeroesBack(array1))