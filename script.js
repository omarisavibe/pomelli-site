/* --- POMELLI LUXURY STORE ENGINE --- */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. THE CATALOGUE (Simulated Data mimicking Supabase)
    const inventory = [
        {
            id: 101,
            name: "The Sovereign Carrot Gâteau",
            category: "whole",
            price: 125.00,
            desc: "Four layers of heritage carrot sponge, walnut, and amber rum.",
            image: "https://rfwlaucrlfohxrrspxmx.supabase.co/storage/v1/object/public/pomelli-gallery/sovereign-carrot-cake-whole.jpg"
        },
        {
            id: 102,
            name: "Gilded Afternoon Slice",
            category: "slice",
            price: 18.50,
            desc: "A single generous serving, plated with gold-leaf pecan garnish.",
            image: "https://rfwlaucrlfohxrrspxmx.supabase.co/storage/v1/object/public/pomelli-gallery/carrot-cake-slice-art-deco-plate.jpg"
        },
        {
            id: 103,
            name: "The Beatrix Box",
            category: "gift",
            price: 85.00,
            desc: "A flight of four petite cakes in our signature storybook packaging.",
            // Using placeholder, would ideally be the packaging shot
            image: "https://rfwlaucrlfohxrrspxmx.supabase.co/storage/v1/object/public/pomelli-gallery/carrot-cake-manor-interior.jpg"
        },
        {
            id: 104,
            name: "Butler Service à la Russe",
            category: "service",
            price: 350.00,
            desc: "Tableside service for 8 guests. Silverware included.",
            image: "https://rfwlaucrlfohxrrspxmx.supabase.co/storage/v1/object/public/pomelli-gallery/butler-service-caramel-drip.jpg"
        },
        {
            id: 105,
            name: "The Midnight Tray",
            category: "whole",
            price: 90.00,
            desc: "A smaller loaf suited for the private study or library.",
            image: "https://rfwlaucrlfohxrrspxmx.supabase.co/storage/v1/object/public/pomelli-gallery/sovereign-carrot-cake-whole.jpg"
        }
    ];

    // 2. STATE MANAGEMENT
    let cart = [];
    const cartSidebar = document.getElementById('cart-sidebar');
    const productGrid = document.getElementById('product-grid');
    const cartContents = document.getElementById('cart-contents');
    const totalDisplay = document.getElementById('cart-total');
    const countDisplay = document.getElementById('cart-count');

    // 3. INITIAL RENDER
    renderProducts('all');

    // 4. FUNCTION: RENDER PRODUCTS
    function renderProducts(filter) {
        productGrid.innerHTML = '';
        
        const filteredItems = filter === 'all' 
            ? inventory 
            : inventory.filter(item => item.category === filter);

        filteredItems.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('product-card');
            
            card.innerHTML = `
                <div class="card-image-wrap">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="card-details">
                    <p class="p-name">${product.name}</p>
                    <p class="p-desc">${product.desc}</p>
                    <p class="p-price">$${product.price.toFixed(2)}</p>
                    <button class="add-btn" data-id="${product.id}">Add to Trunk</button>
                </div>
            `;
            productGrid.appendChild(card);
        });

        // Re-attach event listeners to new buttons
        document.querySelectorAll('.add-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.target.dataset.id);
                addToCart(id);
            });
        });
    }

    // 5. FUNCTION: FILTER CLICKS
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            // UI Toggle
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            // Logic
            renderProducts(e.target.dataset.filter);
        });
    });

    // 6. FUNCTION: ADD TO CART
    function addToCart(id) {
        const item = inventory.find(i => i.id === id);
        cart.push(item);
        updateCart();
        openCart();
    }

    // 7. FUNCTION: REMOVE FROM CART (Helper)
    window.removeItem = function(index) {
        cart.splice(index, 1);
        updateCart();
    }

    // 8. FUNCTION: UPDATE CART UI
    function updateCart() {
        // Count
        countDisplay.innerText = cart.length;

        // Total
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        totalDisplay.innerText = '$' + total.toFixed(2);

        // List Items
        if (cart.length === 0) {
            cartContents.innerHTML = '<p class="empty-cart-msg">Your trunk awaits selection.</p>';
        } else {
            cartContents.innerHTML = cart.map((item, index) => `
                <div class="cart-item">
                    <img src="${item.image}" alt="thumb">
                    <div>
                        <div style="font-family:'Cinzel'; color: #1a0f0d; font-size: 0.9rem;">${item.name}</div>
                        <div style="color: #721121;">$${item.price.toFixed(2)}</div>
                        <a href="#" onclick="removeItem(${index})" style="font-size: 0.8rem; color: #999;">Remove</a>
                    </div>
                </div>
            `).join('');
        }
    }

    // 9. DRAWER TOGGLE
    window.toggleCart = function() {
        cartSidebar.classList.toggle('open');
    }

    function openCart() {
        cartSidebar.classList.add('open');
    }
});
