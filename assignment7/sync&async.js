const fs = require('fs');

// Create a large string to write to the file
const largeString = new Array(100).fill('Hello Shweta! ').join('');

// Synchronous file writing
console.log('Synchronous file writing...');
const startSyncWrite = Date.now(); // Start time
fs.writeFileSync('largefile.txt', largeString); // Synchronous write
const endSyncWrite = Date.now(); // End time
console.log(`Synchronous file writing took ${endSyncWrite - startSyncWrite}ms`); // Time taken

// Synchronous file reading
console.log('Synchronous file reading...');
const startSyncRead = Date.now(); // Start time
const fileContent = fs.readFileSync('largefile.txt', 'utf8'); // Synchronous read
const endSyncRead = Date.now(); // End time
console.log(`Synchronous file reading took ${endSyncRead - startSyncRead}ms`); // Time taken

// Asynchronous file writing
console.log('Asynchronous file writing...');
const startAsyncWrite = Date.now(); // Start time
fs.writeFile('largefile.txt', largeString, (err) => { // Asynchronous write
  if (err) {
    console.error(err); // Error handling
  } else {
    const endAsyncWrite = Date.now(); // End time
    console.log(`Asynchronous file writing took ${endAsyncWrite - startAsyncWrite}ms`); // Time taken
  }
});

// Asynchronous file reading
console.log('Asynchronous file reading...');
const startAsyncRead = Date.now(); // Start time
fs.readFile('largefile.txt', 'utf8', (err, data) => { // Asynchronous read
  if (err) {
    console.error(err); // Error handling
  } else {
    const endAsyncRead = Date.now(); // End time
    console.log(`Asynchronous file reading took ${endAsyncRead - startAsyncRead}ms`); // Time taken
  }
});
