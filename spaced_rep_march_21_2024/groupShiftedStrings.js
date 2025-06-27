/**
 * @param {string[]} strings
 * @return {string[][]}
 */
// String Manipulation
// Time && Space: O(n * m )...n for number of strings...m for longest word in strings
var groupStrings = function(strings) {
    let map = new Map()

    const getSeq = (str) => { // O(m)...word length
        let curr = ""
        for (let i = 1; i < str.length; i++) {
            let v1 = str[i-1].charCodeAt(), v2 = str[i].charCodeAt()
            let diff = (v1 - v2)
            if (v1 <= v2){
                curr  += (Math.abs(diff)) + "-"
            } else {
                let newDiff = 26 - diff
                
                curr +=  (newDiff + "-")
            }
        }
        return curr
    }

    for (let str of strings) { // O(n)
        let seq = getSeq(str) 
        if (!map.has(seq)) map.set(seq, [])
        map.get(seq).push(str)
    }

    return Array.from(map.values())
};

console.log(groupStrings(["abc","bcd","acef","xyz","az","ba","a","z"]))
// = [ [ 'abc', 'bcd', 'xyz' ], [ 'acef' ], [ 'az', 'ba' ], [ 'a', 'z' ] ]  


