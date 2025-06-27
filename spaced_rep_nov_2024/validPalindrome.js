/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = "";

    for (let i = 0; i < s.length; i++) {
        let v = s[i].toLowerCase();
        if ((v >= "a" && v <= "z") || 
            (v >= "0" && v <= "9")) {
                str += v;
        }
    }

    let i = 0, j = str.length-1

    while (i < j) {
        if (str[i] !== str[j]) return false;
        i++; j--;
    }
    return true;
};
console.log(isPalindrome("A man, a plan, a canal: Panama"))