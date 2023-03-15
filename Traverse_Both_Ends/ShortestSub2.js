// Given an array of integers, find the shortest sub array, that if sorted, results in theentire array being sorted.
//  For example:
// [1,2,4,5,3,5,6,7] --> [4,5,3] - If you sort from indices 2 to 4, the entire array is sorted.
// [1,3,5,2,6,4,7,8,9] --> [3,5,2,6,4] -  If you sort from indices 1 to 5, the entire array is sorted.

let array1 = [1, 2, 4, 5, 3, 5, 6, 7];
let array2 = [1,3,5,2,6,4,7,8,9];

function shortestSub(array){
  let start;
  let end;

  // Find dip
  for(start = 0; start <array.length-1; start++){
    if(array[start + 1] < array[start]){
      break;
    }
  }
  // Find bump
  for(end = array.length-1; end > 0; end--){
    if(array[end-1] > array[end]){
      break;
    }
  }
  // Find max and min
  let min = array[start];
  let max = array[end];

  for(let i = start; i < end; i++){
    if(array[i+1] < min){
      min = array[i+1]
    }
    if(array[i+1] > max){
      max = array[i+1]
    }
  }

  while(start > 0 && array[start-1] > min){
    start--;
  }

  while(end < array.length-1 && array[end+1] < max){
    end++;
  }

  return([start, end])

}

console.log(shortestSub(array1))