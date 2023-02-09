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

const eqArrays = function(arr1,arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } 
  for (let value = 0; value < arr1.length; value += 1) {
    if ((Array.isArray(arr1[value]) || Array.isArray(arr2[value])) && eqArrays(arr1[value], arr2[value]) === false) {
      return false;
    } else if (Array.isArray(arr1[value]) || Array.isArray(arr2[value])) {
      eqArrays(arr1[value], arr2[value]);
    } else if (arr1[value] !== arr2[value]) {
      return false;
    }
  }
  return true;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS




