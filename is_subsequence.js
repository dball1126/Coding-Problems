var isSubsequence = function(s, t) {
   let pointerOne = 0;
   let pointerTwo = 0;
   while (pointerOne < s.length && pointerTwo < t.length) {
    let letter = t[pointerTwo];
    if (letter === s[pointerOne]) {
        pointerOne++;
    }
    pointerTwo++;
   }
   return pointerOne === s.length ? true : false
};

console.log(isSubsequence("ace" , "fadxsfdec"))