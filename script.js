/**
 * ============================================================================
 * POMELLI DIGITAL ESTATE | ENGINE CORE
 * Version: 5.2 (The Grand Archive)
 * 
 * Includes:
 * 1. Data Store (Complex HTML Templates)
 * 2. View Management (Modal transitions, Tab switching)
 * 3. Commerce Logic (Cart, Calculation, WhatsApp Integration)
 * 4. "Estate Atmosphere" FX (Canvas Particles, Time-based Logic)
 * ============================================================================
 */

/* ==========================================================================
   MODULE 1: THE DATA ARCHIVES
   (Stores the deep content, texts, and HTML structures for specific items)
   ========================================================================== */

const ARCHIVES = {
    // --- ID: 0 (Sticky Buns) ---
    buns: {
        title: "Estate Sticky Buns",
        price: 850,
        imageHero: "https://rfwlaucrlfohxrrspxmx.supabase.co/storage/v1/object/public/pomelli-gallery/Flow%20Dec%2031%202025.jpeg",
        descShort: "A tray of 12 brioche spirals bathing in a bed of salted brown butter pecan caramel.",
        
        // The Complex Internal Tabs Structure
        htmlContent: `
            <div class="recipe-meta">
                <span class="r-tag"><i class="fa-regular fa-clock"></i> Prep: 30m</span>
                <span class="r-tag"><i class="fa-solid fa-fire"></i> Cook: 30m</span>
                <span class="r-tag"><i class="fa-solid fa-basket-shopping"></i> Yield: 12 Rolls</span>
                <span class="r-tag accent"><i class="fa-solid fa-star"></i> 4.8 Stars (Elizabeth)</span>
            </div>

            <!-- Internal Tabs Control -->
            <div class="internal-tabs">
                <div class="i-tab active" data-target="tc-buns-0" onclick="Pomelli.View.switchInnerTab(this)">The Narrative</div>
                <div class="i-tab" data-target="tc-buns-1" onclick="Pomelli.View.switchInnerTab(this)">Visuals</div>
                <div class="i-tab" data-target="tc-buns-2" onclick="Pomelli.View.switchInnerTab(this)">Reviews</div>
            </div>

            <!-- Content: Narrative -->
            <div class="tab-content active" id="tc-buns-0">
                <p class="r-text-block"><strong class="accent">The Concept:</strong> These soft and buttery cinnamon rolls finished off with an ooey-gooey caramel pecan praline topping are the ultimate holiday breakfast treat. One cannot have a bad day when it starts with caramel pecan sticky buns.</p>
                <p class="r-text-block"><strong>The Dough:</strong> We beat 6 tablespoons of butter into rapid-yeast flour until the gluten creates a 'pillowy soft' texture. We allow it to rise in a warm corner of the estate kitchen for exactly one hour.</p>
                <p class="r-text-block"><strong>The Inversion:</strong> The magic happens upon removal from the oven. We allow the tray to cool slightly before inverting it onto a serving board, letting the heavy caramel pecan slurry cascade over the top.</p>
            </div>

            <!-- Content: Visuals (Specific Request: Glove Image) -->
            <div class="tab-content" id="tc-buns-1">
                <span class="visuals-caption">The Pull-Apart Test</span>
                <div class="provision-card" style="margin-bottom:10px;">
                    <!-- IMAGE: The Sticky Glove -->
                    <img src="sticky_glove.jpg" alt="Sticky Texture Demonstration" style="border-radius:8px;">
                </div>
                <p class="muted" style="text-align:center; font-size:0.9rem;">
                    *Depicting the required elasticity of the dough post-bake. Note the heavy caramel coating.
                </p>
            </div>

            <!-- Content: Reviews -->
            <div class="tab-content" id="tc-buns-2">
                 <div style="background:white; padding:20px; border-radius:8px; border:1px solid #e0e0e0; margin-bottom:15px; box-shadow:0 5px 15px rgba(0,0,0,0.03);">
                    <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
                        <span style="font-family:var(--f-head); font-weight:bold;">Lady Elizabeth</span>
                        <span style="color:var(--gold-leaf);">★★★★★</span>
                    </div>
                    <p class="r-text-block" style="font-size:0.95rem; font-style:italic;">
                        "This was an easy and quick recipe to make! The buns turned out perfectly! Very good flavor, and the rolls were so fluffy and moist at the end! I did have to add roughly another cup to the dough because it was super sticky."
                    </p>
                    <span class="muted" style="font-size:0.8rem;">Verified Guest • July 22, 2024</span>
                 </div>
            </div>
        `
    },

    // --- ID: 1 (Carrot Cake) ---
    cake: {
        title: "Sovereign Carrot Gâteau",
        price: 1250,
        imageHero: "https://rfwlaucrlfohxrrspxmx.supabase.co/storage/v1/object/public/pomelli-gallery/sovereign-carrot-cake-whole.jpg",
        descShort: "Three tiers of heritage carrot sponge, pineapple, and brown-butter cream cheese.",
        
        htmlContent: `
            <div class="recipe-meta">
                <span class="r-tag">Prep: 2 Days</span>
                <span class="r-tag">Serves: 16 People</span>
                <span class="r-tag">Size: Grand A4</span>
                <span class="r-tag accent">Top Rated: 4.81</span>
            </div>

            <div class="internal-tabs">
                <div class="i-tab active" data-target="tc-cake-0" onclick="Pomelli.View.switchInnerTab(this)">Anatomy</div>
                <div class="i-tab" data-target="tc-cake-1" onclick="Pomelli.View.switchInnerTab(this)">Watercolors</div>
                <div class="i-tab" data-target="tc-cake-2" onclick="Pomelli.View.switchInnerTab(this)">Recipe Notes</div>
            </div>

            <!-- Anatomy -->
            <div class="tab-content active" id="tc-cake-0">
                <p class="r-text-block">
                    Inspired by the carrot cake from <strong>Truluck's</strong> and formerly published on Southern Living. This features layers of moist carrot cake with pineapple and coconut.
                </p>
                
                <h4 style="margin:20px 0 10px 0; color:var(--cherry-deep);">The Layers</h4>
                <ul class="ingredients-list">
                    <li><strong>Sponge:</strong> 2 cups Granulated Sugar, 3 cups Grated Carrots, Scant cup Crushed Pineapple.</li>
                    <li><strong>Pecan Praline:</strong> Oven-candied pecans mixed with brown sugar and cinnamon.</li>
                    <li><strong>Liquid Gold:</strong> A homemade butterscotch sauce made from Egg Yolks and Heavy Cream.</li>
                    <li><strong>Frosting:</strong> 8oz Cream Cheese, browned butter, whipped to peak fluffiness.</li>
                </ul>
            </div>

            <!-- Watercolors (Specific Request) -->
            <div class="tab-content" id="tc-cake-1">
                <span class="visuals-caption">Botanical Archives</span>
                <!-- IMAGE: The Watercolor Carrot Cake -->
                <div style="padding:10px; background:white; border:1px solid #ddd; border-radius:8px; box-shadow:var(--shadow-card);">
                    <img src="watercolored carrot cake.jpg" alt="Hand painted illustration" style="width:100%;">
                </div>
                <p class="muted" style="text-align:center; margin-top:15px;">
                    We sketch every confection before it enters the ovens. This illustration dates to the Winter Collection '24.
                </p>
            </div>

            <!-- Notes -->
            <div class="tab-content" id="tc-cake-2">
                 <p class="r-text-block"><strong>Shalini (Review):</strong> <em>"I went into it with low expectations (carrot cake usually isn’t my thing), but this version absolutely knocked it out of the park."</em></p>
                 <hr style="border:0; border-top:1px dashed #ccc; margin:15px 0;">
                 <p class="r-text-block"><strong>Chef's Note:</strong> Use a half sheet pan (13x18"). If the frosting is too soft, chill the cake for 20 minutes between layers. We tend to leave the sides unfrosted for a rustic 'naked' aesthetic.</p>
            </div>
        `
    }
};


