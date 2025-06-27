/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(wrd, abbr) {
    let i = 0, j = 0, n = wrd.length, m = abbr.length

    while (j < m) {
        if (i >= n) break;
        if (wrd[i] === abbr[j]) {
            i++; j++;
        } else {
            if (abbr[j] === "0") return false;
            let num = "";
            while (abbr[j] >= 0 && abbr[j] <= "9") {
                num += abbr[j]
                j++;
            }
            if (num !== "") {
                num = parseInt(num)
                if (i + num <= n) {
                    i +=  num
                }
            } else {return false}
        }
    }
    return i === n && j === m
};
console.log(validWordAbbreviation(word = "internationalization", abbr = "i12iz4n"))