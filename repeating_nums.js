// Given an array of integers where any element may repeat multiple times,
//  write a method to determine which one of the elements repeats the most. Give consideration to performance.
// Input: nums = [ 1,5,1,4,5,2,1,6,6,1]
// Output: 1. (1 occurs 4 times; 5 & 6 appear twice and 4 occurs once so they are less common.)

const nums1 = [1, 1, 2, 2];

const nums2 = [1, 2, 3, 2, 2, 4];

const nums3 = [1];

// {1:2, 2:2}

function repeatElements(numbers){
  const tracker = {};
  let max = 0;
  let element = [];

  for(let i = 0; i < numbers.length; i++){
    let currentNumber = numbers[i];
    

    if(tracker[currentNumber]){
      tracker[currentNumber] += 1;
      if(tracker[currentNumber] > max){
        max = tracker[currentNumber];
        element = [numbers[i]]
      } else if(tracker[currentNumber] === max){
        element.push(numbers[i])
      }
    } else{
      tracker[numbers[i]] = 1;
      
        if(tracker[currentNumber] > max){
          max = tracker[currentNumber];
          element = numbers[i]
        }
    }
  }

  return element;
}

console.log(repeatElements(nums1))



























// function repeat(numbers) {
//   const count = {};
//   let max = 0;
//   let element = [];

//   for (let i = 0; i <= numbers.length - 1; i++) {
//     let currentKey = numbers[i];

//     if (count.hasOwnProperty(currentKey)) {
//       count[currentKey] = count[currentKey] + 1;
//     } else {
//       count[currentKey] = 1;
//     }
//   }

//   console.log(count);

//   for (occurence in count) {
//     let currentValue = count[occurence];
//     console.log(currentValue)

//     if (currentValue > max) {
//       element = [occurence];
//       max = currentValue;
//     } else if (currentValue === max) {
//       element.push(occurence);
//     }
//   }

//   return element;
// }

// console.log(repeat(nums3));

// const nums1 = [1, 1, 2, 2];

// const nums2 = [1, 2, 3, 3, 3, 4];

// const nums3 = [1];

// {1:2, 2:2}

// function repeat(numbers) {
//   const count = {};
//   let max = 0;
//   let element = [];

//   for (let i = 0; i <= numbers.length - 1; i++) {
//     let currentKey = numbers[i];
//     let currentValue = count[currentKey];

//     if (count.hasOwnProperty(currentKey)) {
//       count[currentKey] = count[currentKey] + 1;
//       if (count[currentKey] > max) {
//         element = [currentKey];
//         max = currentValue;
//       } else if (currentValue === max) {
//         element.push(currentKey);
//       }
//     } else {
//       count[currentKey] = 1;
//     }
//   }

//   return element;

// }

// console.log(repeat(nums2));


// function repeat(numbers){
//   if(numbers.length === 1){
//     return([numbers[0]])
//   }
//   const count = {};
//   let max = 0;
//   let element = [];

//   for(let i = 0; i <= numbers.length-1; i++){

//     let currentKey = numbers[i];
//     let currentValue = count[currentKey];

//     if(count[currentKey]){
//       count[currentKey] += 1;
//       if(currentValue === max){
//         element.push(currentKey);
//       }
//       else if(currentValue > max){
//         element = [currentKey];
//         max = currentValue;
//       } 
//     } else{
//       count[currentKey] = 1;
//     }
//   }
//   console.log(count)
//   return element;
// }

// console.log(repeat(nums3))