/* ==========================================================================
   MODULE 2: APP CONTROLLER (Global Object)
   ========================================================================== */

const Pomelli = {
    // Application State
    state: {
        cart: [],
        easterEggCount: 0, // Tap count on logo
        isMorning: new Date().getHours() < 12
    },

    /* --- INITIALIZATION --- */
    init: function() {
        console.log("Pomelli Estate | Initializing Grand Archives...");
        
        // 1. Initialize Atmospheric FX
        this.FX.initCanvas();
        this.FX.startAnimations();
        
        // 2. Load Cart from Storage
        this.Commerce.loadCart();
        
        // 3. Time-Based Greetings
        this.View.updateGreeting();

        // 4. Attach Easter Egg Listener
        document.querySelector('.nav-logo').addEventListener('click', this.FX.triggerEasterEgg);

        // 5. Entrance Fade In
        setTimeout(() => {
            document.querySelectorAll('.fade-in').forEach(el => el.style.opacity = '1');
        }, 500);
    },


    /* ======================================================================
       MODULE 3: VIEW ENGINE (DOM Manipulation)
       ====================================================================== */
    View: {
        // Tab Switching for the Category Rail
        switchCategory: function(id, btnElement) {
            // Remove active from all tabs
            document.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
            // Add active to clicked
            btnElement.classList.add('active');

            // Hide all Grids
            document.querySelectorAll('.collection-grid').forEach(g => {
                g.classList.remove('active');
                g.style.display = 'none'; // Force repaint
            });

            // Show Target Grid with Animation
            const target = document.getElementById(id);
            target.style.display = 'block';
            setTimeout(() => target.classList.add('active'), 10);
            
            // Haptic Feedback Simulation
            if (navigator.vibrate) navigator.vibrate(5); 
        },

        // Update Text based on time
        updateGreeting: function() {
            const h = new Date().getHours();
            const subtitle = document.querySelector('.stage-subtitle');
            
            if (h >= 5 && h < 12) subtitle.innerText = "Morning Provisions";
            else if (h >= 12 && h < 18) subtitle.innerText = "Afternoon Tea";
            else subtitle.innerText = "Evening Service";
        },

        // Opening the Detailed Sheet (Super Modal)
        openSheet: function(archiveKey) {
            const data = ARCHIVES[archiveKey];
            const sheet = document.getElementById('detail-sheet');
            
            // 1. Set Image
            document.getElementById('sh-img').src = data.imageHero;
            
            // 2. Set Header & Body Text
            const headerHTML = `
                <div class="sheet-title-block">
                    <h2>${data.title}</h2>
                    <p class="muted" style="margin-top:10px;">${data.descShort}</p>
                </div>
            `;
            
            // 3. Inject Content + Internal Tabs
            document.getElementById('sheet-body-content').innerHTML = headerHTML + data.htmlContent;

            // 4. Set Button
            const btn = document.getElementById('sh-btn');
            btn.innerText = `Add To Trunk (${data.price} EGP)`;
            // Clean previous events and attach new one
            btn.onclick = function() { Pomelli.Commerce.add(data.title, data.price); };

            // 5. Reveal
            document.getElementById('backdrop').classList.add('open');
            sheet.classList.add('open');
        },

        // Close Sheets/Modals
        closeAll: function() {
            document.getElementById('backdrop').classList.remove('open');
            document.querySelectorAll('.sheet-modal').forEach(m => m.classList.remove('open'));
            document.querySelectorAll('.drawer').forEach(d => d.classList.remove('open'));
            document.querySelectorAll('.inquiry-modal').forEach(i => i.classList.remove('active'));
        },

        // Internal Tab Switching (Inside the Modal)
        switchInnerTab: function(tabElement) {
            // Find parent container to scope logic (prevents conflict if multiple sheets existed)
            const parentSheet = tabElement.closest('.sheet-modal');
            
            // Tabs
            parentSheet.querySelectorAll('.i-tab').forEach(t => t.classList.remove('active'));
            tabElement.classList.add('active');

            // Content
            const targetID = tabElement.getAttribute('data-target');
            parentSheet.querySelectorAll('.tab-content').forEach(c => {
                c.classList.remove('active');
                if(c.id === targetID) c.classList.add('active');
            });
        }
    },


    /* ======================================================================
       MODULE 4: COMMERCE & CHECKOUT
       ====================================================================== */
    Commerce: {
        
        loadCart: function() {
            const saved = localStorage.getItem('pomelli_cart');
            if (saved) {
                Pomelli.state.cart = JSON.parse(saved);
                this.updateBadge();
            }
        },

        add: function(title, price) {
            // Push to state
            Pomelli.state.cart.push({ title: title, price: price });
            
            // Save Persistence
            localStorage.setItem('pomelli_cart', JSON.stringify(Pomelli.state.cart));
            
            // Update UI
            this.updateBadge();
            Pomelli.View.closeAll();
            
            // Alert (Simulated Notification)
            setTimeout(() => alert("The Butler has placed this item in your trunk."), 200);
        },

        updateBadge: function() {
            const badge = document.getElementById('cart-badge');
            const count = Pomelli.state.cart.length;
            
            badge.innerText = count;
            if (count > 0) badge.classList.add('active');
            else badge.classList.remove('active');
        },

        renderDrawer: function() {
            const container = document.getElementById('cart-list');
            const totalEl = document.getElementById('cart-total');
            const list = Pomelli.state.cart;

            // Empty State
            if (list.length === 0) {
                container.innerHTML = `<p style="text-align:center; padding-top:40px; color:#999;">"An empty trunk is a sad affair."<br><br><span class="script" style="font-size:2rem; color:#ccc;">Pomelli</span></p>`;
                totalEl.innerText = "0 EGP";
                return;
            }

            // Populate List
            let html = "";
            let total = 0;
            
            list.forEach((item, index) => {
                total += item.price;
                html += `
                    <div class="cart-item fade-in" style="animation-delay:${index * 0.1}s">
                        <div style="flex:1">
                            <h4 style="font-size:0.9rem;">${item.title}</h4>
                            <span class="accent">${item.price} EGP</span>
                        </div>
                        <i class="fa-solid fa-xmark" style="color:#ccc; cursor:pointer;" onclick="Pomelli.Commerce.remove(${index})"></i>
                    </div>
                `;
            });

            container.innerHTML = html;
            totalEl.innerText = total + " EGP";
        },

        remove: function(index) {
            Pomelli.state.cart.splice(index, 1);
            localStorage.setItem('pomelli_cart', JSON.stringify(Pomelli.state.cart));
            this.updateBadge();
            this.renderDrawer();
        },

        // WHATSAPP URL GENERATOR
        checkout: function() {
            if (Pomelli.state.cart.length === 0) return alert("Your trunk is empty.");

            const name = document.getElementById('co-name').value;
            const addr = document.getElementById('co-addr').value;

            if (!name || !addr) return alert("The Concierge requires a Name and Delivery Address.");

            let msg = `*GREETINGS POMELLI ESTATE*%0a`;
            msg += `New Order Request%0a----------------%0a`;
            msg += `Guest: ${name}%0aAddress: ${addr}%0a%0aITEMS:%0a`;
            
            let total = 0;
            Pomelli.state.cart.forEach(item => {
                msg += `• ${item.title} (${item.price} EGP)%0a`;
                total += item.price;
            });

            msg += `%0a*TOTAL ESTIMATE: ${total} EGP*`;
            msg += `%0a%0a(Sent via Digital Estate App)`;

            // WhatsApp API
            window.open(`https://wa.me/201024274466?text=${msg}`, '_blank');
        },

        inquiry: function() {
            const host = document.getElementById('sq-name').value;
            const loc = document.getElementById('sq-loc').value;
            
            if(!host) return alert("Name required.");
            
            const msg = `*BUTLER INQUIRY*%0aHost: ${host}%0aLocation: ${loc}%0aRequesting Service à la Russe information.`;
            window.open(`https://wa.me/201024274466?text=${msg}`, '_blank');
        }
    },


    /* ======================================================================
       MODULE 5: ATMOSPHERIC EFFECTS (Particles & Easter Eggs)
       ====================================================================== */
    FX: {
        // GOLD DUST PARTICLE SYSTEM
        initCanvas: function() {
            // Creating a canvas dynamically to sit behind everything
            const canvas = document.createElement('canvas');
            canvas.id = 'fx-canvas';
            canvas.style.position = 'fixed';
            canvas.style.top = '0';
            canvas.style.left = '0';
            canvas.style.width = '100%';
            canvas.style.height = '100%';
            canvas.style.pointerEvents = 'none'; // Click through it
            canvas.style.zIndex = '999999'; // On top but invisible mostly
            canvas.style.opacity = '0.4';
            document.body.appendChild(canvas);

            this.canvas = canvas;
            this.ctx = canvas.getContext('2d');
            this.particles = [];
            this.resizeCanvas();

            window.addEventListener('resize', () => this.resizeCanvas());
            
            // Create initial particles
            for(let i=0; i<15; i++) {
                this.particles.push(this.createParticle());
            }
        },

        resizeCanvas: function() {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        },

        createParticle: function() {
            return {
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                size: Math.random() * 2, // Tiny gold dust
                speedY: Math.random() * 0.5 + 0.1, // Drifts up slowly
                opacity: Math.random() * 0.5
            };
        },

        startAnimations: function() {
            const animate = () => {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.ctx.fillStyle = '#CFA968'; // Gold Color

                this.particles.forEach((p, index) => {
                    // Update
                    p.y -= p.speedY; 
                    p.x += Math.sin(p.y * 0.01) * 0.2; // Slight waver

                    // Draw
                    this.ctx.globalAlpha = p.opacity;
                    this.ctx.beginPath();
                    this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    this.ctx.fill();

                    // Reset if out of view
                    if(p.y < 0) {
                        p.y = window.innerHeight;
                        p.x = Math.random() * window.innerWidth;
                    }
                });

                requestAnimationFrame(animate);
            };
            animate();
        },

        // EASTER EGG: TAP THE LOGO 5 TIMES
        triggerEasterEgg: function() {
            Pomelli.state.easterEggCount++;
            
            // Tapping 5 times triggers "Secret Mode"
            if (Pomelli.state.easterEggCount === 5) {
                alert("⚜️ SECRET SOCIETY ACCESS ⚜️\nYou have found the hidden entrance.\n(Future update: Hidden Menu Unlocked)");
                
                // Change CSS Variable to darken theme temporarily
                document.documentElement.style.setProperty('--paper-cream', '#1a1a1a');
                document.documentElement.style.setProperty('--walnut-ink', '#CFA968');
                
                Pomelli.state.easterEggCount = 0;
            }
        }
    }
};

