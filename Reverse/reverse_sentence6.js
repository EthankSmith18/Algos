const string1 ="i live in a house";
const string2 = "duck"

function reverseSentence(sentence){
  let newSentence = "";
  let currentWordEnd = sentence.length;
  for(let i = sentence.length - 1; i >= 0; i--){
    if(sentence[i] === " "){
      newSentence += sentence.substring(i,currentWordEnd)
      currentWordEnd = i;
    }
  }
  newSentence += " " + sentence.substring(0,currentWordEnd)
  return newSentence
}

console.log(reverseSentence(string1))
console.log(reverseSentence(string2))