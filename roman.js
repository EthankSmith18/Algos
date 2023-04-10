tallies = {
  'I':1,
  'V':5,
  'X':10,
  'L':100,
  'C':100,
  'D':500,
  'M':1000,
}

let number = 'IXVI'

function romanToNumber(number){
  let sum = 0;

  for(let i = 0; i < number.length-1; i++){
    let left = number[i];
    let right = number[i + 1];
    if(tallies[left] < tallies[right]){
      sum -= tallies[left];
    }
    else{
      sum += tallies[left]
    }
  }
  sum += tallies[number[number.length-1]];
  return sum;

}

console.log(romanToNumber(number))