/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
    let i = 0, j = 0, n = word.length, m = abbr.length
    let map = new Map()
    let check = (i, j, prev) => {
        let k = i + ":" + j
        if (map.has(k)) {
            console.log("MEMO")
          return  map.get(k) 
        }
        while (i < n && j < m) {

            if (word[i] === abbr[j]) {
                i++; j++;
            } else {
                if (abbr[j] >= "0" && abbr[j] <= "9") {
                    if (abbr[j] === "0") {
                        map.set(k, false)
                        return false
                    }
                    while (abbr[j] >= "0" && abbr[j] <= "9") {
                        let nx = abbr[j+1] || -1, single = abbr[j], double = ""
                        if (abbr[j+1] >= "0" && abbr[j+1] <= "9") {
                            double = parseInt(single + nx)
                            if (i+double <= n) {
                                if (check(i+double, j+2)) {
                                    map.set(k, true)
                                    return true;
                                }
                            }
                        }
                        single = parseInt(single)
                        let p = ""
                        if (j-1 >= 0 && abbr[j-1] >= "1") {
                            
                        }
                        if (single === 0 || i+single > n) {
                            map.set(k, false)
                            return false;
                        }
                        j++; i+= single;
                    }
                } else {
                    map.set(k, false)
                    return false
                }
            }
        }
        map.set(k, i === n && j === m)
        return i === n && j === m;
    }
    return check(0,0, false)
};
console.log(validWordAbbreviation(word = "hi", abbr = "11"))