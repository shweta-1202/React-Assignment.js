// Define the dev1 function that takes a callback function as an argument
function dev1(callback) {
    console.log('Hill Im Dev');
    setTimeout(() => {
      console.log('Dev 1 completed');
      callback();
    }, 1000); // wait for 1 second
  }
  
  // Define the dev2 function that takes a callback function as an argument
  function dev2(callback) {
    console.log('I love playing games');
    setTimeout(() => {
      console.log('Dev 2 done');
      callback();
    }, 2000); // wait for 2 seconds
  }
  
  // Define the dev3 function that takes a callback function as an argument
  function dev3(callback) {
    console.log('Hii this is shweta');
    setTimeout(() => {
      console.log('Dev 3 executed');
      callback();
    }, 3000); // wait for 3 seconds
  }
  
  // Nest the callbacks to ensure dev1 runs first, followed by dev2, and finally dev3
  dev1(() => {
    dev2(() => {
      dev3(() => {
        console.log('All dev tasks completed');
      });
    });
  });
  