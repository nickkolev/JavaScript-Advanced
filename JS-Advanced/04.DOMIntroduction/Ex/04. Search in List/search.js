function search() {
   
   const searchText = document.getElementById('searchText').value;
   const townsList = Array.from(document.querySelectorAll('#towns li'));

   let counter = 0;

   for (const town of townsList) {
      if(town.textContent.includes(searchText) && searchText !== '') {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';

         counter++;
      } else {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   }

   let result = document.getElementById('result');
   result.textContent = `${counter} matches found`;
}
