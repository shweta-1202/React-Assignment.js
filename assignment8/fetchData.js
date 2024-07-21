// Import the axios library
const axios = require('axios');

// Define an asynchronous function to fetch data
async function fetchData() {
  try {
    // Simulate an error by using an invalid URL
    const response = await axios.get('https://jsonplaceholder.typicode.com/invalidurl');
    
    // Log the fetched data to the console
    console.log(response.data);
  } catch (error) {
    // Log an appropriate error message to the console
    console.error('Error fetching data:', error.message);
  }
}

// Call the asynchronous function
fetchData();
