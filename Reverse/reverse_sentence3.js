let string1 = "i live in a house";

function reverseSentence(string){
  let newString = "";
  let currentWordEnd = string.length;

  for(let i = string.length -1; i >= 0; i--){
    if(string.charAt(i) == " "){
      newString += string.substring(i, currentWordEnd);
      currentWordEnd = i;
    }
  }

  newString += " " + string.substring(0, currentWordEnd);

  return newString;

}

console.log(reverseSentence(string1))