function solve() {

  let text = (document.getElementById('text').value).toLowerCase().trim().split(" ");
  let namingConvention = document.getElementById('naming-convention').value;

  let result = '';

  if(text.length === 0) {
    return;
  }
  if(namingConvention === 'Camel Case') {
    result = '';
    result += text[0];
    for (let i = 1; i < text.length; i++) {
      result += text[i].charAt(0).toUpperCase() + text[i].substring(1);
    }
  } else if (namingConvention === 'Pascal Case') {
    result = '';
    for (let i = 0; i < text.length; i++) {
      result += text[i].charAt(0).toUpperCase() + text[i].substring(1);
    }
  } else {
    result = 'Error!';
  }

  document.getElementById('result').textContent = result;
}