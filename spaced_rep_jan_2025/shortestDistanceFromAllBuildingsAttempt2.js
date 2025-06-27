class Node {
    constructor(value) {
        this.value = value;
        this.next = undefined;
    }
}
class Queue {
    constructor() {
        this.head = new Node();
        this.tail = this.head;
        this.count = 0
    }
    
    enqueue(value) {
        this.tail.next = new Node(value);
        this.tail = this.tail.next;
        this.count++;
    }
    
    dequeue() {
        const { value } = this.head.next;
        this.head = this.head.next;
        this.count--;
        return value;
    }

    isEmpty() {
        return this.count === 0
      }
}

var shortestDistance = function(grid) {
    let rLen = grid.length, cLen = grid[0].length;
    let minDistance = Infinity, buildings = 0;
    let dirs = [[-1,0],[1,0],[0,-1],[0,1]];
    for (let r = 0; r < rLen; r++) {
        for (let c = 0; c < cLen; c++) {
            if (grid[r][c] === 1) {
                buildings++;
            }
        }
    }

    for (let row = 0; row < rLen; row++) {
        for (let col = 0; col < cLen; col++) {
            if (grid[row][col] === 0) {
                let distance = 0, queue = new Queue(), visited = new Set(), count = 0;
                queue.enqueue([row, col, 0]);
                visited.add(row + ":" + col);

                while (!queue.isEmpty()) {
                    let item = queue.dequeue();
                    let r = item[0]
                    let c = item[1]
                    let d = item[2]

                    if (grid[r][c] === 1) {
                        distance += d
                        count++; continue;
                    }
                    for (let [x, y] of dirs) {
                        let dx = r + x, dy = c + y;
                        if (dx >= 0 && dy >= 0 && dx < rLen && dy < cLen) {
                        
                            if (!visited.has(dx + ":" + dy) && grid[dx][dy] !== 2) {
                                visited.add(dx +":" + dy);
                                queue.enqueue([dx, dy, d + 1])
                            }
                        }
                    }
                    if (count === buildings) break;
                }
               
                if (count === buildings) {
                    minDistance = Math.min(minDistance, distance)
                } else {
                    grid[row][col] = 2;
                }
            }
        }
    }
    return minDistance === Infinity ? -1 : minDistance;
};
console.log(shortestDistance([[1,0,2,0,1],[0,0,0,0,0],[0,0,1,0,0]]))