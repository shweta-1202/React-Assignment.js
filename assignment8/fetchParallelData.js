// Import the axios library
const axios = require('axios');

// Define an asynchronous function to fetch data from two APIs in parallel
async function fetchParallelData() {
  try {
    // Fetch data from both APIs in parallel using Promise.all
    const [postsResponse, usersResponse] = await Promise.all([
      axios.get('https://jsonplaceholder.typicode.com/posts'),
      axios.get('https://jsonplaceholder.typicode.com/users')
    ]);

    // Log the results from both APIs to the console
    console.log('Posts:', postsResponse.data);
    console.log('Users:', usersResponse.data);
  } catch (error) {
    // Log an appropriate error message to the console
    console.error('Error fetching data:', error.message);
  }
}

// Call the asynchronous function
fetchParallelData();
