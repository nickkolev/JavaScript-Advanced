function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   const rows = document.querySelectorAll('tbody tr');
   const inputField = document.getElementById('searchField');

   function onClick() {
      for (const row of rows) {
         row.classList.remove('select');
         if(inputField.value !== '' && row.textContent.includes(inputField.value)) {
            row.className = 'select';
         }
      }
      inputField.value = '';
   }
}