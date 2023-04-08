// Time: O(r * c)...for rows * word.length
// Space: O(1)
var validWordSquare = function(words) {
    for(let r = 0; r < words.length; r++) {
        for (let c = 0; c < words[r].length; c++) {
            if (!words[c] || !words [c][r]) return false
            if (words[r][c] !== words [c][r]) return false
        }
    }
    return true
};
console.log(validWordSquare(words = ["abcd","bnrt","crmy","dtye"])) // true
