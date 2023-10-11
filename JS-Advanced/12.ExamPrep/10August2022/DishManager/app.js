window.addEventListener("load", solve);

function solve() {
  
  const firstNameElement = document.getElementById('first-name');
  const lastNameElement = document.getElementById('last-name');
  const ageElement = document.getElementById('age');
  const genderElement = document.getElementById('genderSelect');
  const descriptionElement = document.getElementById('task');

  const submitButton = document.getElementById('form-btn');
  submitButton.addEventListener('click', handleSubmit);

  const clearButton = document.getElementById('clear-btn');
  clearButton.addEventListener('click', handleClear);

  let dishesInProgressCounter = document.getElementById('progress-count');

  function handleSubmit(e) {
    let firstName = firstNameElement.value;
    let lastName = lastNameElement.value;
    let age = Number(ageElement.value);
    let gender = genderElement.value;
    let description = descriptionElement.value;

    if(firstName === '' || lastName === '' || age === '' || gender === '' || description === ''
    || firstName === undefined || lastName === undefined || age === undefined || gender === undefined || description === undefined) {
      return;
    }

    let fullName = document.createElement('h4');
    fullName.textContent = firstName + ' ' + lastName;

    let info = document.createElement('p');
    info.textContent = gender + ', ' + age;

    let dishDesc = document.createElement('p');
    dishDesc.textContent = 'Dish description: ' + description;

    let article = document.createElement('article');
    article.appendChild(fullName);
    article.appendChild(info);
    article.appendChild(dishDesc);

    let editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', handleEdit);

    let completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-btn');
    completeBtn.textContent = 'Mark as complete';
    completeBtn.addEventListener('click', handleComplete);

    let listItem = document.createElement('li');
    listItem.classList.add('each-line');
    listItem.appendChild(article);
    listItem.appendChild(editBtn);
    listItem.appendChild(completeBtn);

    let ul = document.getElementById('in-progress');
    ul.appendChild(listItem);

    dishesInProgressCounter.textContent = Number(dishesInProgressCounter.textContent) + 1;

    clearInputs();
  }
  
  function handleEdit(e) {

    let firstName = e.target.parentElement.querySelector('h4').textContent.split(' ')[0];
    let lastName = e.target.parentElement.querySelector('h4').textContent.split(' ')[1];
    let gender = e.target.parentElement.querySelector('p').textContent.split(', ')[0];
    let age = e.target.parentElement.querySelector('p').textContent.split(', ')[1];
    let description = e.target.parentElement.querySelector('p:nth-of-type(2)').textContent.split(' ').slice(2).join(' ').trim();

    firstNameElement.value = firstName;
    lastNameElement.value = lastName;
    ageElement.value = age;
    genderElement.value = gender;
    descriptionElement.value = description;

    dishesInProgressCounter.textContent = Math.max(Number(dishesInProgressCounter.textContent) - 1, 0);

    e.target.parentElement.remove();
  }

  function handleComplete(e) {

    let list = e.target.parentElement;

    let editBtn = e.target.parentElement.querySelector('.edit-btn');
    let completeBtn = e.target.parentElement.querySelector('.complete-btn');
    list.removeChild(editBtn);
    list.removeChild(completeBtn);

    let finishedDishesElement = document.getElementById('finished');
    finishedDishesElement.appendChild(list);

    dishesInProgressCounter.textContent = Math.max(Number(dishesInProgressCounter.textContent) - 1, 0);
  }
  
  function handleClear() {
    let finishedDishes = Array.from(document.querySelectorAll('#finished li'));
    finishedDishes.forEach(dish => dish.remove());
  }

  // helper functions
  function clearInputs() {
    firstNameElement.value = '';
    lastNameElement.value = '';
    ageElement.value = '';
    genderElement.value = 'Male';
    descriptionElement.value = '';
  }
}

