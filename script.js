/* ===== Product Data ===== */
const products = [
  { id: 1, name: "Royal Gold Necklace", price: "₹1,25,000", category: "gold", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop", description: "Exquisite 22K gold necklace with traditional design" },
  { id: 2, name: "Diamond Bridal Set", price: "₹3,50,000", category: "bridal", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop", description: "Stunning bridal jewellery set with diamonds" },
  { id: 3, name: "Silver Anklet Pair", price: "₹4,500", category: "silver", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop", description: "Elegant silver anklets for everyday grace" },
  { id: 4, name: "Gold Jhumka Earrings", price: "₹28,000", category: "gold", image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&h=400&fit=crop", description: "Traditional gold jhumka with intricate work" },
  { id: 5, name: "Bridal Gold Choker", price: "₹2,80,000", category: "bridal", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=400&h=400&fit=crop", description: "Magnificent choker for the perfect bridal look" },
  { id: 6, name: "Silver Ring Collection", price: "₹2,200", category: "silver", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop", description: "Minimalist silver rings for daily wear" },
  { id: 7, name: "Daily Wear Gold Chain", price: "₹45,000", category: "daily", image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&h=400&fit=crop", description: "Lightweight 18K gold chain for everyday elegance" },
  { id: 8, name: "Temple Gold Pendant", price: "₹18,500", category: "gold", image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=400&fit=crop", description: "Sacred temple design gold pendant" },
  { id: 9, name: "Silver Bangle Set", price: "₹8,500", category: "silver", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop", description: "Set of 4 handcrafted silver bangles" },
  { id: 10, name: "Daily Wear Studs", price: "₹12,000", category: "daily", image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=400&h=400&fit=crop", description: "Simple yet elegant gold stud earrings" },
  { id: 11, name: "Bridal Maang Tikka", price: "₹65,000", category: "bridal", image: "https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?w=400&h=400&fit=crop", description: "Ornate maang tikka with kundan work" },
  { id: 12, name: "Gold Bracelet", price: "₹55,000", category: "daily", image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop", description: "Sleek gold bracelet for modern styling" },
];

/* ===== SVG Icons ===== */
const icons = {
  search: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  eye: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>`,
  bag: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
  x: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  star: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  menu: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`,
  close: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  mapPin: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>`,
  phone: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>`,
  clock: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  message: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>`,
  whatsapp: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>`,
};

/* ===== State ===== */
let activeCategory = 'all';
let searchQuery = '';

/* ===== DOM Ready ===== */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollAnimations();
  renderProducts();
  initFilters();
  initModals();
});

/* ===== Navbar ===== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  mobileToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    mobileToggle.innerHTML = isOpen ? icons.close : icons.menu;
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      mobileToggle.innerHTML = icons.menu;
    });
  });
}

/* ===== Scroll Animations ===== */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.fade-up, .fade-left, .fade-right, .scale-in').forEach(el => {
    observer.observe(el);
  });
}

/* ===== Render Products ===== */
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const filtered = products.filter(p => {
    const matchCat = activeCategory === 'all' || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<p class="no-products" style="grid-column: 1/-1;">No products found. Try a different search or category.</p>`;
    return;
  }

  grid.innerHTML = filtered.map((p, i) => `
    <div class="glass-card product-card scale-in" style="--i:${i}; transition-delay: ${i * 0.05}s;">
      <div class="product-card-image">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        <div class="product-card-image-overlay"></div>
      </div>
      <div class="product-card-body">
        <h3>${p.name}</h3>
        <p class="desc">${p.description}</p>
        <p class="price gold-gradient-text">${p.price}</p>
        <div class="product-card-buttons">
          <button class="btn-outline" onclick="openLightbox(${p.id})">${icons.eye} View</button>
          <button class="btn-gold" onclick="openOrder(${p.id})">${icons.bag} Order</button>
        </div>
      </div>
    </div>
  `).join('');

  // Re-observe new elements
  setTimeout(() => {
    document.querySelectorAll('.product-card.scale-in').forEach(el => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
      }, { threshold: 0.1 });
      observer.observe(el);
    });
  }, 50);
}

/* ===== Filters ===== */
function initFilters() {
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = btn.dataset.category;
      document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts();
    });
  });

  document.getElementById('searchInput').addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderProducts();
  });
}

/* ===== Modals ===== */
function initModals() {
  document.getElementById('lightboxBackdrop').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeLightbox();
  });
  document.getElementById('orderBackdrop').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeOrder();
  });

  document.getElementById('orderForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const product = products.find(p => p.id === parseInt(document.getElementById('orderForm').dataset.productId));
    const name = document.getElementById('orderName').value;
    const phone = document.getElementById('orderPhone').value;
    const address = document.getElementById('orderAddress').value;

    const productLink = product.image.replace('w=400&h=400', 'w=800&h=800');
    const msg = encodeURIComponent(
`🛒 New Order Request – Sri Krishna Thanga Maligai
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 Name           : ${name}
📞 Mobile Number  : ${phone}
🏠 Address        : ${address}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💍 Product Name   : ${product.name}
💰 Product Price  : ${product.price}
🔗 Product Link   : ${productLink}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`
    );
    window.open(`https://wa.me/918608865811?text=${msg}`, '_blank');
    closeOrder();
    document.getElementById('orderForm').reset();
  });
}

function openLightbox(id) {
  const product = products.find(p => p.id === id);
  const modal = document.getElementById('lightboxBackdrop');
  document.getElementById('lightboxImage').src = product.image.replace('w=400&h=400', 'w=800&h=800');
  document.getElementById('lightboxImage').alt = product.name;
  document.getElementById('lightboxName').textContent = product.name;
  document.getElementById('lightboxDesc').textContent = product.description;
  document.getElementById('lightboxPrice').textContent = product.price;
  modal.classList.add('open');
}

function closeLightbox() {
  document.getElementById('lightboxBackdrop').classList.remove('open');
}

function openOrder(id) {
  const product = products.find(p => p.id === id);
  const modal = document.getElementById('orderBackdrop');
  document.getElementById('orderProductInfo').textContent = `${product.name} — ${product.price}`;
  document.getElementById('orderForm').dataset.productId = id;
  modal.classList.add('open');
}

function closeOrder() {
  document.getElementById('orderBackdrop').classList.remove('open');
}
