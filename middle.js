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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅  Assertion passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed: ${arr1} !== ${arr2}`);
  }
};

const middle = function(arr) {
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 === 0) {
    return [arr[Math.ceil((arr.length) / 2) - 1], arr[Math.ceil(arr.length / 2)]];
  } else {
    return arr[Math.floor(arr.length / 2)];
  }
};


console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));