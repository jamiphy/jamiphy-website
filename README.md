# Simple Static Tailwind Website

This is a minimal multi-page static website scaffolded with HTML, Tailwind CSS (via CDN), and vanilla JavaScript.

## Directory layout

```
.
├── index.html          # Home page
├── about.html          # About page
├── contact.html        # Contact page
├── css
│   └── style.css       # Custom CSS overrides (optional)
├── js
│   └── main.js         # Site-wide JavaScript
└── images/             # Static images
```

## Getting started

No build tools are required. Tailwind is delivered from its official CDN.

1. Clone or download this repository.
2. Open `index.html` (or any page) in your browser, or serve the folder with a local web server, e.g.:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000> in your browser.

## Customising Tailwind

If you need to customise or extend Tailwind beyond what the CDN build offers, switch to a build pipeline (e.g. using npm + PostCSS) and generate your own CSS. For simple prototypes, the CDN approach keeps things lightweight.
