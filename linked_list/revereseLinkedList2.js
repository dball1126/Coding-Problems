// Stack, two-pointer
// Time and Space: O(n)
var reverseBetween = function(head, left, right) {
    let stack = [], curr = head
    left--; right--;
    while (curr) {
        stack.push(curr)
        curr = curr.next;
    }

    while (left < right) {
        let tempR = stack[right]
        let tempL = stack[left]
        let tempLPrev = stack[left-1], tempLNext = stack[left+1]
        let tempRPrev = stack[right-1], tempRNext = stack[right+1]
        tempR.next = null; tempL.next = null;
        if (left + 1 === right) {
            if (tempLPrev) tempLPrev.next = tempR
            if (tempRNext) tempL.next = tempRNext;
            tempR.next = tempL
        } else {
            if (tempLPrev) tempLPrev.next = tempR
            if (tempRPrev) tempRPrev.next = tempL
            if (tempLNext) tempR.next = tempLNext;
            if (tempRNext) tempL.next = tempRNext;
        }
        stack[left] = tempR;
        stack[right] = tempL
        if (left === 0) head = tempR
        left++
        right--
    }
    return head;
};

