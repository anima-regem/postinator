export const prerender = true;

/**
 * Load all blog posts for the posts index page
 * @returns {Promise<{posts: any[]}>}
 */
export async function load({ fetch }) {
  try {
    // Import all markdown files from the content/posts directory
    const postFiles = import.meta.glob('../../content/posts/*.md');
    
    // Load each post and extract its metadata
    const posts = await Promise.all(
      Object.entries(postFiles).map(async ([path, resolver]) => {
        const post = await resolver();
        const slug = path.split('/').pop().replace('.md', '');
        
        return {
          slug,
          ...post.metadata,
          content: post.default
        };
      })
    );
    
    return {
      posts
    };
  } catch (error) {
    console.error('Error loading posts:', error);
    return {
      posts: []
    };
  }
}
