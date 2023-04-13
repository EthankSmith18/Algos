// Given an array of integers where any element may repeat multiple times,
//  write a method to determine which one of the elements repeats the most. Give consideration to performance.
// Input: nums = [ 1,5,1,4,5,2,1,6,6,1]
// Output: 1. (1 occurs 4 times; 5 & 6 appear twice and 4 occurs once so they are less common.)

const nums1 = [1, 1, 2, 2, 2];

const nums2 = [1, 2, 3, 1, 1, 2];

const nums3 = [1];

// {
//   1:2,
//   2:2,
// }

function repeat(numbers) {
  const count = new Map();
  let max = 0;
  const most = [];

  for (let i = 0; i <= numbers.length - 1; i++) {

    let current = numbers[i];

    if (count.has(numbers[i])) {
      count.set(numbers[i], count.get(numbers[i]) + 1);
    } else {
      count.set(numbers[i], 1);
    }
  }

  for (const occurence in count) {

    let value = count.get(occurence);

    if(value > max){
      max = value;
      most.pop();
      most.push(occurence);
    } else if(value == max){
      most.push(occurence)
    }
  }

  return most;
}

console.log(repeat(nums1))





    // if (count.get(occurence) >= max) {
    //   max = count.get(occurence);
    //   most.push(occurence);
    // }


    const will = {};

    will.ethan = 'Will';
    will[1] = 2;
    {
      ethan: will,
      '1': 2,
    }

    will.ethan;
    will[1] + 1;
    delete will.ethan;
    for(ducks in will){

    }