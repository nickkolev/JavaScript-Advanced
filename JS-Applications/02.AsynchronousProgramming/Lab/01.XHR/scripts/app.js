function loadRepos() {
   const resDiv = document.getElementById('res');
   const url = 'https://api.github.com/users/testnakov/repos';
   
   function handleXML() {
      if(xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
         resDiv.textContent = xmlHttpRequest.responseText;
      }
   };

   const xmlHttpRequest = new XMLHttpRequest();
   xmlHttpRequest.addEventListener('readystatechange', handleXML);


   xmlHttpRequest.open('GET', url);
   xmlHttpRequest.send();
}