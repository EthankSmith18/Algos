// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

const case1 = '()'
const case2 = '(}'
const case3 = '([{}])'

function validPara(paraString){
  let container = [];
  
  for(let i = 0; i < paraString.length; i++){
    if(paraString[i] === '(' || paraString[i] === '[' || paraString[i] === '{'){
      container.push(paraString[i])
    }else if(paraString[i] === ')' && container[container.length-1] === '('){
      container.pop()
    }else if(paraString[i] === ']' && container[container.length-1] ==='['){
      container.pop()
    }else if(paraString[i] === '}' && container[container.length-1] === '{' ){
      container.pop()
    }else{
      return(false)
    }
  }

  return(true)
}

console.log(validPara(case3))