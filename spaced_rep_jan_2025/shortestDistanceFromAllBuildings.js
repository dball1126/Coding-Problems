/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestDistance = function(grid) {
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    
    const rows = grid.length
    const cols = grid[0].length
    
    const tmp = Array.from(Array(rows),()=> Array(cols).fill(0))
    let emptyLandValue = 0
    
    const isValid = (x,y) => {
        return x < rows && x >= 0 && y < cols && y >= 0 && grid[x][y] === emptyLandValue
    }
    
    let minDistance = Infinity
    
    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            if(grid[i][j] === 1){
                minDistance = Infinity
                
                let queue = [[i,j,0]]
                
                while(queue.length){
                    const currentLength = queue.length
                    const nextQueue = []
                    
                    for(let k=0; k<currentLength; k++){
                        let [x,y,distance] = queue[k]
                        
                        distance++
                        for(const [dx,dy] of directions){
                            const nx = x + dx
                            const ny = y + dy
                            
                            if(isValid(nx,ny)){
                                grid[nx][ny]-- 
                                tmp[nx][ny] += distance
                                minDistance = Math.min(minDistance, tmp[nx][ny])
                                nextQueue.push([nx,ny,distance])
                            }
                        }
                    }
                    queue = nextQueue
                }
                emptyLandValue--
            }
        }
    }
    
    
    return minDistance === Infinity ? -1 : minDistance
};
console.log(shortestDistance([[1,0,1]]))