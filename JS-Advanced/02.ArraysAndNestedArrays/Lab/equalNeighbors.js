function solve(matrix) {

    let equalPairs = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if(row == matrix.length - 1) {
                // last row => check only on the right side.
                if((matrix[row][col] == matrix[row][col + 1])) {
                    equalPairs++;
                }
            } else if(col == matrix[row].length - 1) {
                // last column => check only on the down side.
                if((matrix[row][col] == matrix[row + 1][col])) {
                    equalPairs++;
                }
            } else {
                // Here we must check for equals on the right side as well as on the down side.
                if((matrix[row][col] == matrix[row][col + 1])) {
                    equalPairs++;
                }
                if((matrix[row][col] == matrix[row + 1][col])) {
                    equalPairs++;
                }
            }
        }
    }

    return equalPairs;
}

function solve2(matrix) {
    let equalPairs = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row < matrix.length - 1 && matrix[row][col] == matrix[row + 1][col]) {
                // Check if the element has an equal neighbor below it.
                equalPairs++;
            }
            if (col < matrix[row].length - 1 && matrix[row][col] == matrix[row][col + 1]) {
                // Check if the element has an equal neighbor to its right.
                equalPairs++;
            }
        }
    }

    return equalPairs;
}

solve([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
);

solve([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
);

solve(
    [[2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]])