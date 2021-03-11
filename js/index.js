// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  // const price = product.querySelector('.price span');
  // above is code provided in lab. Where is 'product.' coming from? Shouldn't it be 'document.'?
  const price = document.querySelector('.price span');
  let quantity = document.querySelector('.quantity input'); 
  let calculateSubtotal = price.innerHTML * quantity.innherHTML;
  let subTotal = document.querySelector('.subtotal span');
  subTotal.value = calculateSubtotal;
  return calculateSubtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let product = document.getElementsByClassName('product');
  updateSubtotal(product);

  // ITERATION 3
  let subtotal = document.getElementsByClassName('subtotal');
  let total = 0;
    for (let i = 0; i < subtotal.length; i++) {
      total += subtotal[i];
    }
  let totalValue = document.querySelector('.total-value span');
  totalValue.innerHTML = total;
}
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
