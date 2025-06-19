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