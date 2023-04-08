// Time: O(n), Space: O(n)
var findShortestSubArray = function(nums) {
    let degree = -Infinity, adjList = new Map(), minSub = Infinity
    nums.forEach((v, i) => {
        if (!adjList.has(v)) adjList.set(v, [])
        adjList.get(v).push(i)
        degree = Math.max(degree, adjList.get(v).length)
    })
    for(let [key, val] of adjList) {
        if (!(degree === val.length)) continue;
        if (val.length === 1) {
            minSub = 1;
        } else {
            let left = val[0], right = val[val.length-1]
            minSub = Math.min(minSub, right - left + 1)
        }
    }
    return minSub
}; console.log(findShortestSubArray([1,2,2,3,1,4,2])) // = 6