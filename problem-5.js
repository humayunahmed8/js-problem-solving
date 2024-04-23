// Array থেকে শুধুমাত্র truthy value গুলো filter করে বের করে আনতে হবে। 

// Creating an array with both falsy and truthy values
const mixedArray = [
  false,         // Falsy: Boolean false
  0,             // Falsy: Number zero
  -0,            // Falsy: Negative zero
  0n,            // Falsy: BigInt zero
  '',            // Falsy: Empty string
  null,          // Falsy: Null
  undefined,     // Falsy: Undefined
  NaN,           // Falsy: Not-a-Number (NaN)
  true,          // Truthy: Boolean true
  1,             // Truthy: Number one
  'Hello',       // Truthy: Non-empty string
  [],            // Truthy: Empty array (non-falsy)
  {},            // Truthy: Empty object (non-falsy)
  Symbol('foo'), // Truthy: Symbol
  function() {}  // Truthy: Function (non-falsy)
];

const truthyValue = mixedArray.filter(function(currentValue) {
  if(currentValue) {
    return true;
  } else {
    return false;
  }
})

const falsyValue = mixedArray.filter(function(currentValue) {
  return !currentValue;
})

console.log(truthyValue); //[ true, 1, 'Hello', [], {}, Symbol(foo), [Function (anonymous)] ]

// Filter array to extract only truthy values (Simple Way)
console.log(mixedArray.filter(Boolean)); //[ true, 1, 'Hello', [], {}, Symbol(foo), [Function (anonymous)] ]

console.log(falsyValue); //[ false, 0, -0, 0n, '', null, undefined, NaN ]
