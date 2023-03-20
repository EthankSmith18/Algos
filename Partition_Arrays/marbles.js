// You're given a list of Marbles. Each marble can have one of 3 colors (Red, White or Blue).
// Arrange the marbles in order of the colors (Red -> White -> Blue).
// Colors are represented as follows:
// 0 - Red
// 1 - White
// 2 - Blue

let array1 = [0,1,1,2,1,0,0,2,1]
let array2 = [1,1,0]
let array3 = [2,2,2]

let pivot = 1;

function marbleSort(array){
  if( array == null){
    return
  }

  let low_boundary = 0;
  let high_boundary = array.length -1;
  let temp;

  let i = 0;
  while( i <= high_boundary){
    if(array[i] < pivot){
      temp = array[low_boundary];
      array[low_boundary] = array[i];
      array[i] = temp;
      i ++;
      low_boundary ++;
    }
    else if(array[i] > pivot){
      temp = array[high_boundary];
      array[high_boundary] = array[i];
      array[i] = temp;
      high_boundary --;
    }
    else if(array[i] == pivot){
      i++;
    }
    else{
      throw new Error('Unknown Color')
    }


  }
  return array;
}

console.log(marbleSort(array1))
console.log(marbleSort(array2))
console.log(marbleSort(array3))