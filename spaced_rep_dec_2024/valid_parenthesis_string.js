/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let open = 0, close = 0, option  = 0

    for (let i = 0; i < s.length; i++) {
        let v = s[i]
        if (v === "(") {
            open++
        } else if (v === "*") {
            option++
        } else {
            close++

            if (close > open) {
                let diff = close - open

                if (option < diff) return false
                option -= diff
                open += diff
            }
        }
    }

    return open ===close 
};
console.log(checkValidString(s = "(*))"))