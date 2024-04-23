// Object থেকে শুধুমাত্র truthy value গুলো বের করে আনতে হবে। 

// Creating an object with both falsy and truthy values
const mixedObject = {
  a: false,         // Falsy: Boolean false
  b: 0,             // Falsy: Number zero
  c: -0,            // Falsy: Negative zero
  d: 0n,            // Falsy: BigInt zero
  e: '',            // Falsy: Empty string
  f: null,          // Falsy: Null
  g: undefined,     // Falsy: Undefined
  h: NaN,           // Falsy: Not-a-Number (NaN)
  i: true,          // Truthy: Boolean true
  j: 1,             // Truthy: Number one
  k: 'Hello',       // Truthy: Non-empty string
  l: [],            // Truthy: Empty array (non-falsy)
  m: {},            // Truthy: Empty object (non-falsy)
  n: Symbol('foo'), // Truthy: Symbol
  o: function() {}  // Truthy: Function (non-falsy)
};


const truthyObject = function(obj) {
  for(let key in obj) {
    if(!obj[key]) {
      delete obj[key];
    }
  }

  return obj;
}

console.log(truthyObject(mixedObject));