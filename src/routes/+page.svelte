<script>
	import { processPost, sortPostsByDate } from '$lib/utils/posts';

	/** @type {import('./$types').PageData} */
	export let data;

	// Process and sort the posts
	const posts = sortPostsByDate(data.posts?.map(processPost) || []);
	// Get the 3 most recent posts
	const recentPosts = posts.slice(0, 3);

	// Hero section background image
	const heroImage = '/images/hero-bg.jpg';
</script>

<svelte:head>
	<title>FOSS Stories | GEC Palakkad</title>
	<meta name="description" content="Documenting the events and activities of FOSS Club GEC Palakkad" />
</svelte:head>

<!-- Hero Section -->
<section class="relative py-16 md:py-24 mb-12 bg-gradient-to-r from-bg-1 to-bg-2 rounded-lg overflow-hidden">
	<div class="container mx-auto px-4 relative z-10">
		<div class="max-w-3xl">
			<h1 class="text-4xl md:text-5xl font-bold mb-6 text-text">
				FOSS Club GEC Palakkad
			</h1>
			<p class="text-xl mb-8 text-text opacity-90">
				Documenting our journey in open source, one event at a time. Explore workshops, meetups, and hackathons organized by the FOSS Club at Government Engineering College, Palakkad.
			</p>
			<div class="flex flex-wrap gap-4">
				<a href="/posts" class="px-6 py-3 bg-theme-1 text-white rounded-md hover:bg-opacity-90 transition-all">
					Explore Events
				</a>
				<a href="/about" class="px-6 py-3 border border-theme-1 text-theme-1 rounded-md hover:bg-theme-1 hover:bg-opacity-10 transition-all">
					About Us
				</a>
			</div>
		</div>
	</div>
	
	<!-- Optional decorative elements -->
	<div class="absolute right-0 bottom-0 w-1/3 h-1/3 bg-theme-2 bg-opacity-10 rounded-tl-full"></div>
	<div class="absolute right-24 top-24 w-16 h-16 bg-theme-1 bg-opacity-20 rounded-full"></div>
</section>

<!-- Recent Events Section -->
<section class="mb-16">
	<div class="flex justify-between items-center mb-8">
		<h2 class="text-2xl font-bold">Recent Events</h2>
		<a href="/posts" class="text-theme-1 hover:underline">View all →</a>
	</div>

	{#if recentPosts.length > 0}
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each recentPosts as post}
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
			<p class="text-lg mb-4">No events published yet.</p>
			<p>Check back soon for updates on our upcoming events!</p>
		</div>
	{/if}
</section>

<!-- Features Section -->
<section class="mb-16">
	<h2 class="text-2xl font-bold mb-8">What We Document</h2>
	
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
		<div class="bg-bg-1 border border-gray-200 rounded-lg p-6">
			<div class="w-12 h-12 bg-theme-1 bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-theme-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
				</svg>
			</div>
			<h3 class="text-xl font-bold mb-2">Workshops</h3>
			<p class="text-gray-600">Hands-on sessions where students learn new technologies and skills directly from experienced mentors.</p>
		</div>
		
		<div class="bg-bg-1 border border-gray-200 rounded-lg p-6">
			<div class="w-12 h-12 bg-theme-2 bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-theme-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
				</svg>
			</div>
			<h3 class="text-xl font-bold mb-2">Meetups</h3>
			<p class="text-gray-600">Regular gatherings where members discuss open source trends, share knowledge, and network with like-minded individuals.</p>
		</div>
		
		<div class="bg-bg-1 border border-gray-200 rounded-lg p-6">
			<div class="w-12 h-12 bg-purple-500 bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
				</svg>
			</div>
			<h3 class="text-xl font-bold mb-2">Hackathons</h3>
			<p class="text-gray-600">Intense coding events where participants collaborate to build innovative solutions to real-world problems.</p>
		</div>
	</div>
</section>
