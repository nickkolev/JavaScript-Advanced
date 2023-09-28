function encodeAndDecodeMessages() {
    
    // capture buttons and text containers
    const [encodeBtn, decodeBtn] = Array.from(document.querySelectorAll('#main button'));
    const [encodeTextContainer, decodeTextContainer] = Array.from(document.querySelectorAll('#main textarea'));

    // attach events
    encodeBtn.addEventListener('click', encodeAndSend);
    decodeBtn.addEventListener('click', decodeAndRead);

    // helper functions
    function transformText(text, cb) {
        return text.split('').map(cb).join('');
    }

    function prevChar(c) {
        return String.fromCharCode(c.charCodeAt(0) - 1);
    }

    function nextChar(c) {
        return String.fromCharCode(c.charCodeAt(0) + 1);
    }

    // on click callbacks 
    function encodeAndSend(e) {
        decodeTextContainer.value = transformText(encodeTextContainer.value, nextChar);
        encodeTextContainer.value = '';
    }

    function decodeAndRead(e) {
        decodeTextContainer.value = transformText(decodeTextContainer.value, prevChar);
    }
}