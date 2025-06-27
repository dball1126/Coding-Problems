/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    

    const removeDups = (string) => {
        let l = 0; r = string.length-1
        let str = ""

        for (let i = 1; i <= (i+2 < s.length && s.length < r); i++) {
            let prev = s[i-1], next = s[i+1], curr = s[i]

            if (curr === prev === next) {
                return removeDups(string.substring(l, i-1) + string.slice(i+1))
            }
        }

        return str
    }
    
    return removeDups(s)
};


