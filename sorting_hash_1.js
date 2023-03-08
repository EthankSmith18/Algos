const array = [6, 9, 5, 2, 1, 7];

const target = 4;

function sum(array, target){
  let hash = new Map();
  for(let i = 0; i < array.length; i++){
    if(hash.has(target - array[i])){
      return([array[i], target-array[i]])
    }
    else{
      hash.set(array[i])
    }
  }
  return null;
}

console.log(sum(array, target))
