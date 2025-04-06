<script>
  import { page } from '$app/stores';
  import ThemeToggle from './ThemeToggle.svelte';
  
  // Logo can be replaced with the FOSS Club logo
  const logoPath = '/images/logo.svg';
</script>

<header class="bg-bg-1 border-b border-gray-200 dark:border-gray-800 py-4 px-6 sticky top-0 z-10">
  <div class="container mx-auto flex justify-between items-center">
    <div class="flex items-center">
      <a href="/" class="flex items-center">
        <img src={logoPath} alt="FOSS Club GEC Palakkad" class="h-8 w-auto mr-2" />
        <span class="text-xl font-bold text-theme-1">FOSS Stories</span>
      </a>
    </div>
    
    <nav class="hidden md:flex space-x-6">
      <a 
        href="/" 
        class="text-text hover:text-theme-1 transition-colors {$page.url.pathname === '/' ? 'font-bold text-theme-1' : ''}"
      >
        Home
      </a>
      <a 
        href="/posts" 
        class="text-text hover:text-theme-1 transition-colors {$page.url.pathname.startsWith('/posts') ? 'font-bold text-theme-1' : ''}"
      >
        Events
      </a>
      <a 
        href="/about" 
        class="text-text hover:text-theme-1 transition-colors {$page.url.pathname === '/about' ? 'font-bold text-theme-1' : ''}"
      >
        About
      </a>
    </nav>
    
    <div class="flex items-center space-x-4">
      <ThemeToggle />
      
      <!-- Mobile menu button -->
      <button class="md:hidden text-text hover:text-theme-1" aria-label="Menu">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>
</header>

<!-- Mobile menu (hidden by default) -->
<div class="md:hidden hidden bg-bg-1 border-b border-gray-200 dark:border-gray-800 py-4 px-6">
  <nav class="flex flex-col space-y-4">
    <a 
      href="/" 
      class="text-text hover:text-theme-1 transition-colors {$page.url.pathname === '/' ? 'font-bold text-theme-1' : ''}"
    >
      Home
    </a>
    <a 
      href="/posts" 
      class="text-text hover:text-theme-1 transition-colors {$page.url.pathname.startsWith('/posts') ? 'font-bold text-theme-1' : ''}"
    >
      Events
    </a>
    <a 
      href="/about" 
      class="text-text hover:text-theme-1 transition-colors {$page.url.pathname === '/about' ? 'font-bold text-theme-1' : ''}"
    >
      About
    </a>
  </nav>
</div>
