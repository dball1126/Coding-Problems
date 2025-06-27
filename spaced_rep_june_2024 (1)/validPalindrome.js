/**
 * @param {string} s
 * @return {boolean}
 */
// Two pointer
// Time & Space: O(n)
var isPalindrome = function(s) {
    //pre-processing
    let newStr = ""
    for (let i = 0; i < s.length; i++) {
        if (s[i] >= "a" && s[i] <= "z" || 
            s[i] >= "A" && s[i] <= "Z" || 
            s[i] >= "0" && s[i] <= "9") {
            newStr += s[i].toLocaleLowerCase()
        }
    }

    let i = 0, j = newStr.length-1;
    while (i < j) {
        if (newStr[i] !== newStr[j]) {
            return false;
        }
        i++; j--;
    }
    return true;
};
console.log(isPalindrome(s = s = "0p")) // = false

