<script>
  import { page } from '$app/stores';
  import { marked } from 'marked';
  
  export let data;
  
  $: post = data?.post;
  $: behindTheScenesContent = data?.behindTheScenesContent;
  $: tags = post?.tags ? (Array.isArray(post.tags) ? post.tags : [post.tags]) : [];
</script>

<svelte:head>
  <title>{post?.title || 'Behind the Scenes'} | FOSS Stories</title>
  <meta name="description" content={`Behind the scenes story of ${post?.title || 'this event'}`} />
</svelte:head>

<div class="container mx-auto px-4 py-8">
  {#if !post}
    <div class="text-center py-12">
      <h1 class="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
      <p class="text-gray-600 mb-6">The post you're looking for doesn't exist.</p>
      <a href="/posts" class="text-theme-1 hover:underline">Back to Events</a>
    </div>
  {:else if !behindTheScenesContent}
    <div class="text-center py-12">
      <h1 class="text-2xl font-bold text-gray-900 mb-4">Behind the Scenes Content Not Available</h1>
      <p class="text-gray-600 mb-6">The behind the scenes content for this event is not available yet.</p>
      <a href={`/posts/${post.slug}`} class="text-theme-1 hover:underline">Back to Event</a>
    </div>
  {:else}
    <header class="mb-8">
      <div class="flex flex-wrap gap-2 mb-4">
        {#each tags as tag}
          <span class="px-3 py-1 bg-theme-2 text-theme-1 rounded-full text-sm">
            {tag}
          </span>
        {/each}
      </div>
      
      <h1 class="text-4xl font-bold mb-4">{post.title}</h1>
      <h2 class="text-2xl text-gray-600 mb-6">Behind the Scenes</h2>
      
      <div class="flex items-center text-sm text-gray-600 mb-6">
        <span>{post.formattedDate}</span>
        <span class="mx-2">•</span>
        <span>{Math.ceil(post.readingTime?.minutes || 0)} min read</span>
      </div>
    </header>

    <div class="prose prose-lg max-w-none">
      {@html marked(behindTheScenesContent)}
    </div>

    <div class="mt-12 pt-8 border-t border-gray-200">
      <a 
        href={`/posts/${post.slug}`} 
        class="text-theme-1 hover:underline flex items-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Event
      </a>
    </div>
  {/if}
</div> 