function sumTable() {
    const rows = Array.from(document.querySelectorAll('tr'));
    let sum = 0;

    for (let i = 1; i < rows.length; i++) {
        sum += Number(rows[i].lastElementChild.textContent);
        
    }
    
    document.getElementById('sum').textContent = sum;
}