/* =========================================
   POMELLI ESTATE | INTERACTIVE LOGIC
   Handles: Views, Cart, WhatsApp Concierge
   ========================================= */

// --- STATE MANAGEMENT ---
let cart = []; // Holds the list of items the user adds
const cartBadge = document.getElementById('cart-badge');
const cartDrawer = document.getElementById('cart-drawer');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartTotalElement = document.getElementById('cart-total');
const checkoutModal = document.getElementById('checkout-modal');

// --- 1. VIEW NAVIGATION LOGIC ---

/**
 * Switches between the "Home" view and the "Product Story" view
 * giving the single-page app effect.
 */
function switchView(viewName) {
    // 1. Hide all views
    document.querySelectorAll('.view-section').forEach(el => {
        el.classList.remove('active-view');
    });
    
    // 2. Show the specific view requested
    if (viewName === 'home') {
        document.getElementById('home-view').classList.add('active-view');
        // If returning home, scroll to top smooth
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    if (viewName === 'story') {
        document.getElementById('product-story-view').classList.add('active-view');
        // Force scroll to top immediately so user sees the header
        window.scrollTo(0,0);
    }
}

/**
 * Smooth scrolls down to the Menu section from the Hero
 */
function scrollToMenu() {
    const menuSection = document.getElementById('menu-anchor');
    if (menuSection) {
        menuSection.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * Opens the "Legend" / Story page.
 * In a larger app, this would fetch specific ID data.
 * Here, we route to our dedicated Carrot Cake story page.
 */
function openProductStory(productId) {
    switchView('story');
}


// --- 2. SHOPPING CART LOGIC ---

/**
 * Adds an item to the cart and opens the drawer
 */
function addToCart(name, price, img) {
    const item = {
        name: name,
        price: price,
        img: img
    };

    cart.push(item);
    updateCartUI(); // Refresh the visual list
    openCart();     // Show the trunk
}

/**
 * Removes an item from the cart based on its index
 */
function removeItem(index) {
    cart.splice(index, 1);
    updateCartUI();
}

/**
 * Refreshes the HTML inside the cart drawer based on the 'cart' array
 */
function updateCartUI() {
    // 1. Update Badge Count
    if (cartBadge) {
        cartBadge.innerText = cart.length;
    }

    // 2. Handle Empty State
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align: center; color: #888; margin-top: 40px; font-style:italic;">Your trunk is currently empty, Sir/Madam.</p>';
        cartTotalElement.innerText = "0 EGP";
        return;
    }

    // 3. Render List
    let total = 0;
    cartItemsContainer.innerHTML = cart.map((item, index) => {
        total += item.price;
        return `
            <div class="cart-item-row">
                <img src="${item.img}" class="cart-item-img" alt="${item.name}">
                <div>
                    <div style="font-family:'Cinzel', serif; color: #2A1B18; font-size: 1rem;">${item.name}</div>
                    <div style="color: #721121; font-weight: bold;">${item.price} EGP</div>
                    <div style="font-size:0.8rem; color:#999; cursor:pointer; text-decoration:underline; margin-top:5px;" onclick="removeItem(${index})">Remove</div>
                </div>
            </div>
        `;
    }).join('');

    // 4. Update Total Text
    cartTotalElement.innerText = total + " EGP";
}

/**
 * Slide the Drawer Open
 */
function openCart() {
    if (cartDrawer) {
        cartDrawer.classList.add('cart-open');
    }
}

/**
 * Slide the Drawer Closed
 */
function closeCart() {
    if (cartDrawer) {
        cartDrawer.classList.remove('cart-open');
    }
}


// --- 3. CHECKOUT & WHATSAPP INTEGRATION ---

/**
 * Opens the Concierge Form Modal
 */
function openCheckoutModal() {
    // Logic: Do not open if cart is empty
    if (cart.length === 0) {
        alert("The trunk is empty. We cannot dispatch a ghost carriage.");
        return;
    }
    closeCart(); // Hide drawer
    if (checkoutModal) {
        checkoutModal.classList.add('modal-active'); // Show modal
    }
}

/**
 * Closes the Concierge Form Modal
 */
function closeModal() {
    if (checkoutModal) {
        checkoutModal.classList.remove('modal-active');
    }
}

/**
 * THE BRIDGE TO WHATSAPP
 * Gathers form data, creates message, and opens WhatsApp API.
 */
function submitToWhatsApp() {
    // 1. Gather Data from Input Fields
    const nameField = document.getElementById('c-name');
    const cityField = document.getElementById('c-city');
    const addressField = document.getElementById('c-address');

    const name = nameField ? nameField.value : "";
    const city = cityField ? cityField.value : "";
    const address = addressField ? addressField.value : "";
    
    // 2. Validation
    if (!name || !address) {
        alert("The Concierge requires your Full Name and Street Address to proceed.");
        return;
    }

    // 3. Build the Itemized List
    let orderText = "";
    let finalTotal = 0;
    cart.forEach(item => {
        // Use %0a for new line in URL
        orderText += `- ${item.name} (${item.price} EGP)%0a`;
        finalTotal += item.price;
    });

    // 4. The Destination Number
    // Format: Country code (20) followed by 1024274466
    const phoneNumber = "201024274466"; 

    // 5. Construct the Message
    // Formatting: *Bold Text* 
    const message = 
        `*GREETINGS POMELLI ESTATE*%0a%0a` +
        `My name is ${name}. I wish to acquire:%0a%0a` +
        `${orderText}%0a` +
        `*Total Estimate: ${finalTotal} EGP*%0a%0a` +
        `--------------------------------%0a` +
        `DELIVERY DETAILS:%0a` +
        `Zone: ${city}%0a` +
        `Address: ${address}%0a%0a` +
        `(Generated via Website)`;

    // 6. Generate the API Link
    const url = `https://wa.me/${phoneNumber}?text=${message}`;

    // 7. Send the user to WhatsApp
    window.open(url, '_blank');
    
    // 8. Reset the App (Simulating a completed transaction)
    cart = [];
    updateCartUI();
    closeModal();
}

// Make functions globally available so HTML onclick="" works
window.switchView = switchView;
window.scrollToMenu = scrollToMenu;
window.openProductStory = openProductStory;
window.addToCart = addToCart;
window.removeItem = removeItem;
window.openCart = openCart;
window.closeCart = closeCart;
window.openCheckoutModal = openCheckoutModal;
window.closeModal = closeModal;
window.submitToWhatsApp = submitToWhatsApp;
