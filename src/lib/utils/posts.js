import { format } from 'date-fns';
import { readingTime } from 'reading-time-estimator';
import fs from 'fs/promises';
import path from 'path';
import { marked } from 'marked';

/**
 * Processes a blog post and adds additional metadata
 * @param {Object} post - The post object from the content collection
 * @returns {Object} - The processed post with additional metadata
 */
export function processPost(post) {
  const { content, ...metadata } = post;

  const plainText =
    typeof content === 'string'
      ? content
      : (typeof content?.toString === 'function' ? content.toString() : '');

  const stats = readingTime(plainText);

  const formattedDate = format(new Date(metadata.date), 'MMMM dd, yyyy');

  return {
    ...metadata,
    content,
    readingTime: stats,
    formattedDate
  };
}

/**
 * Gets a post by its slug
 * @param {String} slug - The post slug
 * @returns {Object} - The post object
 */
export async function getPostBySlug(slug) {
  try {
    const postPath = path.join(process.cwd(), 'src/content/posts', `${slug}.md`);
    const content = await fs.readFile(postPath, 'utf-8');
    
    // Extract frontmatter and content
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (!frontmatterMatch) {
      throw new Error('No frontmatter found');
    }
    
    const frontmatter = frontmatterMatch[1];
    const markdownContent = content.slice(frontmatterMatch[0].length).trim();
    
    // Parse frontmatter
    const metadata = {};
    frontmatter.split('\n').forEach(line => {
      const [key, ...valueParts] = line.split(':');
      if (key && valueParts.length > 0) {
        const value = valueParts.join(':').trim();
        try {
          metadata[key.trim()] = JSON.parse(value);
        } catch {
          metadata[key.trim()] = value;
        }
      }
    });
    
    // Process the post
    const post = {
      ...metadata,
      slug,
      content: marked.parse(markdownContent)
    };
    
    return processPost(post);
  } catch (err) {
    console.error('Error getting post by slug:', err);
    throw err;
  }
}

/**
 * Sorts posts by date in descending order (newest first)
 * @param {Array} posts - Array of post objects
 * @returns {Array} - Sorted array of posts
 */
export function sortPostsByDate(posts) {
  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

/**
 * Filters posts by tag
 * @param {Array} posts - Array of post objects
 * @param {String} tag - Tag to filter by
 * @returns {Array} - Filtered array of posts
 */
export function filterPostsByTag(posts, tag) {
  if (!tag) return posts;
  return posts.filter(post => post.tags.includes(tag));
}

/**
 * Gets all unique tags from posts
 * @param {Array} posts - Array of post objects
 * @returns {Array} - Array of unique tags
 */
export function getAllTags(posts) {
  const tags = posts.reduce((allTags, post) => {
    return [...allTags, ...post.tags];
  }, []);
  
  return [...new Set(tags)].sort();
}
