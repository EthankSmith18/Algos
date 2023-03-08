const array = [6, 3, 5, 2, 1, 7];
const array2 = [4, 0];
const target = 4;

function sum(array, target) {
  if(array == null){
    return null;
  }
  const hash = new Map();
  for (i = 0; i < array.length; i++) {
    if (hash.has(target - array[i])) {
      console.log(hash)
      return [array[i], target - array[i]];
    } else {
      console.log(hash)
      hash.set(array[i]);
    }
  }

  return null;
}

console.log(sum(array2, target))
