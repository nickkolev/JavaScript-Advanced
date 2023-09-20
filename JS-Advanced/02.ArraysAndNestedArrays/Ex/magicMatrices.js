function solve(matrix) {

    let sum = matrix[0].reduce((acc, el) => acc + el);


    for (let row = 0; row < matrix.length; row++) {
        
        let currentRowSum = matrix[row].reduce((acc, el) => acc + el);
        if(currentRowSum !== sum) {
            console.log('false');
            return;
        }

        let currentColSum = 0;
        for (let col = 0; col < matrix.length; col++) {
            currentColSum += matrix[row][col];
        }

        if(currentColSum !== sum) {
            console.log('false');
            return;
        }
    }

    console.log('true');
}

solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   );

solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   );

solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   );