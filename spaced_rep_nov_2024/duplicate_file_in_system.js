/**
 * @param {string[]} paths
 * @return {string[][]}
 */

// Time & Space: O(n * l)...l is the longest path in paths
var findDuplicate = function(paths) {
    let groups = new Map()
    for (let path of paths) {
        let arr = path.split(" ")
        for (let i = 1; i < arr.length; i++) {
            let file = arr[i], value = "", prefix = ""
            let leftIdx = 0
            while (file[leftIdx] !== "(") {
                prefix += file[leftIdx]
                leftIdx++
            }
            leftIdx++
            while (file[leftIdx] !== ")") {
                value += file[leftIdx]
                leftIdx++
            }
            
            if (!groups.has(value)) groups.set(value, [])
            groups.get(value).push(arr[0] + "/" + prefix)
        }
    }
    let result = []
    for (let group of Array.from(groups.values())) {
        if (group.length > 1) {
            result.push(group)
        }
    }
    return result
};
console.log(findDuplicate(paths = ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)"]))