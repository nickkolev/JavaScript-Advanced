function colorize() {
    const tableRow = document.querySelectorAll('tr:nth-child(2n)');

    for (let i = 0; i < tableRow.length; i++) {
        tableRow[i].style.background = 'teal';
    }

    return tableRow;
}