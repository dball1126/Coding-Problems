var lengthOfLastWord = function(s) {
    let word = '';
    for(let i = s.length-1; i >= 0; i--) {
        
        if (s[i] !== ' ') {
            // build the word
            for (let j = i; j >= 0; j--) {
                const char = s[j];
                if (s[j] !== ' ') {
                    word += char;
                } else {
                    break;
                }
            }
            return word.length
        }
    }
    return 0;
};

console.log(lengthOfLastWord("ddd  asdfasdfasdf "))
