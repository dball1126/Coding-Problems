/**
 * @param {number} n
 */
var TicTacToe = function(n) {
    this.size = n;
    
    this.cols = [...new Array(n)]
    this.rows = [...new Array(n)]
    this.diags = [...new Array(n)]
    this.antiDiags = [...new Array(n)]

};

/** 
 * @param {number} row 
 * @param {number} col 
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function(row, col, player) {
    const isAntiDiag = (r, c) => r + c === 0
};

/** 
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */