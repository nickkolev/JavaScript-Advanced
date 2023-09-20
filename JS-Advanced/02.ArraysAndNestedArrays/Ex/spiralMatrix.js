function solve(rows, cols) {

    // Create an empty matrix
  const matrix = Array(rows).fill().map(() => Array(cols).fill(0));

  let num = 1; // Start with the number 1
  let left = 0;
  let right = cols - 1;
  let top = 0;
  let bottom = rows - 1;

  while (num <= rows * cols) {
    // Traverse from left to right along the top row
    for (let i = left; i <= right; i++) {
      matrix[top][i] = num++;
    }
    top++;

    // Traverse from top to bottom along the right column
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = num++;
    }
    right--;

    // Traverse from right to left along the bottom row
    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = num++;
    }
    bottom--;

    // Traverse from bottom to top along the left column
    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = num++;
    }
    left++;
  }

  // Print the matrix
  for (let i = 0; i < rows; i++) {
    console.log(matrix[i].join(' '));
  }
}

solve(5, 5);
solve(3, 3);