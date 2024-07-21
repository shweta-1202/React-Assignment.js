const fs = require("fs");

// 1. Create a file named shweta.txt and write some text into it using the fs.writeFile method.
fs.writeFile("shweta.txt", "Hello this is Shweta", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File created and written successfully!");
});
fs.writeFile("dev.txt", "Hello this is Dev Yesade", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File created and written successfully!");
});

// 2. Read the content of shweta.txt and log it to the console using the fs.readFile method.
fs.readFile("shweta.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File content:", data);
});

// 3. Append some additional text to shweta.txt using the fs.appendFile method.
fs.appendFile("shweta.txt", "This is basic file handling ", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File appended successfully!");
});

// 4. Delete the file dev.txt using the fs.unlink method.
fs.unlink("dev.txt", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File deleted successfully!");
});
