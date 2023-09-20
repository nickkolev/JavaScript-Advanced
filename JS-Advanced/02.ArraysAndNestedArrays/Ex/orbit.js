function solve(input) {

    const[width, height, x, y] = input;

    let board = new Array(width).fill().map(() => new Array(height).fill(0));

    board[x][y] = 1;

    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            if(board[row][col] === 1) {
                continue;
            } else {
                // Calculate the Manhattan distance
                const dx = Math.abs(x - row);
                const dy = Math.abs(y - col);

                // The diagonal distance is the minimum of dx and dy
                const diagonalDistance = Math.min(dx, dy);
                // The non-diagonal distance is the absolute difference between dx and dy
                const nonDiagonalDistance = Math.abs(dx - dy);

                // The total distance is the sum of diagonal and non-diagonal distances
                const totalDistance = diagonalDistance + nonDiagonalDistance;

                board[row][col] = totalDistance + 1;
            }
        }
    }

    printBoard();
    function printBoard() {
        for (let row = 0; row < board.length; row++) {
            console.log(board[row].join(' '));
        }
    }
}

//solve([4, 4, 0, 0]);
//solve([5, 5, 2, 2]);
solve([3, 3, 2, 2]);