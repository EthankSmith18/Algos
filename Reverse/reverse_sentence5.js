let string1 = "i live in a house";

function reverseSentence(sentence){
  let newSentence = "";
  let currentWordEnd = sentence.length;

  for(let i = sentence.length-1; i >= 0; i--){
    if(sentence[i] === " "){
      newSentence += sentence.substring(i,currentWordEnd);
      currentWordEnd = i;
    }
  }

  newSentence += " " + sentence.substring(0,currentWordEnd);
  return newSentence

}

console.log(reverseSentence(string1))