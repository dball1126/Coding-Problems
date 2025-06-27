/**
 * @param {number} n
 */
var TicTacToe = function(n) {
     this.cols = new Map() // O(n*2)
     this.rows = new Map() // O(n*2)
     this.antiDiags = new Map() // O(n)
     this.diags = new Map() // O(n)
    this.size = n;
    this.moves = 0;
};

/** 
 * @param {number} row 
 * @param {number} col 
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function(row, col, player) {
    if (!this.rows.has(player)) this.rows.set(player, new Map())
    if (!this.cols.has(player)) this.cols.set(player, new Map())
    if (!this.antiDiags.has(player)) this.antiDiags.set(player, 0)
    if (!this.diags.has(player)) this.diags.set(player, 0)

    this.moves++
    let antiDiag = row + col === this.size -1
    let diag = row === col

    // handle anti diags
    if (antiDiag) {
        this.antiDiags.set(player, this.antiDiags.get(player) + 1)
        if (this.antiDiags.get(player) === this.size) return player;
    } 
    // handle diags
    else if (diag) {
        this.diags.set(player, this.diags.get(player) + 1)
        if (this.diags.get(player) === this.size) return player;
    }

    // handle rows
    let gamePlayer = this.rows.get(player)
    if (!gamePlayer.has(row)) gamePlayer.set(row, 0)
    gamePlayer.set(row, gamePlayer.get(row) + 1)

    if (gamePlayer.get(row) === this.size) return player

    // handle cols
    gamePlayer = this.cols.get(player)
    if (!gamePlayer.has(col)) gamePlayer.set(col, 0)
    gamePlayer.set(col, gamePlayer.get(col) + 1)

    if (gamePlayer.get(col) === this.size) return player

    if (this.moves === this.size * 2) return 0 // game over
    return 0
};
var ticTacToe = new TicTacToe(3)
console.log(ticTacToe.move(0, 0, 1))
console.log(ticTacToe.move(0, 2, 2));
console.log(ticTacToe.move(2, 2, 1));
console.log(ticTacToe.move(1, 1, 2));
console.log(ticTacToe.move(2, 0, 1))
console.log(ticTacToe.move(1, 0, 2))
console.log(ticTacToe.move(2, 1, 1))

// [[3],[2,0,1],[0,0,2],[0,1,1],[0,2,2],[2,1,1],[1,1,2],[1,2,1],[2,2,2]]
/** 
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */