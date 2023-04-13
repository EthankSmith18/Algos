// 2 Sum Problem: Given a sorted array of integers, find two numbers in the array that sum to a given integer target
// For example, if a = [1,2,3,5,6,7] and target = 11, the answer will be 5 and 6


const a = [1,2,3,5,6,7]

const goal = 11;

function twoSum(numbers, target){
  let left = 0;
  let right = numbers.length-1;
  while(left < right){
    if(numbers[left] + numbers[right] < target){
      left++;
    }else if(numbers[left] + numbers[right] > target){
      right--;
    }else{
      return([numbers[left], numbers[right]])
    }
  }
  return("No solution")
}

console.log(twoSum(a,goal))

