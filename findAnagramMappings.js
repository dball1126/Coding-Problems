// HashMap
// Time & Space: O(n)
var anagramMappings = function(nums1, nums2) {
    const numMap = new Map(), mappings = []
    for (let i = 0; i < nums2.length; i++) {
        if (!numMap.has(nums2[i])) numMap.set(nums2[i], [])
        numMap.get(nums2[i]).push(i)
    }
    for (let i = 0; i < nums1.length; i++) {
        mappings.push(numMap.get(nums1[i]).shift())
    }
    return mappings
};
console.log(anagramMappings([84,46], nums2 = [84,46])) // = [0,1]