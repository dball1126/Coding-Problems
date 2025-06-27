const validate = (n1, n2) => {
    if (!n1 && !n2) return true;
    if (!n1 || !n2) return false;

    return n1.val === n2.val && validate(n1.left, n2.left) && validate(n1.right, n1.right)
}

const sameTree = (root, subRoot) => {
    if (!n1 && !n2) return true;
    if (!n1 || !n2) return false;

    const stack = [root]
}