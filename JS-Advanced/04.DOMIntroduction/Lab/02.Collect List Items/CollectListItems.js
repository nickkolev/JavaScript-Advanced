function extractText() {

    const elements = Array.from(document.querySelectorAll('#items li'));

    let result = '';
    for (const item of elements) {
        result += item.textContent + '\n';
    }

    let textArea = document.getElementById('result');
    textArea.textContent = result;

    /* 
    const list = document.getElementById('items');
    const text = list.textContent;

    const textArea = document.getElementById('result');
    textArea.textContent = text;
    */
}