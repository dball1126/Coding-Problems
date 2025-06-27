
// Greedy
// Time and Space: O(n)
var partitionLabels = function(str) {
    let result = [], sMap = new Map(), curr = "", count = 0, currSet = new Set()
    
    for( let s of str) {
        if (!sMap.has(s)) sMap.set(s, 0)
        sMap.set(s, sMap.get(s) + 1)
    }

    for( let s of str) {
      if (!currSet.has(s)) {
        currSet.add(s)
        count += sMap.get(s)
      }
      count--
      curr += s

      if (count === 0) {
        result.push(curr.length)
        count = 0, curr = "", currSet = new Set()
      }
    }

    if (!result.length) result.push(str.length)
    return result;
};
console.log(partitionLabels(s = "ababcbacadefegdehijhklij"))// = [9,7,8]
