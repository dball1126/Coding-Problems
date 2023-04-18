
var TimeMap = function() {
    this.keys = new Map();
};
// Time: O(1)
TimeMap.prototype.set = function(key, value, timestamp) {
    if (!this.keys.has(key)) {
        const keyMap = new Map();
        keyMap.set(timestamp, value)
        keyMap.set("max", timestamp)
        keyMap.set("min", timestamp)
        this.keys.set(key, keyMap)
    } else {
        const keyMap = this.keys.get(key)
        const max = keyMap.get("max")
        const min = keyMap.get("min")
        keyMap.set(timestamp, value)
        if (timestamp > max) keyMap.set("max", timestamp)
        if (timestamp < min) keyMap.set("min", timestamp)
    }
    
};
// Time: O(1)
TimeMap.prototype.get = function(key, timestamp) {
    const keyMap = this.keys.get(key)
    if (!keyMap) return "";
    const max = keyMap.get("max")
    const min = keyMap.get("min")
    if (keyMap.has(timestamp)) return keyMap.get(timestamp)
    if (max <= timestamp) return keyMap.get(max)
    if (min <= timestamp) return keyMap.get(min)
    return ""
};
