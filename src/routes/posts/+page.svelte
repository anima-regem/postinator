<script>
  import { processPost, sortPostsByDate, getAllTags, filterPostsByTag } from '$lib/utils/posts';
  
  /** @type {import('./$types').PageData} */
  export let data;
  
  // Process and sort the posts
  const allPosts = sortPostsByDate(data.posts?.map(processPost) || []);
  
  // Get all unique tags
  const tags = getAllTags(allPosts);
  
  // State for selected tag filter
  let selectedTag = '';
  
  // Filtered posts based on selected tag
  $: filteredPosts = selectedTag ? filterPostsByTag(allPosts, selectedTag) : allPosts;
  
  // Function to clear tag filter
  function clearFilter() {
    selectedTag = '';
  }
</script>

<svelte:head>
  <title>Events | FOSS Stories</title>
  <meta name="description" content="Browse all events from FOSS Club GEC Palakkad" />
</svelte:head>

<div class="max-w-6xl mx-auto">
  <header class="mb-12">
    <h1 class="text-3xl font-bold mb-4">All Events</h1>
    <p class="text-lg text-gray-600 mb-8">
      Browse through all the events organized by FOSS Club GEC Palakkad.
    </p>
    
    <!-- Tag filters -->
    {#if tags.length > 0}
      <div class="mb-8">
        <div class="flex flex-wrap gap-2 items-center">
          <span class="text-sm font-medium mr-2">Filter by:</span>
          
          {#if selectedTag}
            <button 
              on:click={clearFilter}
              class="text-xs px-3 py-1.5 bg-gray-100 text-gray-800 rounded-full hover:bg-theme-1 hover:text-white transition-colors"
            >
              {selectedTag}
            </button>
          {:else}
            {#each tags as tag}
              <button 
                on:click={() => selectedTag = tag}
                class="text-xs px-3 py-1.5 bg-gray-100 text-gray-800 rounded-full hover:bg-theme-1 hover:text-white transition-colors"
              >
                {tag}
              </button>
            {/each}
          {/if}
        </div>
      </div>
    {/if}
  </header>
  
  {#if filteredPosts.length > 0}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each filteredPosts as post}
        <a href={`/posts/${post.slug}`} class="group">
          <article class="bg-bg-1 border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div class="aspect-video bg-gray-100 relative overflow-hidden">
              {#if post.thumbnail}
                <img 
                  src={post.thumbnail} 
                  alt={post.title} 
                  class="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              {:else}
                <div class="w-full h-full flex items-center justify-center bg-theme-1 bg-opacity-10">
                  <span class="text-theme-1 font-bold text-xl">{post.title.charAt(0)}</span>
                </div>
              {/if}
            </div>
            <div class="p-5">
              <div class="flex gap-2 mb-2">
                {#each post.tags.slice(0, 2) as tag}
                  <span class="text-xs px-2 py-1 bg-theme-1 bg-opacity-10 text-theme-1 rounded">{tag}</span>
                {/each}
              </div>
              <h3 class="text-xl font-bold mb-2 group-hover:text-theme-1 transition-colors">{post.title}</h3>
              <p class="text-sm text-gray-600 mb-4">{post.formattedDate} · {Math.ceil(post.readingTime.minutes)} min read</p>
              <p class="text-sm line-clamp-2">{post.description}</p>
            </div>
          </article>
        </a>
      {/each}
    </div>
  {:else}
    <div class="bg-bg-1 border border-gray-200 rounded-lg p-8 text-center">
      <p class="text-lg mb-4">No events found{selectedTag ? ` with tag "${selectedTag}"` : ''}.</p>
      {#if selectedTag}
        <button 
          on:click={clearFilter}
          class="px-4 py-2 bg-theme-1 text-white rounded-md hover:bg-opacity-90 transition-colors"
        >
          Clear filter
        </button>
      {:else}
        <p>Check back soon for updates on our upcoming events!</p>
      {/if}
    </div>
  {/if}
</div>
