/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
// Hash Map
// Time: 2n = O(n)
// Space: O(n)
var customSortString = function(order, s) {
    if (!order) return s;
    let map = new Map(), perm = "";
    for (let c of order) {
        if (!map.has(c)) map.set(c,[])
    }
    map.set("any", [])
    for (let c of s) {
        if (map.has(c)) {
            map.get(c).push(c)
        } else {
            map.get("any").push(c)
        }
    }
    for (let i = order.length-1; i >= 0; i--) {
        let arr = map.get(order[i])
        perm = arr.join("") + perm
    }
    perm = perm + map.get("any").join("");
    return perm
};
console.log(customSortString(order = "bcafg", s = "abcd" ))// = "cbad"

// order = "cba", s = "abcd" 

/**
 * 
    dcba
 * 
 */