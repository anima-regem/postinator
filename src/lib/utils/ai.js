import { GoogleGenerativeAI } from '@google/generative-ai';

/**
 * Initialize the Gemini API client
 * Note: You'll need to set your API key in the .env file
 * @returns {Object} - The Gemini API client
 */
function initializeGemini() {
  // In production, this should be loaded from environment variables
  // For development, you can set this in a .env file
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || 'YOUR_API_KEY';
  
  // Initialize the Generative AI SDK
  return new GoogleGenerativeAI(API_KEY);
}

/**
 * Generate a LinkedIn post from a blog post
 * @param {Object} post - The blog post object
 * @returns {Promise<String>} - The generated LinkedIn post
 */
export async function generateLinkedInPost(post) {
  try {
    const genAI = initializeGemini();
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    const prompt = `
      Create a professional LinkedIn post summarizing the following event. 
      Use a formal tone suitable for a professional audience.
      Keep it concise (under 200 words) and include a call to action at the end.
      
      Event Title: ${post.title}
      Event Description: ${post.description}
      Event Content: ${post.content.substring(0, 1000)}
    `;
    
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error('Error generating LinkedIn post:', error);
    return 'Could not generate LinkedIn post. Please try again later.';
  }
}

/**
 * Generate an Instagram caption from a blog post
 * @param {Object} post - The blog post object
 * @returns {Promise<String>} - The generated Instagram caption
 */
export async function generateInstagramCaption(post) {
  try {
    const genAI = initializeGemini();
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    const prompt = `
      Create an engaging Instagram caption for the following event.
      Use a casual, friendly tone with some emojis.
      Include 5-7 relevant hashtags at the end.
      Keep it under 200 words total.
      
      Event Title: ${post.title}
      Event Description: ${post.description}
      Event Content: ${post.content.substring(0, 1000)}
    `;
    
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error('Error generating Instagram caption:', error);
    return 'Could not generate Instagram caption. Please try again later.';
  }
}

/**
 * Generate alt text for an image
 * @param {String} imagePath - The path to the image
 * @param {String} context - Additional context about the image
 * @returns {Promise<String>} - The generated alt text
 */
export async function generateAltText(imagePath, context) {
  try {
    const genAI = initializeGemini();
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
    
    // In a real implementation, you would load the image and convert it to base64
    // For now, we'll just use the context to generate alt text
    const prompt = `
      Generate a concise, descriptive alt text for an image with the following context:
      ${context}
      
      The alt text should be informative, concise (under 125 characters), and descriptive for screen readers.
    `;
    
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error('Error generating alt text:', error);
    return 'Image related to FOSS Club event';
  }
}

/**
 * Generate a catchy title suggestion for a blog post
 * @param {String} content - The blog post content
 * @returns {Promise<String>} - The generated title suggestion
 */
export async function generateTitleSuggestion(content) {
  try {
    const genAI = initializeGemini();
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    const prompt = `
      Generate a catchy, engaging title for a blog post with the following content.
      The title should be concise (under 60 characters) and capture the essence of the post.
      
      Content: ${content.substring(0, 1000)}
    `;
    
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error('Error generating title suggestion:', error);
    return 'Could not generate title suggestion. Please try again later.';
  }
}
