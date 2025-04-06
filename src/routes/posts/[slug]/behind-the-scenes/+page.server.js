import { error } from '@sveltejs/kit';
import { getPostBySlug } from '$lib/utils/posts';
import fs from 'fs/promises';
import path from 'path';

export async function load({ params }) {
  const { slug } = params;
  
  try {
    // Load the main post data
    const post = await getPostBySlug(slug);
    
    if (!post) {
      throw error(404, 'Post not found');
    }
    
    // Load behind-the-scenes content
    const behindTheScenesPath = path.join(process.cwd(), 'src/content/posts', slug, 'behind-the-scenes.md');
    
    let behindTheScenesContent = null;
    try {
      behindTheScenesContent = await fs.readFile(behindTheScenesPath, 'utf-8');
    } catch (err) {
      console.error('Error reading behind-the-scenes content:', err);
      // Don't throw error, just return null content
    }
    
    return {
      post,
      behindTheScenesContent
    };
  } catch (err) {
    console.error('Error loading behind the scenes:', err);
    throw error(500, `Failed to load behind the scenes: ${err.message}`);
  }
} 