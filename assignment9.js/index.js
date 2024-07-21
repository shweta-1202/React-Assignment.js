import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from './component/Counter';
import Posts from './component/Posts';
import UserSearch from './component/UserSearch';
import App from './component/App';
import Users from './component/Users';
import FilteredPosts from './component/FilteredPosts';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Counter />
    <Posts />
    <UserSearch />
   <App/>
   <Users/>
   <useFetch/>
   <FilteredPosts/>
   <useFetchWithParams/>
  </React.StrictMode>
);
