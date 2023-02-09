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
}
  /*const results = {};
  for (var item in allItems) {
    if (itemstoCount[item]) {
      !results[item] ? results[item] = 0 : results[item] += 1;
    }
  }


}*/


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
/*assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);*/

