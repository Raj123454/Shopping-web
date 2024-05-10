// Sample product data (you can replace this with your own product data)
const products = [
  { name: "Vintage Watch", price: 500 },
  { name: "Antique Chair", price: 1000 },
  { name: "Crystal Vase", price: 300 },
  // Add more products as needed
];

// Function to display products on the page
function displayProducts() {
  const productGrid = document.querySelector('.product-grid');
  productGrid.innerHTML = '';

  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product');

    const productName = document.createElement('h2');
    productName.textContent = product.name;

    const productPrice = document.createElement('p');
    productPrice.textContent = `$${product.price}`;

    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Add to Cart';
    addToCartButton.addEventListener('click', () => addToCart(product));

    productCard.appendChild(productName);
    productCard.appendChild(productPrice);
    productCard.appendChild(addToCartButton);

    productGrid.appendChild(productCard);
  });
}

// Function to add a product to the cart
function addToCart(product) {
  // Here you can implement functionality to add the product to the cart
  console.log(`Added ${product.name} to cart.`);
}

// Initialize the page
displayProducts();
