var longestNiceSubstring = function(s) {
    let upper = new Set(), lower = new Set(), longest = ""
    let b = 0, e = 0, subString = "", subLower = new Set(), subUpper = new Set()
    for (let char of s) {
        let c = char.toLowerCase()
        if (char === c) {
            lower.add(char)
        } else {upper.add(char)}
    }

    while (e < s.length) {
        let down = s[e].toLowerCase(), up = s[e].toUpperCase()

        if (upper.has(up) && lower.has(down)) {
            if (s[e] === up) {
                subUpper.add(s[e])
            } else {
                subLower.add(s[e])
            }
        }
        
        if (e+1 >= s.length || !upper.has(up) || !lower.has(down)) {
            // slide left pointer right
            while ( b <= e) {
                let bDown = s[b].toLowerCase(), bUp = s[b].toUpperCase()
                if (subUpper.has(bUp) && subLower.has(bDown)) {
                    subString += s[b]
                }
                if ((b  === e) || !subUpper.has(bUp) || !subLower.has(bDown)) {
                    let subsetLow = new Set(), subsetHigh = new Set()

                    for (let c of subString) {
                        let cL = c.toLowerCase(), cUp = c.toUpperCase()
                        if (c === cL) {
                            subsetLow.add(c)
                        } else {
                            subsetHigh.add(c)
                        }
                    }
                    if (subsetLow.size === subsetHigh.size) {
                        if (subString.length > longest.length) {
                            longest = subString
                        }
                    }
                    
                    subString = ""
                }
                if (b === e) {
                    subLower = new Set()
                    subHigher = new Set()
                    subString = ""
                    break
                }
                b++
            }
        }
        e++
    }
    return longest
};

console.log(longestNiceSubstring("YazaAay"))