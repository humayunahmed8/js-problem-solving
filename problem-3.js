// এটি Array কিভাবে সবথেকে বড় string খুজে বের করবেন এবং তার index নাম্বার দেখাবেন?

function logestString(names) {
  let longestWord = '';

  for(name of names) {
    if(name.length > longestWord.length) {
      longestWord = name;
      console.log(longestWord);
    }
  }

  return [longestWord, names.indexOf(longestWord)];
}

console.log(logestString(['Echo Rewards', 'WP Dark Mode Block', 'WPDM', 'Easy Email']))