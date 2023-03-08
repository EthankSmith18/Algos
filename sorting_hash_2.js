const array = [6, 3, 5, 2, 1, 7];
const array2 = [];

const target = 4;

function sum(array, target) {
  if(array == null){
    return null
  }

  const hash = new Map();
  for (i = 0; i < array.length - 1; i++) {
    if(hash.has(target-array[i])){
      return([array[i], target-array[i]])
    }
    else{
      hash.set(array[i])
    }
  }
  return null;
}

console.log(sum(array2, target))

