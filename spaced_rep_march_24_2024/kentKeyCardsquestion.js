// Company workers use key-cards to unlock office doors. Each time a worker uses their key-card, the security system saves the worker's name and the time when it was used. 
// The system emits an alert if any worker uses the key-card three or more times in a one-hour period.

// You are given a list of strings keyName and keyTime where [keyName[i], keyTime[i]] corresponds to a person's name and the time when their 
// key-card was used in a single day.

// Access times are given in the 24-hour time format "HH:MM", such as "23:51" and "09:49".

// Return a list of unique worker names who received an alert for frequent keycard use. Sort the names in ascending order alphabetically.

// Notice that "10:00" - "11:00" is considered to be within a one-hour period, while "22:51" - "23:52" is not considered to be within a one-hour period.


const alertNames = (keyName, keyTime) => {
    const namesMap = new Map()
    let result = []
    for (let i = 0; i < keyName.length; i++) { // pre-processing
        let name = keyName[i]
        let [hours, mins] = keyTime[i].split(":")
        let time = parseInt(hours * 60) + mins
        if (!namesMap.has(name)) namesMap.set(name, [])
        namesMap.get(name).push(time)
    }

    for (let [name, times] of namesMap) {
        times.sort((a, b) => a - b)
        for (let i = 0; i < times.length -2; i++) {
            let t1 = times[i], t2 = times[i+1], t3 = times[i+2]
            if (t1 + 60 <= t2 && t1 + 60 <= t3) {
                result.push(name)
                break;
            }
        }
    }

    return result.sort()
}
console.log(alertNames( ["a","a","a","a","a","a","b","b","b","b","b"], ["23:27","03:14","12:57","13:35","13:18","21:58","22:39","10:49","19:37","14:14","10:41"]))