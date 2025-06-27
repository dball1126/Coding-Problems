/**
 * @param {string[]} strings
 * @return {string[][]}
 */

// HashMap where key is the length of the string and the value is an array of the values
// Time & Space: O(n)...for each string
var groupStrings = function(strings) {
    let map = new Map()
    let max = "z".charCodeAt();

    const getRange = (c1, c2) => {
        return Math.abs(c1.charCodeAt() - c2.charCodeAt())
    }

    const getCharFromRange = (c, range) => {
        let val = c.charCodeAt() + range;
        if (val >= max) val -= (26 - 1)
        return String.fromCharCode(val);
    }

    for (let w of strings) {
        if (!map.has(w.length)) map.set(w.length, [])
        if (!map.get(w.length).length) {
            map.get(w.length).push([w])
        } else {
            let groups = map.get(w.length), allMatch = false;
            for (let group of groups) {
                let word = group[0]
                
                // check if word matches
                let range, match = true
                for (let i = 0; i < word.length; i++) {
                    let c = word[i], c2 = w[i]
                    if (range === undefined) {
                        range = getRange(c, c2)
                    } else {
                        let char = getCharFromRange(c, range)
                        if (char !== c2) {
                            match = false; break;
                        }
                    }
                }
                if (match) {
                    group.push(w); 
                    allMatch = true;
                    break;
                }
            }
            if (!allMatch) {
                groups.push(w)
            }
        }
    }
    return Array.from(map.values())
};
console.log(groupStrings(["abc","bcd","acef","xyz","az","ba","a","z"]))