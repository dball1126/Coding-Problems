class SegmentTree2D {
    constructor(matrix) {
      this.matrix = matrix;
      this.rows = matrix.length;
      if (this.rows === 0) {
        this.cols = 0;
        this.tree = null;
        return;
      }
      this.cols = matrix[0].length;
      this.tree = this.buildTree(0, 0, this.rows - 1, this.cols - 1);
    }
  
    buildTree(rowStart, colStart, rowEnd, colEnd) {
      if (rowStart === rowEnd && colStart === colEnd) {
        return { sum: this.matrix[rowStart][colStart] };
      }
  
      const rowMid = Math.floor((rowStart + rowEnd) / 2);
      const colMid = Math.floor((colStart + colEnd) / 2);
  
      const topLeft = this.buildTree(rowStart, colStart, rowMid, colMid);
      const topRight = this.buildTree(rowStart, colMid + 1, rowMid, colEnd);
      const bottomLeft = this.buildTree(rowMid + 1, colStart, rowEnd, colMid);
      const bottomRight = this.buildTree(rowMid + 1, colMid + 1, rowEnd, colEnd);
  
      return {
        sum: topLeft.sum + topRight.sum + bottomLeft.sum + bottomRight.sum,
        topLeft,
        topRight,
        bottomLeft,
        bottomRight,
      };
    }
  
    query(row1, col1, row2, col2) {
      if (this.rows === 0 || row1 > row2 || col1 > col2 || row1 < 0 || row2 >= this.rows || col1 < 0 || col2 >= this.cols) {
        return 0;
      }
      return this.queryTree(this.tree, 0, 0, this.rows - 1, this.cols - 1, row1, col1, row2, col2);
    }
  
    queryTree(node, rowStart, colStart, rowEnd, colEnd, row1, col1, row2, col2) {
      if (row1 <= rowStart && rowEnd <= row2 && col1 <= colStart && colEnd <= col2) {
        return node.sum;
      }
  
      if (row2 < rowStart || row1 > rowEnd || col2 < colStart || col1 > colEnd) {
        return 0;
      }
  
      const rowMid = Math.floor((rowStart + rowEnd) / 2);
      const colMid = Math.floor((colStart + colEnd) / 2);
  
      let sum = 0;
  
      if (node.topLeft && row1 <= rowMid && col1 <= colMid) {
        sum += this.queryTree(node.topLeft, rowStart, colStart, rowMid, colMid, row1, col1, row2, col2);
      }
      if (node.topRight && row1 <= rowMid && col2 > colMid) {
        sum += this.queryTree(node.topRight, rowStart, colMid + 1, rowMid, colEnd, row1, col1, row2, col2);
      }
      if (node.bottomLeft && row2 > rowMid && col1 <= colMid) {
        sum += this.queryTree(node.bottomLeft, rowMid + 1, colStart, rowEnd, colMid, row1, col1, row2, col2);
      }
      if (node.bottomRight && row2 > rowMid && col2 > colMid) {
        sum += this.queryTree(node.bottomRight, rowMid + 1, colMid + 1, rowEnd, colEnd, row1, col1, row2, col2);
      }
  
      return sum;
    }
  
    update(row, col, value) {
      if (this.rows === 0 || row < 0 || row >= this.rows || col < 0 || col >= this.cols) {
        return;
      }
      const diff = value - this.matrix[row][col];
      this.matrix[row][col] = value;
      this.updateTree(this.tree, 0, 0, this.rows - 1, this.cols - 1, row, col, diff);
    }
  
    updateTree(node, rowStart, colStart, rowEnd, colEnd, row, col, diff) {
      if (rowStart <= row && row <= rowEnd && colStart <= col && col <= colEnd) {
        node.sum += diff;
        if (rowStart === rowEnd && colStart === colEnd) return;
  
        const rowMid = Math.floor((rowStart + rowEnd) / 2);
        const colMid = Math.floor((colStart + colEnd) / 2);
  
        if (node.topLeft && row <= rowMid && col <= colMid) {
          this.updateTree(node.topLeft, rowStart, colStart, rowMid, colMid, row, col, diff);
        }
        if (node.topRight && row <= rowMid && col > colMid) {
          this.updateTree(node.topRight, rowStart, colMid + 1, rowMid, colEnd, row, col, diff);
        }
        if (node.bottomLeft && row > rowMid && col <= colMid) {
          this.updateTree(node.bottomLeft, rowMid + 1, colStart, rowEnd, colMid, row, col, diff);
        }
        if (node.bottomRight && row > rowMid && col > colMid) {
          this.updateTree(node.bottomRight, rowMid + 1, colMid + 1, rowEnd, colEnd, row, col, diff);
        }
      }
    }
  }
  
  // Example usage:
  const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ];
  
  const segmentTree = new SegmentTree2D(matrix);
  
  console.log(segmentTree.query(1, 1, 3, 3));
  segmentTree.update(0, 0, 100);
  console.log(segmentTree.query(0, 0, 1, 1));
  console.log(segmentTree.query(0, 0, 3, 3));