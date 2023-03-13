let string1 = "i live in a house";


// console.log(string)

function reverseSentence(string){
  let currentWordEnd = string.length;
  let newString = "";

  for(let i = string.length-1; i >=0; i--){
    if(string.charAt(i) == " "){
      newString += string.substring(i, currentWordEnd);
      currentWordEnd = i;
    }
  }

  newString += " " + string.substring(0, currentWordEnd)

  return newString;
}

console.log(reverseSentence(string1))