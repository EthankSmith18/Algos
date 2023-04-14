tallies = {
  'I':1,
  'V':5,
  'X':10,
  'L':100,
  'C':100,
  'D':500,
  'M':1000,
}


const roman = 'I'

function romanToNumber(numeral, conversion){
  let sum = 0;

  for(let i = 0; i < numeral.length-1; i++){
    let left = i;
    let right = i + 1;
    let currentLeft = numeral[left];
    let currentRight = numeral[right]
    if(conversion[currentLeft] < conversion[currentRight]){
      sum -= conversion[currentLeft]
    }else{
      sum += conversion[currentRight]
    };
  }

  sum += conversion[numeral[numeral.length-1]];
  
  return sum;
}

console.log(romanToNumber(roman, tallies))