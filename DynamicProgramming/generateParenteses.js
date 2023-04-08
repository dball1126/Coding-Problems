/**
 * 1....n    = ()
 * So () for every n value
 * dp(n) = "(" + dp(n-1) + ")" + ( "()" + dp(n-1) )
 * if n === 1 reuturn ()
 */

 //3

// dp(3): "(" +"(())" + "()()" + ")"
// dp(2): "(" + "()" +")" +  "() + dp(1)" ---------> "(())" "()()"                   =  ((()))       ()(())       ()()() (()())
// dp(1): "( + "" +  )"



// base case: 1 = ()
// return "" for out of bounds or n < 0
// State var: n for the current num
// DP array which holds a sub array of values



// ()()()

// (()())