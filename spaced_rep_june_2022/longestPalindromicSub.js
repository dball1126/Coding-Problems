var longestPalindrome = function(str) {
    if (!str || str.length <= 1) return str;
    let result = str[0]

    const validate = (s, e) => {
        while (s >= 0 && e < str.length && str[s] === str[e]) {
            if (result.length < (e - s + 1)) {
                result = str.substring(s, e + 1)
            }
            e--
            s++
        }
    }
    for (let i = 1; i < str.length; i++) {
        validate(i-1, i+1)
        validate(i-1, i)
    }

    return result;
};