import React, { useState } from 'react';
import useFetchWithParams from './useFetchWithParams'; // Adjust the path if necessary

function FilteredPosts() {
  const [userId, setUserId] = useState('');
  const [fetchParams, setFetchParams] = useState(null);

  const handleFetchPosts = () => {
    setFetchParams({ userId });
  };

  const { data, loading, error } = useFetchWithParams(
    'https://jsonplaceholder.typicode.com/posts',
    fetchParams
  );

  return (
    <div>
      <input
        type="number"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="Enter user ID"
      />
      <button onClick={handleFetchPosts}
      style={{color:'aqua'}}>Fetch Posts</button>

      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}

      <ul>
        {data && data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilteredPosts;
