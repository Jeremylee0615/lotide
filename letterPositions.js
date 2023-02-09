const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1,arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } 
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) && eqArrays(arr1[i], arr2[i]) === false) {
      return false;
    } if (!(Array.isArray(arr1[i])) && arr1[i] !== arr2[i]) {
        return false;
    }
  }
  return true;
};

const letterPositions = function(sentence) {
  const results = {};
  sentence = sentence.toLowerCase();
  for (let i = 0; i < sentence.length; i++) {
    let character = sentence[i];
    if (character === ' ') {
      continue;
    } else if (!results[character]) {
      results[character] = [i]
    } else {  
      results[character].push(i)
    }  
  }
  return results;
};

assertArraysEqual(letterPositions("HELLO HELLO").e, [1,7,]);