// two pointer
// use count which starts at 0
// Time O(n), space O(1)

const urlify = (str, l) => {
    let [count, result, s, e] = [0, "", 0, 0]

    while (e < str.length) {
        if (str[e] === " ") {
            if (result === "" || result.substring(result.length-3, result.length) !== "%20") {
                count ++;
                result += "%20"
            }
            e++;
            s++;
            continue;
        }

        while (str[e] !== undefined && str[e] !== " ") e++;
        
        let word = str.substring(s, e);
        count += word.length
        result += word
        
        while (s !== e) s++
    }

    while (count < l) result += "%20"

    return result;
}

console.log(urlify("  she t ", 7))