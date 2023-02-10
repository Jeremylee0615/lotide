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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};

//*****************takeUntil Implement****************//
const takeUntil = function(array, callback) {
  let results = [];
  for (let element of array) {
    //loop through an array of an object
    let taken = callback(element);
    //given the condition that callback function will take the element from the array
    if (!taken) {
      results.push(element);
      //if the condition('taken' in this case) is not truthy, keep on adding(.push) elements to the results
    } else {
      break;
      //if the condition is truthy, stop the loop (main purpose of the code)
    }
  }
  return results;
};


//*****************Example Codes*********************//
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, data1.slice(1, 2));
assertArraysEqual(results2, data2.slice(0, 4));