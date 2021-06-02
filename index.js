// Create a function that takes an object and returns the keys and values as separate arrays.
// Return the keys sorted alphabetically, and their corresponding values in the same order

// Create your own function that splits a bunch into singular objects inside an array.

const splitBunches = bunches => {
  // Write code in here
  var arr = [];
  for (var i = 0; i < bunches.length; i++) {
    for (var j = 0; j < bunches[i]['quantity']; j++) {
      arr.push({ name: bunches[i]['name'], quantity: 1 });
    }
  }
  return arr;
};

// Example 1:
// Input: splitBunches([{ name: "grapes", quantity: 2 }])
// Output: [{ name: "grapes", quantity: 1 },{ name: "grapes", quantity: 1 }]

// Example 2:
// Input: splitBunches([{ name: 'currants', quantity: 1 },{ name: 'grapes', quantity: 2 },{ name: 'bananas', quantity: 2 }])
// Output: [
//  { name: "currants", quantity: 1},
//  { name: "grapes", quantity: 1 },
//  { name: "grapes", quantity: 1 },
//  { name: "bananas", quantity: 1 },
//  { name: "bananas", quantity: 1 }
