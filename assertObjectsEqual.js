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

const eqObjects = function(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  let result = false;
  if (keys1.length === keys2.length) {
    keys1.forEach(element => {
      if (keys2.includes(element) && obj1[element] === obj2[element]) {
        result = true;
      } else if (Array.isArray(obj1[element]) && Array.isArray(obj2[element])) {
        result = eqArrays(obj1[element], obj2[element]);
      } else {
        result = false;
      }
    });
  }
  return result;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({ a: '1', b: 2 } , { b: 2, a: '1' });

