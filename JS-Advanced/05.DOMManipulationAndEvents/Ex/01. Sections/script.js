function create(words) {
   let contentDivElement = document.getElementById('content');

   words.forEach(el => {
      let newDivElement = document.createElement('div');
      let newPElement = document.createElement('p');
      newPElement.textContent = el;
      newPElement.style.display = 'none';

      newDivElement.appendChild(newPElement);
      contentDivElement.appendChild(newDivElement);

      newDivElement.addEventListener('click', clickDivHandler)
   });

   function clickDivHandler(e) {
      //e.target.children[0].style.display === 'none' ? e.target.children[0].style.display = 'inline' : e.target.children[0].style.display = 'none';
      e.target.children[0].style.display = 'inline';
   }
}