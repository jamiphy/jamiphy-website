/* main.js - Jamiphy web components & site-wide JS */

class JamiphyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="shadow-lg">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
              <a href="/" class="logo text-xl">Jamiphy</a>
              <div class="hidden md:block ml-10 space-x-4">
                <a href="/" class="px-3 py-2 rounded-md text-xs sm:text-sm font-medium hover:text-purple-300">Home</a>
                <a href="/about/" class="px-3 py-2 rounded-md text-xs sm:text-sm font-medium hover:text-purple-300">About</a>
                <a href="/contact/" class="px-3 py-2 rounded-md text-xs sm:text-sm font-medium hover:text-purple-300">Contact</a>
              </div>
            </div>
            <!-- Mobile menu button -->
            <div class="md:hidden">
              <button id="nav-toggle" class="text-gray-300 hover:text-white focus:outline-none focus:text-white">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <!-- Mobile menu -->
        <div id="mobile-menu" class="md:hidden hidden px-2 pt-2 pb-3 space-y-1">
          <a href="/" class="block px-3 py-2 rounded-md text-base font-medium hover:text-purple-300">Home</a>
          <a href="/about/" class="block px-3 py-2 rounded-md text-base font-medium hover:text-purple-300">About</a>
          <a href="/contact/" class="block px-3 py-2 rounded-md text-base font-medium hover:text-purple-300">Contact</a>
        </div>
      </nav>
    `;

    // Attach toggle handler after markup is injected
    const navToggleBtn = this.querySelector('#nav-toggle');
    const mobileMenu   = this.querySelector('#mobile-menu');

    if (navToggleBtn && mobileMenu) {
      navToggleBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }
  }
}

class JamiphyFooter extends HTMLElement {
  connectedCallback() {
    const year = new Date().getFullYear();
    this.innerHTML = `
      <footer>
        <div class="max-w-7xl mx-auto px-4 text-center text-sm">
          © ${year} Jamiphy. All rights reserved.
        </div>
      </footer>
    `;
  }
}

if (!customElements.get('jamiphy-header')) {
  customElements.define('jamiphy-header', JamiphyHeader);
}
if (!customElements.get('jamiphy-footer')) {
  customElements.define('jamiphy-footer', JamiphyFooter);
}

// ------------- Synthwave Horizon Grid -------------
function initSynthwave() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  // Inject & style canvas
  const canvas = document.createElement('canvas');
  canvas.id = 'synthwave-canvas';
  canvas.style.position = 'absolute';
  canvas.style.inset = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.zIndex = '0';
  hero.style.position = 'relative';
  hero.prepend(canvas);

  // Ensure existing hero content layers above canvas
  hero.querySelectorAll(':scope > *:not(canvas)').forEach(el => {
    const style = getComputedStyle(el);
    if (style.position === 'static') {
      el.style.position = 'relative';
    }
    el.style.zIndex = '1';
  });

  const ctx = canvas.getContext('2d');
  let width, height, dpr;

  function resize() {
    dpr = window.devicePixelRatio || 1;
    width = canvas.clientWidth; // css pixels
    height = canvas.clientHeight; // css pixels
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  window.addEventListener('resize', resize);
  resize();

  // Scene constants
  const rowCount = 40;
  const colSpacing = 80;
  let offset = 0;

  function draw() {
    const horizon = height / 2;
    ctx.clearRect(0, 0, width, height);

    // Background gradient (dark top -> deep purple bottom)
    const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
    bgGrad.addColorStop(0, '#06040f');
    bgGrad.addColorStop(1, '#12002f');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, width, height);

    // Grid
    ctx.lineWidth = 1;
    const gridColor = 'rgba(192, 132, 252, 0.7)'; // neon-purple
    ctx.strokeStyle = gridColor;

    // Horizontal lines with perspective
    for (let i = 1; i < rowCount; i++) {
      const progress = (i + offset) / rowCount;
      const y = horizon + Math.pow(progress, 2.5) * (height - horizon);
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Vertical lines converging to vanishing point
    for (let i = -Math.ceil(width / colSpacing); i <= Math.ceil(width / colSpacing); i++) {
      const x = width / 2 + i * colSpacing;
      ctx.beginPath();
      ctx.moveTo(x, height);
      ctx.lineTo(width / 2, horizon);
      ctx.stroke();
    }

    // Animate offset for scrolling effect
    offset += 0.03;
    if (offset > 1) offset -= 1;

    requestAnimationFrame(draw);
  }
  draw();
}

// Initialise synthwave on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSynthwave);
} else {
  initSynthwave();
}
