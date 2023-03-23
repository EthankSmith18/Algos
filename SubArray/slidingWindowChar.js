// (Level: Medium) Given a String, find the longest substring with unique characters.
// For example: "whatwhywhere" --> "atwhy"

let sentence = 'whatwhywhere';

function slidingWindow(string){
  if(string == null || string.length == 0){
    return null;
  }
  let hash = new Map(); //creates new hash map with name 'hash'
  let result = [0,0];
  start = 0;
  end = 0;
  longest = 1;
  hash.set(string.charAt(0),0); //inserts first character of string into hash with a value of zero.

  while(end < string.length -1){
    end++;
    let toAdd = string.charAt(end);
    if(hash.has(toAdd) && hash.get(toAdd) >= start){
      start = hash.get(toAdd) + 1;
    }
  }



  return string;
}

console.log(slidingWindow(sentence));