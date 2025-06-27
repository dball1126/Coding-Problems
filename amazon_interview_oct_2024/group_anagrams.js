/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    let map = new Map()
    for (let str of strs) {
        let key = 0
        for (let s of str) {
            let code = s.charCodeAt()
            let hash = code - 'a'.charCodeAt() + code - 'z'.charCodeAt() + code
            key += hash
        }
        if (!map.has(key)) map.set(key, [])
        map.get(key).push(str)
       
    }
    return Array.from(map.values())
};
console.log(groupAnagrams(trs = ["ddddddddddg","dgggggggggg"]))