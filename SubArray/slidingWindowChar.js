// (Level: Medium) Given a String, find the longest substring with unique characters.
// For example: "whatwhywhere" --> "atwhy"

// let sentence = "whatwhywhere";

// function slidingWindow(string) {
//   if (string == null || string.length == 0) {
//     return null;
//   }
//   let hash = new Map(); //creates new hash map with name 'hash'
//   let result = [0, 0];
//   start = 0;
//   end = 0;
//   longest = 1;
//   hash.set(string.charAt(0), 0); //inserts first character of string into hash with a value of zero.

//   while (end < string.length - 1) {
//     end++;
//     let toAdd = string.charAt(end);
//     if (hash.has(toAdd) && hash.get(toAdd) >= start) {
//       start = hash.get(toAdd) + 1;
//     }
//     hash.set(toAdd, end);

//     if (end - start + 1 > longest) {
//       longest = end - start + 1;
//       console.log(result);
//       result = [];
//       result.push(start);
//       result.push(end);
//       console.log(result);
//     }
//   }
//   console.log(hash)
//   return result;
// }

// console.log(slidingWindow(sentence));

let sentence = "whatwhywhere";

function slidingWindow(string){
  if(string == null || string.length == 0){
    return null
  }
  let hash = new Map();
  let start = 0;
  let end = 0;
  let result = [0,0]
  let longest = 1;
  hash.set(string.charAt(0), 0);

  while(end < string.length -1){
    end++;
    let toAdd = string.charAt(end);
    if(hash.has(toAdd) && hash.get(toAdd) >= start){
      start = hash.get(toAdd) + 1;
    }
    hash.set(toAdd, end);

    if(end - start + 1 > longest){
      longest = end - start + 1;
      result = [];
      result.push(start);
      result.push(end)
    }
  }

  return result;

}

console.log(slidingWindow(sentence));
