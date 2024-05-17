// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Input: s = "()[]{}"
// Output: true

var isValid = function (para) {
  let stack = [];

  for (let i = 0; i < para.length; i++) {
    console.log(stack);
    if (para[i] === "{" || para[i] === "[" || para[i] === "(") {
      stack.push(para[i]);
    } else {
      let paranth = stack.pop();
      

      if (
        (para[i] === "}" && paranth !== "{") ||
        (para[i] === "]" && paranth !== "[") ||
        (para[i] === ")" && paranth !== "(")
      ) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
console.log(isValid("(]"));
