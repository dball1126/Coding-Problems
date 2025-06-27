function birthday(s, d, m) {
    let ways = 0, l = 0, r = 0
    let curr = 0, currLength = 0
    while (r < s.length) { // slide right pointer right

        curr += s[r]; currLength++

        if (currLength === m || curr >= d) {

            while (currLength === m || curr >= d) { // slide left pointer right

                if (currLength === m && curr === d) {
                    ways++
                }
                currLength--
                curr-= s[l]
                l++
            }

        }
        r++
    }

    return ways;
}
console.log(birthday([2,2,1,3,2], 4, 2))