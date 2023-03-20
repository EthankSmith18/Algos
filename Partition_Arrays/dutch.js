// You are given an array of integers and a pivot. Rearrange the array in thefollowing order:
// [all elements less than pivot, elements equal to pivot, elements greater than pivot]
// For example,
// a = [5,2,4,4,6,4,4,3] and pivot = 4 --> result = [3,2,4,4,4,4,5,6].

let array1 = [5,2,4,4,6,4,4,3];

let pivot = 4;

function dutchFlag(array){
  let low_boundary = 0;
  let high_boundary = array.length -1;
  let temp;
  
  let i = 0;
  while(i<= high_boundary){
    if(array[i] < pivot){
      temp = array[low_boundary];
      array[low_boundary] = array[i];
      array[i] = temp;
      low_boundary ++;
      i ++;
    }
    else if(array[i] > pivot){
      temp = array[high_boundary];
      array[high_boundary] = array[i];
      array[i] = temp;
      high_boundary --;
    }
    else{
      i++;
    }
  }

  return array;
}


console.log(dutchFlag(array1))
