var mergeTwoLists = function(list1, list2) {
    if (!list1) return list2
    if (!list2) return list1
    let root = null, curr = null
    while (list1 || list2) {
        if (!root) {
            if (!list1) root = list2
            if (!list2) root = list1
            curr = root;
        } else {
            if (!list1 && !list2) {
                if (list1.val <= list2.val) {
                    curr.next = list1
                    curr = list1
                } else {
                    curr.next = list2
                    curr = list2
                }
            } else {
                if (!list1) curr.next = list2
                if (!list2) curr.next = list1
                curr.left = null;
            }
        }
    }
}
