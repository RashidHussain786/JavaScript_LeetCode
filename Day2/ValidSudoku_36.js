var isValidSudokuByBruteForce = function (board)  {
    // Check each row
    for (let row = 0; row < 9; row++) {
      const rowSet = new Set();
      for (let col = 0; col < 9; col++) {
        const currentVal = board[row][col];
        if (currentVal !== '.') {
          if (rowSet.has(currentVal)) {
            return false;
          }
          rowSet.add(currentVal);
        }
      }
    }
  
    // Check each column
    for (let col = 0; col < 9; col++) {
      const colSet = new Set();
      for (let row = 0; row < 9; row++) {
        const currentVal = board[row][col];
        if (currentVal !== '.') {
          if (colSet.has(currentVal)) {
            return false;
          }
          colSet.add(currentVal);
        }
      }
    }
  
    // Check each sub-box
    for (let box = 0; box < 9; box++) {
      const boxSet = new Set();
      const startRow = Math.floor(box / 3) * 3;
      const startCol = (box % 3) * 3;
      for (let rowOffset = 0; rowOffset < 3; rowOffset++) {
        for (let colOffset = 0; colOffset < 3; colOffset++) {
          const currentVal = board[startRow + rowOffset][startCol + colOffset];
          if (currentVal !== '.') {
            if (boxSet.has(currentVal)) {
              return false;
            }
            boxSet.add(currentVal);
          }
        }
      }
    }
  
    return true;
  };

  var isValidSudoku = function(board) {
    const rows = new Array(9).fill().map(() => new Set());
    const cols = new Array(9).fill().map(() => new Set());
    const boxes = new Array(9).fill().map(() => new Set());

 for (let row = 0; row < 9; row++) {
   for (let col = 0; col < 9; col++) {
     const currentVal = board[row][col];
     if (currentVal !== '.') {
       const boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);
       if (
         rows[row].has(currentVal) ||cols[col].has(currentVal) ||
         boxes[boxIndex].has(currentVal)
       ) {
         return false;
       }
       rows[row].add(currentVal);
       cols[col].add(currentVal);
       boxes[boxIndex].add(currentVal);
     }
   }
 }

 return true;
};
  
// Example Usages:

const board = [["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

console.log(isValidSudokuByBruteForce(board));
console.log(isValidSudoku(board));