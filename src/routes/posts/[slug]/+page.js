export const prerender = true;

/**
 * Load a specific blog post by slug
 * @returns {Promise<{post: any}>}
 */
export async function load({ params }) {
  try {
    const { slug } = params;
    
    // Import all markdown files from the content/posts directory
    const postFiles = import.meta.glob('../../../content/posts/*.md');
    
    // Find the post that matches the slug
    const matchingPostEntry = Object.entries(postFiles).find(([path]) => {
      const pathSlug = path.split('/').pop().replace('.md', '');
      return pathSlug === slug;
    });
    
    if (!matchingPostEntry) {
      return {
        status: 404,
        error: new Error(`Post with slug "${slug}" not found`)
      };
    }
    
    const [path, resolver] = matchingPostEntry;
    const post = await resolver();
    
    return {
      post: {
        slug,
        ...post.metadata,
        content: post.default
      }
    };
  } catch (error) {
    console.error(`Error loading post with slug "${params.slug}":`, error);
    return {
      status: 500,
      error: new Error('Failed to load post')
    };
  }
}
