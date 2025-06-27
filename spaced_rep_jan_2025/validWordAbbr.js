/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
    let wLen = word.length, aLen = abbr.length;

    let validate = (i, j) => {
        let chance1 = false, chance2 = false
        while (i < wLen && j < aLen) {
            if (isNaN(abbr[j]) && abbr[j] === word[i]) {
                i++; j++;
            } else if (!isNaN(abbr[j])) {
                let v1 = parseInt(abbr[j])
                if (v1 === 0) return false
                if (!isNaN(abbr[j+1])) {
                    let v2 = parseInt(abbr[j] + abbr[j+1])
                    if (j+2 < aLen && !isNaN(abbr[j+2])) return false;
                    return validate(i + v2, j+2)
                    if (chance2) return true;
                } else {

                    return validate(i + v1, j+1)
                }
            } else {
                return false;
            }
        }
        return i === wLen && j === aLen;
    }
    return validate(0,0);
};
console.log(validWordAbbreviation( word = "hi", abbr = "11"))
// console.log(validWordAbbreviation("aein", abbr = "a2n"))