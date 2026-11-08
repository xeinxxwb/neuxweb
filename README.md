# AURA — Premium Business Website

A modern, minimalist, high-end business website project built with clean HTML5, CSS3, and vanilla JavaScript. Inspired by luxury corporate brands and architectural agencies.

## 📁 Project Structure

```text
business-website/
│
├── index.html                  # Main website file (3 main sections)
├── css/
│   └── style.css               # Complete responsive stylesheet & design tokens
├── js/
│   └── script.js               # Vanilla JavaScript for interactive features & data
├── assets/
│   ├── images/                 # SVG & raster image assets
│   │   ├── hero-image.svg
│   │   ├── product-1.svg
│   │   ├── product-2.svg
│   │   ├── product-3.svg
│   │   └── product-4.svg
│   ├── icons/                  # Lucide SVG icon resources
│   └── logo/                   # Brand logo vectors
├── favicon.ico                 # Website favicon
└── README.md                   # Customization documentation
```

## 🛠️ How to Customize

### 1. Company Name & Introduction
- Open `index.html`.
- Modify the brand logo text `<span class="logo-text">AURA</span>`.
- Update the Hero Title `<h1>Welcome to <span class="accent-text">AURA</span></h1>` and paragraph `<p class="hero-description">`.

### 2. Customizing Products
- Open `js/script.js`.
- Edit the `productsData` JavaScript array at the top of the file:
```javascript
const productsData = [
    {
        id: "p1",
        name: "Your Product Name",
        category: "Category",
        description: "Your product description...",
        image: "assets/images/your-image.jpg",
        link: "#"
    },
    ...
];
```

### 3. Updating Contact Information & Social Links
- Open `index.html`.
- Navigate to the `<footer id="information" class="info-footer">` section.
- Update the `mailto:` email address, `tel:` phone number, and social media URLs.

### 4. Customizing Colors & Fonts
- Open `css/style.css`.
- Modify the CSS variables in the `:root` block:
  - `--clr-accent`: Main accent color (default Amber gold `#d97706`).
  - `--clr-bg-dark`: Background color (`#090c12`).
  - `--font-heading`: Google font for headings ('Syne').
  - `--font-body`: Google font for body copy ('Plus Jakarta Sans').

## 🚀 How to View & Use
1. Extract the `business-website.zip` file.
2. Double-click `index.html` to open it in any modern browser.
3. No build tools, Node.js, or local servers are required!
