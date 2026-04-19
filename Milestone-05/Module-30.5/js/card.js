
const handleAddProducts = () => {
          const productEl =document.getElementById("product");
          const quantityEl = document.getElementById("quantity");
          const product = productEl.value ;
          const quantity =quantityEl.value;

displayProduct(product,quantity)
addProductToCart(product,quantity)
//  console.log('Product add',product,quantity);
 productEl.value = '';
 quantityEl.value = '';
  }

const getCart = () => {
          const card ={};
          
          return card;
}
const addProductToCart = (product,quantity) => {
const cart = getCart();
cart[product] = quantity;
console.log('cart',cart);
}



  const displayProduct = (product,quantity) => {
          const li =document.createElement('li');
          li.innerText = `${product} : ${quantity}`
          const ul = document.getElementById("products-container");

          ul.appendChild(li);
  }
