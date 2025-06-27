/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(nums) {

    let rows = new Map(), cols = new Map(), boxes = new Map(), result, empty = 0;

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            if (nums[r][c] === ".") empty++;
            if (!rows.has(r)) rows.set(r, new Set());
            if (!cols.has(c)) cols.set(c, new Set());
            let idx = Math.floor(r / 3) * 3 + Math.floor(c / 3);
            if (!boxes.has(idx)) boxes.set(idx, new Set());
            let v = nums[r][c];
            rows.get(r).add(v);
            cols.get(c).add(v);
            boxes.get(idx).add(v);
        }
    }


    const backtrack = (row, col, empty) => {
        if (result) return;
        if (!empty) return result = nums;
        if (row >= 9) return;
        loop: for (let r = row; r < 9; r++) {
            for (let c = (r === row) ? col : 0; c < 9; c++) {
                if (result) break loop;
                if (nums[r][c] === '.') {
                    for (let v = 1; v <= 9; v++) {
                        v += "";
                        let idx = Math.floor(r / 3) * 3 + Math.floor(c / 3);
                        if (!rows.get(r).has(v) && !cols.get(c).has(v) && !boxes.get(idx).has(v)) {
                            nums[r][c] = v;
                            rows.get(r).add(v);
                            cols.get(c).add(v);
                            boxes.get(idx).add(v);
                            backtrack(r, c + 1, empty - 1);
                            if (result) break loop;
                            nums[r][c] = ".";
                            rows.get(r).delete(v);
                            cols.get(c).delete(v);
                            boxes.get(idx).delete(v);
                        }
                    }
                }
            }
        }
    }
    backtrack(0,0, empty)
};
console.log(solveSudoku(board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]))