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





const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (let item in allItems) {
    if (itemsToCount[item]) {
      !results[item] ? results[item] = 1 : results[item] += 1;
    }
  }
  return results;
};



