// input : linearSearch(['a', 'b', 'c', 'd', 'c'], 'c');
// output : 2 or 'Not found!'
// problem : You have to implement linearSearch() function

function linearSearch(arr, val) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === val) {
      return i;
    }
  }

  return "Not found!";
}

console.log(linearSearch(['a', 'b', 'c', 'd', 'c'], 'c'));