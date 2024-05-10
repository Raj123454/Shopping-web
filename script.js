// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

// Add to cart functionality
const cartButtons = document.querySelectorAll('.product-card button');
const cartCount = document.querySelector('.cart span');
let cartItems = 0;

cartButtons.forEach(button => {
  button.addEventListener('click', () => {
    cartItems++;
    cartCount.textContent = cartItems;
    // You can add more functionality here, like updating the cart UI or sending data to a server
  });
});

// Animate product cards on hover
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
  });
});
