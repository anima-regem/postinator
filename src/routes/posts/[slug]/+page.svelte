<script>
  import { processPost } from '$lib/utils/posts';
  import { generateLinkedInPost, generateInstagramCaption } from '$lib/utils/ai';
  import { onMount } from 'svelte';
  
  /** @type {import('./$types').PageData} */
  export let data;
  
  // Process the post to add reading time and formatted date
  const post = processPost(data.post);
  
  // State for social media content
  let linkedInPost = '';
  let instagramCaption = '';
  let isGeneratingLinkedIn = false;
  let isGeneratingInstagram = false;
  
  // Function to generate LinkedIn post
  async function handleGenerateLinkedIn() {
    if (isGeneratingLinkedIn) return;
    
    isGeneratingLinkedIn = true;
    try {
      linkedInPost = await generateLinkedInPost(post);
    } catch (error) {
      console.error('Error generating LinkedIn post:', error);
      linkedInPost = 'Could not generate LinkedIn post. Please try again later.';
    } finally {
      isGeneratingLinkedIn = false;
    }
  }
  
  // Function to generate Instagram caption
  async function handleGenerateInstagram() {
    if (isGeneratingInstagram) return;
    
    isGeneratingInstagram = true;
    try {
      instagramCaption = await generateInstagramCaption(post);
    } catch (error) {
      console.error('Error generating Instagram caption:', error);
      instagramCaption = 'Could not generate Instagram caption. Please try again later.';
    } finally {
      isGeneratingInstagram = false;
    }
  }
  
  // Copy text to clipboard
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
  }
</script>

<svelte:head>
  <title>{post.title} | FOSS Stories</title>
  <meta name="description" content={post.description} />
</svelte:head>

<article class="max-w-4xl mx-auto">
  <!-- Post Header -->
  <header class="mb-8">
    <div class="flex gap-2 mb-4">
      {#each post.tags as tag}
        <a 
          href={`/posts?tag=${tag}`} 
          class="text-xs px-2 py-1 bg-theme-1 bg-opacity-10 text-theme-1 rounded hover:bg-opacity-20 transition-colors"
        >
          {tag}
        </a>
      {/each}
    </div>
    
    <h1 class="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
    
    <div class="flex items-center text-sm text-gray-600 mb-6">
      <span>{post.formattedDate}</span>
      <span class="mx-2">•</span>
      <span>{Math.ceil(post.readingTime.minutes)} min read</span>
    </div>
    
    {#if post.thumbnail}
      <div class="aspect-video w-full overflow-hidden rounded-lg mb-8">
        <img 
          src={post.thumbnail} 
          alt={post.title} 
          class="w-full h-full object-cover"
        />
      </div>
    {/if}
  </header>
  
  <!-- Post Content -->
  <div class="prose prose-lg max-w-none mb-12">
    <svelte:component this={post.content} />
  </div>
  
  <!-- Social Media Generation Section -->
  <section class="mt-16 border-t border-gray-200 pt-8">
    <h2 class="text-2xl font-bold mb-6">Share This Event</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- LinkedIn Post Generator -->
      <div class="bg-bg-1 border border-gray-200 rounded-lg p-6">
        <div class="flex items-center mb-4">
          <svg class="h-6 w-6 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
          <h3 class="text-xl font-bold">LinkedIn Post</h3>
        </div>
        
        {#if linkedInPost}
          <div class="mb-4 bg-white p-4 rounded border border-gray-200">
            <p class="whitespace-pre-line">{linkedInPost}</p>
          </div>
          <button 
            on:click={() => copyToClipboard(linkedInPost)}
            class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Copy to Clipboard
          </button>
        {:else}
          <button 
            on:click={handleGenerateLinkedIn}
            class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors disabled:opacity-50"
            disabled={isGeneratingLinkedIn}
          >
            {isGeneratingLinkedIn ? 'Generating...' : 'Generate LinkedIn Post'}
          </button>
        {/if}
      </div>
      
      <!-- Instagram Caption Generator -->
      <div class="bg-bg-1 border border-gray-200 rounded-lg p-6">
        <div class="flex items-center mb-4">
          <svg class="h-6 w-6 text-pink-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          <h3 class="text-xl font-bold">Instagram Caption</h3>
        </div>
        
        {#if instagramCaption}
          <div class="mb-4 bg-white p-4 rounded border border-gray-200">
            <p class="whitespace-pre-line">{instagramCaption}</p>
          </div>
          <button 
            on:click={() => copyToClipboard(instagramCaption)}
            class="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition-colors"
          >
            Copy to Clipboard
          </button>
        {:else}
          <button 
            on:click={handleGenerateInstagram}
            class="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition-colors disabled:opacity-50"
            disabled={isGeneratingInstagram}
          >
            {isGeneratingInstagram ? 'Generating...' : 'Generate Instagram Caption'}
          </button>
        {/if}
      </div>
    </div>
  </section>
  
  <!-- Navigation -->
  <div class="mt-12 pt-8 border-t border-gray-200">
    <a 
      href="/posts" 
      class="inline-flex items-center text-theme-1 hover:underline"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
      </svg>
      Back to all events
    </a>
  </div>
</article>
