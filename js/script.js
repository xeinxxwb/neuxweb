/**
 * AURA DESIGN - PREMIUM WEBSITE INTERACTION SCRIPT
 */

// Editable Product Data Source
const productsData = [
    {
        id: "p1",
        name: "Lumen Lounge Chair",
        category: "Furniture",
        description: "Minimalist ergonomic armchair engineered with brushed steel frame and high-density acoustic upholstery.",
        image: "assets/images/product-1.svg",
        link: "#"
    },
    {
        id: "p2",
        name: "Aura Diffused Lamp",
        category: "Lighting",
        description: "Sculptural lighting fixture with dimmable warm ambient spectrum and frosted opal glass globe.",
        image: "assets/images/product-2.svg",
        link: "#"
    },
    {
        id: "p3",
        name: "Kinetic Oak Table",
        category: "Furniture",
        description: "Solid sustainable oak dining table with subtle bevel edges and concealed wire routing architecture.",
        image: "assets/images/product-3.svg",
        link: "#"
    },
    {
        id: "p4",
        name: "Obsidian Ceramic Vase",
        category: "Decor",
        description: "Hand-crafted matte ceramic vessel with geometric facets designed for contemporary modern spaces.",
        image: "assets/images/product-4.svg",
        link: "#"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // 1. Render Products Dynamically
    renderProducts();

    // 2. Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 3. Navbar Sticky & Scroll Effects
    initNavbarScroll();

    // 4. Mobile Navigation Toggle
    initMobileNav();

    // 5. Active Link Highlighting on Scroll
    initScrollSpy();

    // 6. Scroll Reveal Animations (Intersection Observer)
    initScrollReveal();

    // 7. Dynamic Copyright Year
    setCopyrightYear();
});

/**
 * Render Product Grid
 */
function renderProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    grid.innerHTML = productsData.map(product => `
        <article class="product-card reveal-item">
            <div class="product-img-wrapper">
                <span class="product-category">${product.category}</span>
                <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <a href="${product.link}" class="product-link">
                    <span>View Specifications</span>
                    <i data-lucide="chevron-right"></i>
                </a>
            </div>
        </article>
    `).join('');
}

/**
 * Sticky Navbar styling on scroll
 */
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

/**
 * Mobile Drawer Menu
 */
function initMobileNav() {
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

/**
 * Active Navigation Link Highlighting
 */
function initScrollSpy() {
    const sections = document.querySelectorAll('section, footer');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.scrollY + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

/**
 * Reveal Elements on Scroll
 */
function initScrollReveal() {
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Staggered delay effect
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, index * 80);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all items with .reveal-item class
    document.querySelectorAll('.reveal-item').forEach(el => observer.observe(el));
}

/**
 * Automatically update current copyright year
 */
function setCopyrightYear() {
    const yearSpan = document.getElementById('copyright-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}
