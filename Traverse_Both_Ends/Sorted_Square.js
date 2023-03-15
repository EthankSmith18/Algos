// Given a sorted array in non-decreasing order, return an array of squares of each number, also in non-decreasing order. For example:

// [-4,-2,-1,0,3,5] -> [0,1,4,9,16,25]

// How can you do it in O(n) time?

let array1 = [-4, -2, -1, 0, 5];

function arraySquared(array) {
  if(array == null){
    return null
  } 

  let start = 0;
  let end = array.length - 1;
  let result = new Array(array.length);
  let resultIndex = result.length - 1;

  while (start <= end) {
    if(array[start]**2 < array[end]**2){
      result[resultIndex] = array[end]**2;
      end--;
      resultIndex--;
    }
    else if(array[start]**2 > array[end]**2){
      result[resultIndex] = array[start]**2;
      start++;
      resultIndex--;
    }
    else if(array[start] == array[end]){
      result[resultIndex] = array[start]**2;
      end--;
      resultIndex--;
    }
  }

  return result;
}

console.log(arraySquared(array1));
