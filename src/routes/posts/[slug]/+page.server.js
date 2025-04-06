import { error } from '@sveltejs/kit';
import { getPostBySlug } from '$lib/utils/posts';

export async function load({ params }) {
  const { slug } = params;
  
  try {
    const post = await getPostBySlug(slug);
    
    if (!post) {
      throw error(404, 'Post not found');
    }
    
    return {
      post
    };
  } catch (err) {
    console.error('Error loading post:', err);
    throw error(500, `Failed to load post: ${err.message}`);
  }
} 