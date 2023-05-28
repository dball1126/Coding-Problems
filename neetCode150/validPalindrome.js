
// Two Pointer technique
// TIme: O(n)
// Space: O(1)
var isPalindrome = function(str) {
    let s = 0, e = str.length-1
    const charMap = new Set(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
    'p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'])
    while (s < e) {
        
        while (!charMap.has(str[s].toLowerCase()) && s < e) s++
        while (!charMap.has(str[e].toLowerCase()) && s < e) e--
        
        if (str[s].toLowerCase() !== str[e].toLowerCase()) return false;
        s++; e--;
    }
    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama")) // = true
