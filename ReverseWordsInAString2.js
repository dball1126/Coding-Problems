var reverseWords = function(s) {
  let start = 0;
  let end = s.length-1;

  // reverse entire string
  while (start < end) {
    [s[start], s[end]] = [s[end], s[start]];
    start++;
    end--;
  }

  start = 0;
  let reset = false;
  
  // reverse every word in the array
  for (end = 0; end < s.length; end++) {
    console.log
    let word = s[end];

    // check for single character words
    if (word === " " && (start === end-1)) {
      start = end+1
      continue;
    }

    // check for a space or check if you're at the end of the array
    if (word === " " || end+1 === s.length) {

      let temp = end+1 === s.length ? end : end-1
      
      while (start < temp){
        [s[start], s[temp]] = [s[temp], s[start]];
        start++;
        temp--;
        reset = true;
      }
      // reset the starting index.
      if (reset) {
        start = end+1
        reset = false;
      }
    }
  }
  return s;
};

console.log(reverseWords(["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]
))