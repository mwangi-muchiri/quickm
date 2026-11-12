const offerProducts = [
  {
    id: 101,
    name: 'Glow Vitamin C Serum',
    brand: 'Glow Lab',
    category: 'Skin care',
    price: 1199,
    oldPrice: 1599,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80',
    description: 'A lightweight serum for a fresh-looking skincare routine.'
  },
  {
    id: 102,
    name: 'Daily Hydration Cream',
    brand: 'Skin Ritual',
    category: 'Skin care',
    price: 1399,
    oldPrice: 1899,
    image: 'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=800&q=80',
    description: 'A rich-feeling face cream for everyday moisture.'
  },
  {
    id: 103,
    name: 'Gentle Face Cleanser',
    brand: 'Pure Form',
    category: 'Skin care',
    price: 899,
    oldPrice: 1199,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    description: 'A simple cleanser to start or finish your skincare routine.'
  },
  {
    id: 104,
    name: 'Daily Sun Cream SPF 50',
    brand: 'Sun Day',
    category: 'Skin care',
    price: 1599,
    oldPrice: 2199,
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80',
    description: 'A daily sunscreen for your morning routine.'
  },
  {
    id: 105,
    name: 'NuVita Milk Biscuits',
    brand: 'NuVita',
    category: 'Snacks',
    price: 120,
    oldPrice: 150,
    image: 'nuvita%20price.jpg',
    imageFit: 'contain',
    description: 'Crisp milk biscuits for a quick snack or tea break.'
  },
  {
    id: 106,
    name: 'NuVita Ginger Biscuits',
    brand: 'NuVita',
    category: 'Snacks',
    price: 80,
    oldPrice: 100,
    image: 'ginger.jpg',
    imageFit: 'contain',
    description: 'Ginger biscuits with a warm, spicy flavour.'
  },
  {
    id: 107,
    name: 'NuVita Digestive Biscuits',
    brand: 'NuVita',
    category: 'Snacks',
    price: 145,
    oldPrice: 180,
    image: 'digestive.jpg',
    imageFit: 'contain',
    description: 'A 200 g box of digestive biscuits.'
  },
  {
    id: 108,
    name: 'Digestive Biscuits Big Pack',
    brand: 'NuVita',
    category: 'Snacks',
    price: 280,
    oldPrice: 350,
    image: 'big%20packet.jpg',
    imageFit: 'contain',
    description: 'A larger pack for sharing or stocking the pantry.'
  },
  {
    id: 121,
    name: 'Almond Biscuits',
    brand: 'Bakery',
    category: 'Snacks',
    price: 200,
    oldPrice: 250,
    image: 'Bisquit.jpg',
    imageFit: 'contain',
    description: 'Golden biscuits topped with sliced almonds.'
  },
  {
    id: 122,
    name: 'Classic Digestive Biscuits',
    brand: 'Bakery',
    category: 'Snacks',
    price: 120,
    oldPrice: 150,
    image: 'bis.jpg',
    imageFit: 'contain',
    description: 'Classic digestive biscuits for tea time.'
  },
  {
    id: 109,
    name: 'Everyday Cotton Tee',
    brand: 'Daywear',
    category: 'Clothing',
    price: 1299,
    oldPrice: 1799,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
    description: 'A versatile short-sleeve tee for everyday outfits.'
  },
  {
    id: 110,
    name: 'Relaxed Fit Hoodie',
    brand: 'Daywear',
    category: 'Clothing',
    price: 2499,
    oldPrice: 3299,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80',
    description: 'A comfortable layer for cooler days and relaxed weekends.'
  },
  {
    id: 111,
    name: 'Classic Denim Jeans',
    brand: 'Street Edit',
    category: 'Clothing',
    price: 2799,
    oldPrice: 3699,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80',
    description: 'Easy-to-style denim with a timeless everyday look.'
  },
  {
    id: 112,
    name: 'Weekend Light Jacket',
    brand: 'Street Edit',
    category: 'Clothing',
    price: 3899,
    oldPrice: 4999,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80',
    description: 'A lightweight jacket to finish a casual outfit.'
  },
  {
    id: 113,
    name: 'Classic Street Sneakers',
    brand: 'Move Easy',
    category: 'Shoes',
    price: 3499,
    oldPrice: 4499,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
    description: 'Everyday sneakers with a clean, sporty look.'
  },
  {
    id: 114,
    name: 'Active Run Shoes',
    brand: 'Move Easy',
    category: 'Shoes',
    price: 4999,
    oldPrice: 6499,
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80',
    description: 'Lightweight running shoes for walks and active days.'
  },
  {
    id: 115,
    name: 'Canvas Slip-ons',
    brand: 'Sole Mate',
    category: 'Shoes',
    price: 1999,
    oldPrice: 2699,
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80',
    description: 'Easy slip-on shoes for casual everyday wear.'
  },
  {
    id: 116,
    name: 'Comfort Walk Trainers',
    brand: 'Sole Mate',
    category: 'Shoes',
    price: 3299,
    oldPrice: 4299,
    image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=800&q=80',
    description: 'Comfortable trainers for errands and weekend plans.'
  },
  {
    id: 117,
    name: 'Tropical Fruit Drink',
    brand: 'FruitVille',
    category: 'Drinks',
    price: 200,
    oldPrice: 250,
    image: 'tropical%20juice.webp',
    imageFit: 'contain',
    description: 'A bright tropical fruit drink in a handy bottle.'
  },
  {
    id: 118,
    name: 'Peach & Pear Fruit Drink',
    brand: 'FruitVille',
    category: 'Drinks',
    price: 200,
    oldPrice: 250,
    image: 'sponsored.webp',
    imageFit: 'contain',
    description: 'A peach and pear fruit drink for a refreshing break.'
  },
  {
    id: 119,
    name: 'Red Grape Juice',
    brand: 'Del Monte',
    category: 'Drinks',
    price: 280,
    oldPrice: 350,
    image: 'red%20grape.webp',
    imageFit: 'contain',
    description: 'A red grape juice blend in a convenient carton.'
  },
  {
    id: 120,
    name: 'Apple Juice',
    brand: 'Pick n Peel',
    category: 'Drinks',
    price: 280,
    oldPrice: 350,
    image: 'greenspon.jpg',
    imageFit: 'contain',
    description: 'Apple juice in a resealable carton.'
  }
];

