function solve() {

   let totalPrice = 0;
   let productObj = {};
   
   const addButtonElements = document.querySelectorAll('button.add-product');
   const addButtonsArr = Array.from(addButtonElements);
   addButtonsArr.forEach(el => {
      el.addEventListener('click', addHandler);
   })

   let textArea = document.querySelector('textarea');
   let allButtonsInHtml = document.querySelectorAll('button');

   let checkoutButton = document.querySelector('.checkout');
   checkoutButton.addEventListener('click', checkoutFn);

   function addHandler(e) {
      let currentelement = e.target;
      let divProduct = currentelement.parentElement.parentElement;
      // качвам се 2 родителя на горе по дървото за да взема продукт-Дива

      let productTitle = divProduct.querySelector('.product-title');
      let product = productTitle.textContent;

      let priceTag = divProduct.querySelector('.product-line-price');
      let price = Number(priceTag.textContent);

      totalPrice += price;

      productObj[product] = true;
      textArea.value += `Added ${product} for ${price.toFixed(2)} to the cart.\n`
   }

   function checkoutFn() {
      allButtonsInHtml.forEach(btn => btn.setAttribute("disabled", ""));
      let nameProduct = Object.keys(productObj).join(', ');
      textArea.value += `You bought ${nameProduct} for ${totalPrice.toFixed(2)}.`
   }
}