/* --- DOM EVENT MAPPINGS --- */

// Expose functions to HTML window object (for onclick attributes)
window.switchCategory = Pomelli.View.switchCategory;
window.openBunsSheet = () => Pomelli.View.openSheet('buns');
window.openCakeSheet = () => Pomelli.View.openSheet('cake');
window.closeSheet = Pomelli.View.closeAll;
window.addToCart = Pomelli.Commerce.add;
window.openDrawer = (id) => { 
    if(id.includes('checkout')) Pomelli.Commerce.renderDrawer();
    document.getElementById(id).classList.add('open'); 
};
window.closeDrawers = Pomelli.View.closeAll;
window.openInquiryModal = () => document.getElementById('inquiry-modal').classList.add('active');
window.closeInquiryModal = Pomelli.View.closeAll;
window.executeCheckout = Pomelli.Commerce.checkout;
window.sendInquiry = Pomelli.Commerce.inquiry;
window.switchTabContent = (idx) => {
    // Just a helper to find which tab is clicked in HTML 
    // Logic handled inside View via Data Attributes usually, but mapped for existing HTML calls if needed
    // Not actually used in main logic flow as inner tabs utilize Pomelli.View.switchInnerTab direct reference
};

// Start Engine
document.addEventListener('DOMContentLoaded', () => {
    Pomelli.init();
});
