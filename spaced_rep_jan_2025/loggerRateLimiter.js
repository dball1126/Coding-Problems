
var Logger = function() {
  this.rateLimit = new Map();  
};

/** 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    let canPrint = false;
    if (!this.rateLimit.has(message)) {
        canPrint = true;
        this.rateLimit.set(message, timestamp);
    } else if (timestamp - this.rateLimit.get(message) >= 10) {
        canPrint = true;
        this.rateLimit.set(message, timestamp);
    }
    return canPrint;
};


/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */