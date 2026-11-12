const products = [
  {
    id: 1,
    name: 'Tropical Fruit Drink',
    brand: 'FruitVille',
    category: 'Drinks',
    type: 'Fruit drink',
    price: 2.5,
    image: 'tropical%20juice.webp',
    description: 'A bright tropical fruit drink in a handy bottle.'
  },
  {
    id: 2,
    name: 'Peach & Pear Fruit Drink',
    brand: 'FruitVille',
    category: 'Drinks',
    type: 'Fruit drink',
    price: 2.5,
    image: 'sponsored.webp',
    description: 'A peach and pear fruit drink for a refreshing break.'
  },
  {
    id: 3,
    name: 'Red Grape Juice',
    brand: 'Del Monte',
    category: 'Drinks',
    type: 'Juice',
    price: 3,
    image: 'red%20grape.webp',
    description: 'Del Monte red grape juice blend.'
  },
  {
    id: 4,
    name: 'Red Grape Juice',
    brand: 'Pick n Peel',
    category: 'Drinks',
    type: 'Juice',
    price: 3,
    image: 'peel%20red.webp',
    description: 'Pick n Peel red grape juice in a family-size carton.'
  },
  {
    id: 5,
    name: 'Juo Fruit Drink',
    brand: 'Juo',
    category: 'Drinks',
    type: 'Fruit drink',
    price: 2.5,
    image: 'juo.jpg',
    description: 'A colourful Juo fruit drink in a convenient bottle.'
  },
  {
    id: 6,
    name: 'Apple Juice',
    brand: 'Pick n Peel',
    category: 'Drinks',
    type: 'Juice',
    price: 3,
    image: 'greenspon.jpg',
    description: 'Pick n Peel apple juice in a resealable carton.'
  },
  {
    id: 7,
    name: 'Milk Biscuits',
    brand: 'NuVita',
    category: 'Biscuits',
    type: 'Biscuits',
    price: 150,
    image: 'nuvita%20price.jpg',
    description: 'A pack of crisp NuVita milk biscuits.'
  },
  {
    id: 8,
    name: 'Ginger Biscuits',
    brand: 'NuVita',
    category: 'Biscuits',
    type: 'Biscuits',
    price: 100,
    image: 'ginger.jpg',
    description: 'NuVita ginger biscuits with a warm, spicy flavour.'
  },
  {
    id: 9,
    name: 'Digestive Biscuits',
    brand: 'NuVita',
    category: 'Biscuits',
    type: 'Biscuits',
    price: 180,
    image: 'digestive.jpg',
    description: 'A 200 g box of NuVita digestive biscuits.'
  },
  {
    id: 10,
    name: 'Almond Biscuits',
    brand: 'Bakery',
    category: 'Biscuits',
    type: 'Biscuits',
    price: 250,
    image: 'Bisquit.jpg',
    description: 'Golden biscuits topped with sliced almonds.'
  },
  {
    id: 11,
    name: 'Digestive Biscuits',
    brand: 'Bakery',
    category: 'Biscuits',
    type: 'Biscuits',
    price: 150,
    image: 'bis.jpg',
    description: 'Classic digestive biscuits, pictured ready to serve.'
  },
  {
    id: 12,
    name: 'Digestive Biscuits Big Pack',
    brand: 'NuVita',
    category: 'Biscuits',
    type: 'Biscuits',
    price: 350,
    image: 'big%20packet.jpg',
    description: 'A larger pack of NuVita digestive biscuits.'
  }
];

const catalogProducts = document.getElementById('catalogProducts');
const catalogSearchForm = document.getElementById('catalogSearchForm');
const catalogSearch = document.getElementById('catalogSearch');
const catalogStatus = document.getElementById('catalogStatus');
const catalogCount = document.getElementById('catalogCount');
const catalogFilters = document.querySelectorAll('.catalog-filter');
const cartPanel = document.getElementById('cartPanel');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');
const cart = [];
let activeCategory = 'all';

function formatPrice(price) {
  return `KSh ${new Intl.NumberFormat('en-KE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(price)}`;
}

function renderProducts() {
  const query = catalogSearch.value.trim().toLowerCase();
  const visibleProducts = products.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const searchableText = `${product.name} ${product.brand} ${product.category} ${product.type} ${product.description}`;
    return matchesCategory && window.shopSearchMatches(query, searchableText);
  });

  catalogCount.textContent = `${visibleProducts.length} ${visibleProducts.length === 1 ? 'product' : 'products'}`;
  catalogStatus.textContent = visibleProducts.length
    ? ''
    : `No products found for "${catalogSearch.value.trim()}". Try another search or filter.`;
  catalogProducts.innerHTML = visibleProducts.map((product) => `
    <article class="catalog-product-card">
      <div class="catalog-product-image">
        <img src="${product.image}" alt="${product.brand} ${product.name}" />
        <span>${product.category === 'Biscuits' ? product.brand : product.type}</span>
      </div>
      <div class="catalog-product-info">
        <p class="catalog-product-brand">${product.brand}</p>
        <h3>${product.name}</h3>
        <p class="catalog-product-description">${product.description}</p>
        <div class="catalog-product-footer">
          <strong>${formatPrice(product.price)}</strong>
          <button class="add-button" type="button" data-add-id="${product.id}">Add to basket</button>
        </div>
      </div>
    </article>
  `).join('');
}

function renderCart() {
  if (!cart.length) {
    cartItems.innerHTML = '<div class="empty-cart"><p>Your basket is empty.</p></div>';
    cartTotal.textContent = formatPrice(0);
    cartCount.textContent = '0';
    return;
  }

  cartItems.innerHTML = cart.map((item) => `
    <div class="cart-item">
      <div class="cart-thumb" style="background-image: url('${item.image}')"></div>
      <div>
        <h4>${item.name}</h4>
        <small>${item.brand} · ${formatPrice(item.price)}</small>
        <div class="item-controls">
          <div class="qty-controls">
            <button type="button" aria-label="Decrease ${item.name} quantity" data-change="-1" data-id="${item.id}">−</button>
            <span>${item.quantity}</span>
            <button type="button" aria-label="Increase ${item.name} quantity" data-change="1" data-id="${item.id}">+</button>
          </div>
          <button class="remove-button" type="button" data-remove-id="${item.id}">Remove</button>
        </div>
      </div>
      <strong>${formatPrice(item.price * item.quantity)}</strong>
    </div>
  `).join('');

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartTotal.textContent = formatPrice(subtotal);
  cartCount.textContent = String(itemCount);
}

function addToCart(id) {
  const product = products.find((item) => item.id === id);
  if (!product) return;

  const item = cart.find((entry) => entry.id === id);
  if (item) {
    item.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  renderCart();
  cartPanel.classList.add('open');
}

function changeQuantity(id, change) {
  const itemIndex = cart.findIndex((entry) => entry.id === id);
  if (itemIndex < 0) return;

  cart[itemIndex].quantity += change;
  if (cart[itemIndex].quantity <= 0) cart.splice(itemIndex, 1);
  renderCart();
}

catalogFilters.forEach((button) => {
  button.addEventListener('click', () => {
    activeCategory = button.dataset.category;
    catalogFilters.forEach((filter) => filter.classList.toggle('active', filter === button));
    renderProducts();
  });
});

catalogSearch.addEventListener('input', renderProducts);
catalogSearchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  renderProducts();
  document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener('click', (event) => {
  const addButton = event.target.closest('[data-add-id]');
  if (addButton) {
    addToCart(Number(addButton.dataset.addId));
    return;
  }

  const quantityButton = event.target.closest('[data-change]');
  if (quantityButton) {
    changeQuantity(Number(quantityButton.dataset.id), Number(quantityButton.dataset.change));
    return;
  }

  const removeButton = event.target.closest('[data-remove-id]');
  if (removeButton) {
    const itemIndex = cart.findIndex((item) => item.id === Number(removeButton.dataset.removeId));
    if (itemIndex >= 0) cart.splice(itemIndex, 1);
    renderCart();
    return;
  }

  if (event.target.closest('#cartToggle')) cartPanel.classList.add('open');
  if (event.target.closest('#closeCart')) cartPanel.classList.remove('open');
});

renderProducts();
renderCart();
