'use strict';





function multiBracketValidation(input) {

  let stack = [];
  let symbols = {
    '{': '}',
    '[': ']',
    '(': ')'
  };

  for (let i = 0; i < input.length; i++) {
    if (input[i] === '(' || input[i] === '[' || input[i] === '{') {
      stack.push(input[i]);
    }

    else {
      let old = stack.pop();
      if (input[i] !== symbols[old]) {
        return false;
      }
    }

    if (stack.length !== null) {
      return false;
    }

    return true;
  }


}


module.exports = multiBracketValidation;

multiBracketValidation('{}');
