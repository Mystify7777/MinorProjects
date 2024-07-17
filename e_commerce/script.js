// Sample data - replace with actual product data when implemented
const products = [
    {
      id: 1,
      name: 'Product 1',
      image: 'images/product1.jpg',
      price: 19.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      rating: 4.5,
      reviews: [
        { user: 'User1', comment: 'Great product!', rating: 5 },
        { user: 'User2', comment: 'Not bad, but could be better.', rating: 3.5 }
      ]
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'images/product2.jpg',
      price: 29.99,
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      rating: 3.8,
      reviews: [
        { user: 'User3', comment: 'Excellent value for money.', rating: 4.5 },
        { user: 'User4', comment: 'Could use more features.', rating: 3 }
      ]
    },
    {
      id: 3,
      name: 'Product 3',
      image: 'images/product3.jpg',
      price: 39.99,
      description: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
      rating: 4.2,
      reviews: [
        { user: 'User5', comment: 'Good quality, fast delivery.', rating: 4 },
        { user: 'User6', comment: 'Satisfied with the purchase.', rating: 4.2 }
      ]
    }
  ];
  
  // Function to initialize the page
  function initializePage() {
    // Load products on the page
    displayProducts(products);
  
    // Event listener for dark mode toggle
    const darkModeToggle = document.querySelector('#darkModeToggle');
    darkModeToggle.addEventListener('change', toggleDarkMode);
  }
  
  // Function to display products on the page
  function displayProducts(products) {
    const productsContainer = document.querySelector('.products-container');
    productsContainer.innerHTML = '';
  
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
  
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-details">
          <h3>${product.name}</h3>
          <p>$${product.price.toFixed(2)}</p>
          <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
      `;
  
      productsContainer.appendChild(productCard);
    });
  }
  
  // Function to add product to cart
  function addToCart(productId) {
    // Implement cart functionality here
    console.log(`Product added to cart: ${productId}`);
  }
  
  // Function to toggle dark mode
  function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
  }
  
  // Initialize the page
  initializePage();
  