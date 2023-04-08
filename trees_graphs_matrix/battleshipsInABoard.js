/**
 * @param {character[][]} board
 * @return {number}
 */
// Matrix Traversal
// Time: O(r * c)...row * columns
// SpaceL O(1)
var countBattleships = function(board) {
    let battleShips = 0;
    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[r].length; c++) {
            let up = '', left = ''
            if (r-1 >= 0) up = board[r-1][c]
            if (c-1 >= 0) left = board[r][c-1]

            if (board[r][c] === 'X' && up !== 'X' && left !== 'X') {
                battleShips++
            }
        }
    }
    return battleShips
};
console.log(countBattleships(board = [["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]])) // = 2
