// input : linearSearch(['a', 'b', 'c', 'd', 'c'], 'c');
// output : 2 or 'Not found!'
// problem : You have to implement linearSearch() function

function linearSearch(arr, val) {
  const length = arr.length;
  for(let i = 0; i < length; i++) {
    if(arr[i] === val) {
      return i;
    }
  }

  return "Not found!";
}

console.log(linearSearch(['a', 'b', 'c', 'd', 'c'], 'c')); //2
console.log(linearSearch(['a', 'b', 'c', 'd', 'c'], 'x')); //Not Found!