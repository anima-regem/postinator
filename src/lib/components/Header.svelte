<script>
  import { page } from '$app/stores';
  
  // Logo can be replaced with the FOSS Club logo
  const logoPath = '/images/logo.svg';
  
  let isMobileMenuOpen = false;
  
  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }
</script>

<header class="bg-white border-b border-gray-200 py-4 px-6 sticky top-0 z-10 shadow-sm">
  <div class="container mx-auto flex justify-between items-center">
    <div class="flex items-center">
      <a href="/" class="flex items-center group">
        <img src={logoPath} alt="FOSS Club GEC Palakkad" class="h-10 w-auto mr-3 transition-transform group-hover:scale-105" />
        <span class="text-2xl font-bold text-theme-1">FOSS Stories</span>
      </a>
    </div>
    
    <nav class="hidden md:flex space-x-8">
      <a 
        href="/" 
        class="text-gray-700 hover:text-theme-1 transition-colors relative {$page.url.pathname === '/' ? 'font-semibold text-theme-1' : ''}"
      >
        Home
        {#if $page.url.pathname === '/'}
          <span class="absolute -bottom-1 left-0 w-full h-0.5 bg-theme-1"></span>
        {/if}
      </a>
      <a 
        href="/posts" 
        class="text-gray-600 hover:text-theme-1 transition-colors"
      >
        Events
      </a>
      <a 
        href="/about" 
        class="text-gray-600 hover:text-theme-1 transition-colors"
      >
        About
      </a>
    </nav>
    
    <div class="flex items-center space-x-4">
      <!-- Mobile menu button -->
      <button 
        class="md:hidden text-gray-700 hover:text-theme-1 transition-colors" 
        aria-label="Menu"
        on:click={toggleMobileMenu}
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {#if isMobileMenuOpen}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          {:else}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          {/if}
        </svg>
      </button>
    </div>
  </div>
</header>

<!-- Mobile menu -->
<div 
  class="md:hidden bg-white border-b border-gray-200 transition-all duration-300 ease-in-out {isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}"
>
  <nav class="flex flex-col space-y-4 py-4 px-6">
    <a 
      href="/" 
      class="text-gray-700 hover:text-theme-1 transition-colors {$page.url.pathname === '/' ? 'font-semibold text-theme-1' : ''}"
    >
      Home
    </a>
    <a 
      href="/posts" 
      class="text-gray-700 hover:text-theme-1 transition-colors {$page.url.pathname.startsWith('/posts') ? 'font-semibold text-theme-1' : ''}"
    >
      Events
    </a>
    <a 
      href="/about" 
      class="text-gray-700 hover:text-theme-1 transition-colors {$page.url.pathname === '/about' ? 'font-semibold text-theme-1' : ''}"
    >
      About
    </a>
  </nav>
</div>
