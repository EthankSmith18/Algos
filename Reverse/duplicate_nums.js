const array1 = [1, 2, 3, 4,-1,-1];
// [1,2,2,3,4,4]

// [1,2,1,2,2,3,4,4]

function getLastNumber(array){
  let i = array.length-1;
  while (i >= 0 && array[i] == -1){
    i--
  }
  return i;

}

function duplicateEven(array) {
  let end = array.length -1;
  let i = getLastNumber(array);

  while (i >= 0) {
    if (array[i] % 2 == 0) {
      // console.log(i)
      for (j = 0; j < 2; j++) {
        array[end] = array[i]
        end--;
        // console.log(end)
      }
    }
    else{
      array[end] = array[i]
      end--;
    }
  i--;
  }
  return array;
}


console.log(duplicateEven(array1))