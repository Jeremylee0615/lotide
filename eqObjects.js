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

const eqObjects = function(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  //picks the catergories of the objects (ect. size, color)
  let result = false;
  //result is set false because we are going to code around the case where everything is matching together.
  if (keys1.length === keys2.length) {
    keys1.forEach(element => {
      if (keys2.includes(element) && obj1[element] === obj2[element]) {
        result = true;
        //checks if catogorie lengths are matching from each objects while each categories have same elements
      } else if (Array.isArray(obj1[element]) && Array.isArray(obj2[element])) {
        result = eqArrays(obj1[element], obj2[element]);
        //checks if both Arrays of elements are matching together through eqArrays function.
      } else {
        result = false;
        //elsewise, result will be also false
      }
    });
  }
  return result;
};


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);
