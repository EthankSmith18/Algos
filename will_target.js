// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

const nums1 = [2, 7, 11, 15];

const nums2 = [1,8];

const nums3 = [2, 6, 7, 11, 15];

const nums4 = [1, 3, 6, 7, 10];

const nums5 = [1, 2, 6, 7];

const point = 9;

function sumToTarget(numbers, target) {
  let left = 0;
  let right = 1;
  let sum = numbers[left] + numbers[right];
  while (left < numbers.length-1) {
    if (sum < target) {
      sum -= numbers[right]
      if(right < numbers.length){
        right++;
        sum += numbers[right];
      }else{
        left ++;
        right = left + 1;
        sum = numbers[left] + numbers[right]
      }
      
    } else if (sum > target) {
      sum -= numbers[left];
      left++;
      right = left + 1;
      sum = numbers[left] + numbers[right]
    } else {
      return [left, right];
    }
  }
}

console.log(sumToTarget(nums1, point));
console.log(sumToTarget(nums2, point));
console.log(sumToTarget(nums3, point));
console.log(sumToTarget(nums4, point));
console.log(sumToTarget(nums5, point));

// let left = 0;
// let right = 1;
// let sum = numbers[0];
// let leftValue = numbers[left];
// let rightValue = numbers[right];

// while (right < numbers.length && left < numbers.length - 1) {
//   if (left > right) {
//     right = left + 1;
//     sum = leftValue + rightValue;
//   } else if (leftValue + rightValue === sum) {
//     console.log(leftValue)
//     console.log(rightValue)
//     return [left, right];
//   } else if (leftValue + rightValue < sum) {
//     right += 1;
//     sum += rightValue;
//   } else if (leftValue + rightValue > sum) {
//     sum -= leftValue;
//     left += 1;
//   }
// }
