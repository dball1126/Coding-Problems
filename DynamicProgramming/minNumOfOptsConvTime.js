// Top-Down - Dynamic Programming
// Time & Space: O(m)...where m stands for (correct - current)...times are constant at 4 elements
var convertTime = function(current, correct) {
    current = parseInt(current.split(":").join(""));
    correct = parseInt(correct.split(":").join(""));
    const memo = new Map(), times = [1,5,15,60];
    const dp = (time) => {
        if (time === current) return 0;
        if (memo.has(time)) return memo.get(time);
        let dpVal = Infinity

        const getTime = (tim, val) => {
            let hours = Math.floor(tim / 100) * 100;
            let mins = tim - hours;
            if ((mins - val) >= 0) return hours+ (mins - val)
            hours -= 100
            return hours+ (60 - (Math.abs(mins-val)))
        }

        times.forEach(t => {
            let valTime = getTime(time, t)
            if (current <= valTime && valTime < time) {
                dpVal = Math.min(dpVal, dp(valTime) + 1)
            }
        })
        memo.set(time, dpVal)
        return dpVal;
    }
    let val =  dp(correct)
    return val
};
console.log(convertTime(urrent = "02:30", correct = "04:35")) // = 3