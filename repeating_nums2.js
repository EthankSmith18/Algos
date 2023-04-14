// Given an array of integers where any element may repeat multiple times,
//  write a method to determine which one of the elements repeats the most. Give consideration to performance.
// Input: nums = [ 1,5,1,4,5,2,1,6,6,1]
// Output: 1. (1 occurs 4 times; 5 & 6 appear twice and 4 occurs once so they are less common.)

const nums1 = [1,5,1,4,5,2,1,6,6,1]
const nums2 = [5]
const nums3 = [1,1,2,2]

function findGreatestRepeat(numbers){
  if(numbers.length === 1){
    return(numbers)
  }
  const tracker = {};
  let occurence = 0;
  let max = 0;
  let answer =[];

  for(let i = 0; i < numbers.length; i++){
    let currentNumber = numbers[i]
    if(tracker[currentNumber]){
      tracker[currentNumber] += 1;
      occurence = tracker[currentNumber]
      if(occurence > max){
        max = occurence;
        answer = [numbers[i]];
      } else if(occurence ===  max){
        answer.push(numbers[i]);
      }
      }
      else{
        tracker[currentNumber] = 1;
      }
    }

    return answer;
  }

  console.log(findGreatestRepeat(nums1))
  console.log(findGreatestRepeat(nums2))
  console.log(findGreatestRepeat(nums3))