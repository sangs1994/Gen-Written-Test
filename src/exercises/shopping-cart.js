/*
* Shopping Cart Requirements:
* - Before you start, please run `npm run start:api` to start mock API server
* - data for mock APIs come from ./db/db.json
* - There are 2 APIs you need to call:
*     - http://localhost:4002/cart : this will provide a list of product-ids for current shopping cart
*     - http://localhost:4002/products : this will provide a list of products with full details
*
* We want to display detail of items in shopping carts. i.e: user has added product 1001 and 1004 to the cart.
* product 1001 is TV and product 1002 is iPad. Thus, we would like to display them in tabular format
* inside table#shopping-cart-tbl as below:
* ID     Item
* 1001   TV
* 1002   iPad
*
* */
const View = {
  init: () => {
    const tbodyElem = document.getElementById('shopping-cart-tbl').querySelector('tbody');
    console.log('TODO: Please see the above requirement');
  }
};

/***Async/ Await using Arrow function***/
async function getproductDetails() {
  try {
    const response = await fetch("http://localhost:4002/products");
    const products = await response.json();
    return products;
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }  
};

async function getCartItems() {
  try {
    const response = await fetch("http://localhost:4002/cart");
    const cartItems = await response.json();
    return cartItems;
  } catch (error) {
    console.error(`Error: ${error.message}`);
  } 
}

/***Async/ Await using IIFE***/
(async function () {
  const cartItems = await getCartItems();
  const productDetails = await getproductDetails();

  const DisplayCartItems = cartItems.map(itemId => {
    return productDetails.find(product => product.id === itemId.id);
  });

  const table = document.getElementById('shopping-cart-tbl');
  DisplayCartItems.forEach(item => {
        const row = table.insertRow();
        const idRow = row.insertCell(0);
        const itemRow = row.insertCell(1);
        idRow.textContent = item.id;
        itemRow.textContent = item.name; 
    });
})();



document.addEventListener('DOMContentLoaded', View.init);
