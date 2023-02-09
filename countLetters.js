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