const tallies = {
    'I':1,
    'V':5,
    'X':10,
    'L':100,
    'C':100,
    'D':500,
    'M':1000,
  }

  const number1 ="IV"
  const number2 = "I"
  const number3 = "XX"
  const number4 = "XV"

  function romanToNumber(numeral, conversion){
    let sum = 0;

    for(let i = 0; i < numeral.length - 1; i++){
      let left = i;
      let right = i + 1;
      let leftNumber = numeral[left];
      let rightNumber = numeral[right]
      if(conversion[leftNumber] < conversion[rightNumber]){
        sum -= conversion[leftNumber];
      }else{
        sum =+ conversion[leftNumber]
      }
    }
    sum += conversion[numeral[numeral.length-1]];

    return sum;
  }

  console.log(romanToNumber(number1, tallies))
  console.log(romanToNumber(number2, tallies))
  console.log(romanToNumber(number3, tallies))
  console.log(romanToNumber(number4, tallies))