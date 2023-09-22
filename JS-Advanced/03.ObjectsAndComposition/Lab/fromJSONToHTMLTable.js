function solve(input) {
    const arrOfObj = JSON.parse(input);

    let result = '<table>\n';

    result += '\t<tr>';
    Object.keys(arrOfObj[0]).forEach(n => result += `<th>${escapeHtml(n)}</th>`);
    result += '</tr>\n';

    for (const obj of arrOfObj) {
        result += '\t<tr>';
        Object.values(obj).forEach(e => result += `<td>${escapeHtml(e)}</td>`);
        result += '</tr>\n';
    }

    result += '</table>';

    function escapeHtml(str) {
        return str
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
    console.log(result);
}

solve(`[{"Name":"Stamat", "Score":5.5},
{"Name":"Rumen", "Score":6}]`);

solve(`[
{"Name":"Pesho", "Score":4, " Grade":8},
{"Name":"Gosho", "Score":5, " Grade":8},
{"Name":"Angel", "Score":5.50, " Grade":10}]`);