// 2 Sum Problem: Given a sorted array of integers, find two numbers in the array that sum to a given integer target
// For example, if a = [1,2,3,5,6,7] and target = 11, the answer will be 5 and 6

let array1 = [1, 2, 3, 5, 6, 7];

let target = 11;

function twoSum(array, target) {
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    if (array[start] + array[end] == target) {
      return ([array[start], array[end]]);
    } else if (array[start] + array[end] < 11) {
      start++;
    } else if (array[start] + array[end] > 11) {
      end--;
    }
  }

  return null;
}


console.log(twoSum(array1, target))