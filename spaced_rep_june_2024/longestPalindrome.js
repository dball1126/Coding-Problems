/**
 * @param {string} s
 * @return {number}
 */

// HashMap, Palindromes
// Time & Space: O(n)
var longestPalindrome = function(s) {
    let map = new Map()
    let maxEvenLength = 0, maxOddLength = 0

    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) map.set(s[i], 0)
        map.set(s[i], map.get(s[i]) + 1)
    }

    for (let [k, v] of map) {
        if (v % 2 === 0) {
            maxEvenLength += v
        } else {
            maxOddLength = Math.max(maxOddLength, v)
        }
    }
    return maxEvenLength + maxOddLength
};
console.log(longestPalindrome("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"))