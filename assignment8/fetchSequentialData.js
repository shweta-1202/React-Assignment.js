// Import the axios library
const axios = require('axios');

// Define an asynchronous function to fetch data from two APIs sequentially
async function fetchSequentialData() {
  try {
    // Fetch data from the first API
    const postsResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log('Posts:', postsResponse.data);

    // Fetch data from the second API
    const usersResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log('Users:', usersResponse.data);
  } catch (error) {
    // Log an appropriate error message to the console
    console.error('Error fetching data:', error.message);
  }
}

// Call the asynchronous function
fetchSequentialData();
