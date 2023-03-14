// Reverse the order of elements in an array. For example, A = [1,2,3,4,5,6], Output = [6,5,4,3,2,1]

let array1 = [1, 2, 3, 4, 5, 6];


function ReverseArray(array) {
  let start = 0;
  let end = array.length - 1;
  let temp;

  while(start < end){
    temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    start ++;
    end--;    
  }

  return array

}

console.log(ReverseArray(array1))
