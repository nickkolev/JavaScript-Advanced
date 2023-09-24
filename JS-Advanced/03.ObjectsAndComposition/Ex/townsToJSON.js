function solve(towns) {

    // Transform data to matrix
    const matrix = towns.map((row) => 
        row.trim()
            .split('|')
            .map((cell) => cell.trim())
    ).map((row) => row.filter((cell) => cell !== ''));

    // Determine header and value data
    const headers = matrix[0];
    const data = matrix.slice(1);

    // MAP data
    const result = data.map(row => {
        const tempDict = {};

        headers.forEach((header, index) => {
            const tryParseToNum = Number(row[index]);
            tempDict[header] = isNaN(tryParseToNum) ? row[index] : Number(tryParseToNum.toFixed(2));
        });

        return tempDict
    });

    console.log(JSON.stringify(result));
}

solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']);

solve(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']);