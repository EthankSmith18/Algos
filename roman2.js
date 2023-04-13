tallies = {
  'I':1,
  'V':5,
  'X':10,
  'L':100,
  'C':100,
  'D':500,
  'M':1000,
}

let number = 'IVV'

// expected output = 9

function romanToNumber(numeral, lookup){
  let sum = 0;
  for(let i = 0; i < numeral.length -1; i++){
    let left = numeral.charAt(i);
    let right = numeral.charAt(i+1);
    console.log(left)
    if(lookup[left] < lookup[right]){
      sum -= lookup[left];
      console.log(sum)
    }else{
      sum += lookup[right];
      console.log(sum)
    }
  }

  sum += lookup[numeral.charAt(numeral.length-1)];

  return sum;
}

console.log(romanToNumber(number, tallies))