const offerProductGrid = document.getElementById('offerProductGrid');
const offerSearchForm = document.getElementById('offerSearchForm');
const offerSearch = document.getElementById('offerSearch');
const offerStatus = document.getElementById('offerStatus');
const offerProductCount = document.getElementById('offerProductCount');
const offerFilters = document.querySelectorAll('[data-offer-category]');
const offerCartPanel = document.getElementById('offerCartPanel');
const offerCartItems = document.getElementById('offerCartItems');
const offerCartTotal = document.getElementById('offerCartTotal');
const offerCartCount = document.getElementById('offerCartCount');
const offerCart = [];
let activeOfferCategory = 'all';

function formatOfferPrice(amount) {
  return `KSh ${new Intl.NumberFormat('en-KE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount)}`;
}

function renderOfferProducts() {
  const query = offerSearch.value.trim().toLowerCase();
  const visibleProducts = offerProducts.filter((product) => {
    const matchesCategory = activeOfferCategory === 'all' || product.category === activeOfferCategory;
    const searchableText = `${product.name} ${product.brand} ${product.category} ${product.description}`;
    return matchesCategory && window.shopSearchMatches(query, searchableText);
  });

  offerProductCount.textContent = `${visibleProducts.length} ${visibleProducts.length === 1 ? 'deal' : 'deals'}`;
  offerStatus.textContent = visibleProducts.length
    ? ''
    : `No offers found for "${offerSearch.value.trim()}". Try another search or category.`;
  offerProductGrid.innerHTML = visibleProducts.map((product) => {
    const discount = Math.round((1 - product.price / product.oldPrice) * 100);
    const imageClass = product.imageFit === 'contain' ? 'offer-product-image contain' : 'offer-product-image';
    return `
      <article class="offer-product-card">
        <div class="${imageClass}">
          <img src="${product.image}" alt="${product.brand} ${product.name}" />
          <span class="offer-discount">-${discount}%</span>
          <span class="offer-category">${product.category}</span>
        </div>
        <div class="offer-product-info">
          <p class="catalog-product-brand">${product.brand}</p>
          <h3>${product.name}</h3>
          <p class="offer-description">${product.description}</p>
          <div class="offer-price-row">
            <div>
              <strong>${formatOfferPrice(product.price)}</strong>
              <del>${formatOfferPrice(product.oldPrice)}</del>
            </div>
            <button type="button" class="add-button" data-offer-add="${product.id}">Add</button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function renderOfferCart() {
  if (!offerCart.length) {
    offerCartItems.innerHTML = '<div class="empty-cart"><p>Your basket is empty.</p></div>';
    offerCartTotal.textContent = formatOfferPrice(0);
    offerCartCount.textContent = '0';
    return;
  }

  offerCartItems.innerHTML = offerCart.map((item) => `
    <div class="cart-item">
      <div class="cart-thumb" style="background-image: url('${item.image}')"></div>
      <div>
        <h4>${item.name}</h4>
        <small>${formatOfferPrice(item.price)}</small>
        <div class="item-controls">
          <div class="qty-controls">
            <button type="button" aria-label="Decrease ${item.name} quantity" data-offer-change="-1" data-offer-id="${item.id}">-</button>
            <span>${item.quantity}</span>
            <button type="button" aria-label="Increase ${item.name} quantity" data-offer-change="1" data-offer-id="${item.id}">+</button>
          </div>
          <button type="button" class="remove-button" data-offer-remove="${item.id}">Remove</button>
        </div>
      </div>
      <strong>${formatOfferPrice(item.price * item.quantity)}</strong>
    </div>
  `).join('');

  const subtotal = offerCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = offerCart.reduce((sum, item) => sum + item.quantity, 0);
  offerCartTotal.textContent = formatOfferPrice(subtotal);
  offerCartCount.textContent = String(itemCount);
}

function addOfferToCart(id) {
  const product = offerProducts.find((item) => item.id === id);
  if (!product) return;

  const existingItem = offerCart.find((item) => item.id === id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    offerCart.push({ ...product, quantity: 1 });
  }

  renderOfferCart();
  offerCartPanel.classList.add('open');
}

function changeOfferQuantity(id, amount) {
  const itemIndex = offerCart.findIndex((item) => item.id === id);
  if (itemIndex < 0) return;

  offerCart[itemIndex].quantity += amount;
  if (offerCart[itemIndex].quantity <= 0) offerCart.splice(itemIndex, 1);
  renderOfferCart();
}

offerFilters.forEach((button) => {
  button.addEventListener('click', () => {
    activeOfferCategory = button.dataset.offerCategory;
    offerFilters.forEach((filter) => filter.classList.toggle('active', filter === button));
    renderOfferProducts();
  });
});

offerSearch.addEventListener('input', renderOfferProducts);
offerSearchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  renderOfferProducts();
  document.getElementById('offerCatalog').scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener('click', (event) => {
  const addButton = event.target.closest('[data-offer-add]');
  if (addButton) {
    addOfferToCart(Number(addButton.dataset.offerAdd));
    return;
  }

  const changeButton = event.target.closest('[data-offer-change]');
  if (changeButton) {
    changeOfferQuantity(Number(changeButton.dataset.offerId), Number(changeButton.dataset.offerChange));
    return;
  }

  const removeButton = event.target.closest('[data-offer-remove]');
  if (removeButton) {
    const itemIndex = offerCart.findIndex((item) => item.id === Number(removeButton.dataset.offerRemove));
    if (itemIndex >= 0) offerCart.splice(itemIndex, 1);
    renderOfferCart();
    return;
  }

  if (event.target.closest('#offerCartToggle')) offerCartPanel.classList.add('open');
  if (event.target.closest('#offerCartClose')) offerCartPanel.classList.remove('open');
});

renderOfferProducts();
renderOfferCart();
