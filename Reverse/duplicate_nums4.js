let array1;
// [1,2,2,3,4,4,-1,-1]

function getLastNumber(array) {
  let i = array.length - 1;
  while (i >= 0 && array[i] == -1) {
    i--;
  }
  return i;
}

function duplicateEvens(array) {
  if(array == null || array.length == 0){
    return null;
  }
  let end = array.length - 1;
  let i = getLastNumber(array);
  while (i >= 0) {
    if(array[i] % 2 == 0){
      for(let j = 0; j <2; j++){
        array[end] = array[i];
        end--;
      }
    }else{
      array[end] = array[i];
      end--
    }
    i--;
  }
  return array;
}

console.log(duplicateEvens(array1))
