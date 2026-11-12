const products = [
  {
    id: 1,
    name: 'NoiseCancel Pro',
    category: 'Tech',
    price: 199,
    rating: 4.9,
    badge: 'Bestseller',
    description: 'Premium wireless headphones with deep bass and all-day comfort.',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 2,
    name: 'Luma Lamp',
    category: 'Home',
    price: 49,
    rating: 4.8,
    badge: 'New',
    description: 'Soft ambient lighting designed for relaxed evenings and cozy corners.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 3,
    name: 'City Tote',
    category: 'Fashion',
    price: 68,
    rating: 4.7,
    badge: 'Popular',
    description: 'A structured everyday bag with plenty of room and refined details.',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 4,
    name: 'Glow Serum',
    category: 'Beauty',
    price: 36,
    rating: 4.9,
    badge: 'Top rated',
    description: 'Hydrating skin treatment that leaves a dewy, fresh finish.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 5,
    name: 'Smart Watch X',
    category: 'Tech',
    price: 249,
    rating: 4.8,
    badge: 'Hot',
    description: 'Track fitness, notifications, and sleep in a sleek everyday design.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 6,
    name: 'Cozy Throw',
    category: 'Home',
    price: 58,
    rating: 4.7,
    badge: 'Limited',
    description: 'Ultra-soft layered knit for breezy nights and lounge-worthy comfort.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 7,
    name: 'Sculpt Bottle',
    category: 'Fashion',
    price: 42,
    rating: 4.6,
    badge: 'Eco',
    description: 'Reusable insulated bottle built for on-the-go hydration.',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 8,
    name: 'Velvet Mist',
    category: 'Beauty',
    price: 54,
    rating: 4.9,
    badge: 'Best value',
    description: 'A soft floral fragrance that settles beautifully throughout the day.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80'
  }
];

const productGrid = document.getElementById('productGrid');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');
const cartPanel = document.getElementById('cartPanel');
const cartToggle = document.getElementById('cartToggle');
const closeCart = document.getElementById('closeCart');
const filterTabs = document.querySelectorAll('.filter-tab');
const homeSearchForm = document.getElementById('homeSearchForm');
const homeSearch = document.getElementById('homeSearch');
const homeSearchStatus = document.getElementById('homeSearchStatus');

let activeFilter = 'all';
let searchQuery = '';
const cart = [];

function formatCurrency(amount) {
  return `KSh ${new Intl.NumberFormat('en-KE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount)}`;
}

function renderProducts() {
  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeFilter === 'all' || product.category === activeFilter;
    const searchableText = `${product.name} ${product.category} ${product.description}`;
    return matchesCategory && window.shopSearchMatches(searchQuery, searchableText);
  });

  homeSearchStatus.textContent = filteredProducts.length
    ? ''
    : searchQuery
      ? `No products found for "${homeSearch.value.trim()}". Try another search.`
      : 'No products in this category yet.';

  productGrid.innerHTML = filteredProducts.map((product) => `
    <article class="product-card">
      <div class="product-image" style="background-image: url('${product.image}')">
        <span class="product-badge">${product.badge}</span>
      </div>
      <div class="product-info">
        <div class="product-topline">
          <span>${product.category}</span>
          <div class="product-rating">
            <i class="fa-solid fa-star"></i>
            ${product.rating}
          </div>
        </div>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="product-footer">
          <div class="product-price">${formatCurrency(product.price)}</div>
          <button class="add-button" data-product-id="${product.id}">Add</button>
        </div>
      </div>
    </article>
  `).join('');
}

function addToCart(productId) {
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    const product = products.find((item) => item.id === productId);
    cart.push({ ...product, quantity: 1 });
  }

  renderCart();
}

function updateCartItem(productId, change) {
  const item = cart.find((entry) => entry.id === productId);
  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    const index = cart.findIndex((entry) => entry.id === productId);
    cart.splice(index, 1);
  }

  renderCart();
}

function removeFromCart(productId) {
  const index = cart.findIndex((entry) => entry.id === productId);
  if (index >= 0) cart.splice(index, 1);
  renderCart();
}

function renderCart() {
  if (!cart.length) {
    cartItems.innerHTML = `
      <div class="empty-cart">
        <p>Your cart is empty.</p>
      </div>
    `;
    cartTotal.textContent = formatCurrency(0);
    cartCount.textContent = '0';
    return;
  }

  cartItems.innerHTML = cart.map((item) => `
    <div class="cart-item">
      <div class="cart-thumb" style="background-image: url('${item.image}')"></div>
      <div>
        <h4>${item.name}</h4>
        <small>${formatCurrency(item.price)}</small>
        <div class="item-controls">
          <div class="qty-controls">
            <button aria-label="Decrease quantity" data-decrease="${item.id}">-</button>
            <span>${item.quantity}</span>
            <button aria-label="Increase quantity" data-increase="${item.id}">+</button>
          </div>
          <button class="remove-button" data-remove="${item.id}">Remove</button>
        </div>
      </div>
      <strong>${formatCurrency(item.price * item.quantity)}</strong>
    </div>
  `).join('');

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartTotal.textContent = formatCurrency(subtotal);
  cartCount.textContent = String(cart.reduce((sum, item) => sum + item.quantity, 0));
}

filterTabs.forEach((button) => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    filterTabs.forEach((tab) => tab.classList.toggle('active', tab === button));
    renderProducts();
  });
});

homeSearch.addEventListener('input', () => {
  searchQuery = homeSearch.value.trim().toLowerCase();
  renderProducts();
});

homeSearchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  searchQuery = homeSearch.value.trim().toLowerCase();
  renderProducts();
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener('click', (event) => {
  const addButton = event.target.closest('[data-product-id]');
  if (addButton) {
    addToCart(Number(addButton.dataset.productId));
    cartPanel.classList.add('open');
    return;
  }

  const increaseButton = event.target.closest('[data-increase]');
  if (increaseButton) {
    updateCartItem(Number(increaseButton.dataset.increase), 1);
    return;
  }

  const decreaseButton = event.target.closest('[data-decrease]');
  if (decreaseButton) {
    updateCartItem(Number(decreaseButton.dataset.decrease), -1);
    return;
  }

  const removeButton = event.target.closest('[data-remove]');
  if (removeButton) {
    removeFromCart(Number(removeButton.dataset.remove));
  }
});

cartToggle.addEventListener('click', () => {
  cartPanel.classList.toggle('open');
});

closeCart.addEventListener('click', () => {
  cartPanel.classList.remove('open');
});

renderProducts();
renderCart();
