// Add any extra import statements you may need here


// Add any helper functions you may need here

// Hash Map
// Time & Space: O(n)
function numberOfWays(arr, k) {
    let charMap = new Map(), pairs = 0
    for (let c of arr) {
        if (!charMap.has(c)) charMap.set(c, 0)
        charMap.set(c, charMap.get(c) + 1)
    }

    for(let c of arr) {
        let diff = (k - c)

        if (diff === 0) {
            pairs++

            if (charMap.has(diff)) {
                pairs += charMap.get(diff)
                if (c === diff) pairs--
            }
        } else if (charMap.has(diff)) {
            pairs += charMap.get(diff)
            if (c === diff) pairs--
        }

        charMap.set(c, charMap.get(c) - 1)
        if (charMap.get(c) === 0) charMap.delete(c)
    }

    return pairs
}

console.log(numberOfWays([1, 5, 3, 3, 3], 6))

// [0,3,3,5,1] 6
// 1: 1

// 6 - 0
// 3 === 3        pairs += 1
// 3 === 3        pairs += 0
// 5 + 1 = 6        pairs += 1

  