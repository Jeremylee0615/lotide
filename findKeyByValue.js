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

const findKeyByValue = function(object, value) {
  let keys = Object.keys(object);
  let i = 0;
  for (let category in object) {
    if (object [category] === value) {
      return keys[i];
    }
    i++;
  }
  return undefined;
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);