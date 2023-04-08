/**
 * Time & Space: O(n)
 * Queue of indexes
 */
var timeRequiredToBuy = function(tickets, k) {
    let time = 0, queue = tickets.map((v, i) => i)
    while (queue.length) {
        let ticket = queue.shift();
        tickets[ticket]--;
        time++;

        if (tickets[ticket] > 0) queue.push(ticket)
        if (k === ticket && tickets[k] === 0) return time;
    }
    return time;
};

console.log(timeRequiredToBuy(tickets = [5,1,1,1], k = 0))