const a = [6, 3, 5, 2, 1, 7];

const x = 4;

let result = {};

function sorting(array, target) {
  let result = [];
  // console.log(array);
  // console.log(target);

  for (let i = 0; i < a.length - 1; i++) {
    console.log(a[i])
    for (let j = 1; j < a.length - 1; j++) {
      console.log(a[j])
      if (a[i] + a[j] == target) {
        result.push(a[i]);
        result.push(a[j]);
        return result;
      }
    }
  }
}

console.log(sorting(a, x));
