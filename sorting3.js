const array = [6, 3, 5, 2, 1, 7];
const target = 4;

function sorting(array, target) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length - 1; j++) {
      if (array[i] + array[j] == target) {
        console.log(i)
        console.log(j)
        return ([array[i], array[j]]);
      }
    }

  }
  return null;
}

console.log(sorting(array, target))