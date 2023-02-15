const assertEqual = function(actual, expected) {
  if (actual === expected) {
     
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  
    return true;
  } else {
    if (actual !== expected) {
      console.log(`🛑🛑🛑  Assertion Failed: ${actual} !== ${expected}`);
    }
    return false;
  }
};

const countLetters = function(string) {
  let modifiedString = string.split(" ").join("");
  let results = {};
  for (let letter of modifiedString) {
    results[letter] ? results[letter] += 1 : results[letter] = 1;
  }
  
  return results;
};


 

console.log(countLetters("lighthouse in the house"));
console.log(countLetters("Letters are in this string!"));