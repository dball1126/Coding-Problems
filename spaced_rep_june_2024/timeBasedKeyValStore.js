
var TimeMap = function() {
    this.timeMap = new Map()
    this.uniId = "T:" + Math.random() * 1000
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (!this.timeMap.has(key)) {
        this.timeMap.set(key, new Map())
        this.timeMap.set(key + "stack", [])
    }
    this.timeMap.get(key).set(timestamp, value)
    this.timeMap.get(key + "stack").push([timestamp, value])
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if (!this.timeMap.has(key)) return "";
    if (!this.timeMap.get(key).has(timestamp)) {
        let stack = this.timeMap.get(key + "stack")
        let l = 0, r = stack.length-1;
        let k = ""
        while (l <= r) {
            let m = Math.floor((r + l) / 2)
            let [t, v] = stack[m]
            if (t  > timestamp) {
                r = m - 1
            } else {
                if (t <= timestamp) k = v
                l = m + 1
                
            }
        }
        return k
    } else {
        return this.timeMap.get(key).get(timestamp)
    }
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
*/
var timeMap = new TimeMap()
timeMap.set("love", "high", 10);
timeMap.set("love", "low", 20); 
console.log(timeMap.get("love", 25))