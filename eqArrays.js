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
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) && eqArrays(arr1[i], arr2[i]) === false) {
      return false;
    } if (!(Array.isArray(arr1[i])) && arr1[i] !== arr2[i]) {
        return false;
    }
  }
  return true;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS




