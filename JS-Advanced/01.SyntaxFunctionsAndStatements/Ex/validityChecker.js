function solve(x1, y1, x2, y2) {
    isValidPoint(x1, y1, 0, 0);
    isValidPoint(x2, y2, 0, 0);
    isValidPoint(x1, y1, x2, y2);

    function isValidPoint(x1, y1, x2, y2) {
        let result = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

        if (Number.isInteger(result)) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }
}

solve(3, 0, 0, 4);
solve(2, 1, 1, 1);
