// Define the task1 function that returns a Promise
function getdata1() {
    return new Promise((resolve, reject) => {
      console.log('Good Morning');
      setTimeout(() => {
        console.log('Task 1 done');
        resolve(); // resolve the promise
      }, 2000); // wait for 2 second
    });
  }
  
  // Define the task2 function that returns a Promise
  function getdata2() {
    return new Promise((resolve, reject) => {
      console.log('Hello this is Vaishali');
      setTimeout(() => {
        console.log('Task 2 completed');
        resolve(); // resolve the promise
      }, 3000); // wait for 3 seconds
    });
  }
  
  // Define the task3 function that returns a Promise
  function getdata3() {
    return new Promise((resolve, reject) => {
      console.log('Powar');
      setTimeout(() => {
        console.log('Task 3 executed');
        resolve(); // resolve the promise
      }, 5000); // wait for 5 seconds
    });
  }
  
 getdata1()
    .then(() => getdata2())
    .then(() => getdata3())
    .then(() => {
      console.log('All tasks completed'); //  when all tasks are complete
    })
    .catch((error) => {
      console.error('Error occurred:', error); // handle any potential errors
    });
  