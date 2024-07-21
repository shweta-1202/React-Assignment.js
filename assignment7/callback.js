// Define the function that takes a callback function as an argument
function batch(callback) {
  console.log('Engineering');
  
  // Simulate an asynchronous operation using setTimeout
  setTimeout(() => {
   
    console.log('Powar');
    
    // Execute the callback function
    callback();
  }, 3000); // wait for 3 seconds
}

// Define the callback function
function callbackFunction() {
  console.log(' executed');
}

// Call the  function and pass the callback function as an argument
batch(callbackFunction);
