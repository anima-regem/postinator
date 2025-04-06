import { format } from 'date-fns';
import { readingTime } from 'reading-time-estimator';

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
