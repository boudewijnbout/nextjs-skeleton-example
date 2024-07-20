/**
 * Introduces a delay for the specified amount of time.
 * 
 * @param {number} ms - The number of milliseconds to delay.
 * @returns {Promise<void>} A promise that resolves after the specified delay.
 */
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Fetches posts from the API endpoint.
 * 
 * This function waits for a delay of 2000 milliseconds before fetching data from 
 * 'https://jsonplaceholder.typicode.com/posts'. If the fetch operation fails, it 
 * throws an error.
 * 
 * @typedef {Object} Post
 * @property {number} userId - The ID of the user.
 * @property {number} id - The ID of the post.
 * @property {string} title - The title of the post.
 * @property {string} body - The body of the post.
 * 
 * @returns {Promise<Post[]>} A promise that resolves to an array of posts.
 * @throws {Error} If the fetch operation fails.
 */
export async function fetchPosts(): Promise<Post[]> {

    // Use provided delay
    await delay(2000);
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}
