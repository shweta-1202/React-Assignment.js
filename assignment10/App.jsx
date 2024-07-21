import React from 'react';
import Users from './Users'; // Adjust the path if necessary
import FilteredPosts from './FilteredPosts'; 

function App() {
  return (
    <div className="App">
      <h1>User List</h1>
      <Users />
      <h1>Filtered Posts</h1>
      <FilteredPosts />
    </div>
  );
}

export default App;
