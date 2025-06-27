var isPalindrome = function(s) {
    let i = 0, j = s.length-1

    const validate = (v) => {
        v = v.toLocaleLowerCase()
        let min = "a".charCodeAt()
        let max = "z".charCodeAt()

        let val = v.charCodeAt();
        let minNum = "0".charCodeAt()
        let maxNum = "9".charCodeAt()

        return (val >= min && val <= max) || (val >= minNum && val <= maxNum)
    }

    while (i < j) {
        while (i < s.length && !validate(s[i])) i++
        while (j >= 0 && !validate(s[j])) j--
       if (i > j) return true
        if (s[i].toLocaleLowerCase() !== s[j].toLocaleLowerCase()) {
            return false;
        }
        i++; j--;
    }
    return true;
};
console.log(isPalindrome("Ppp"))