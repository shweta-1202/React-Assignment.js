import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './component/style.css'
import App from './App';
import Button from './component/Button';
import InputField from './component/InputFiled';
import Mousehover from './component/Mousehover';
import Controlled from './component/Controlled';
import ToggleText from './component/ToggleText';
import List from './component/List';
import Box from './component/Box';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Button/>
    <InputField/>
    <Mousehover/>
    <Controlled/>
    <ToggleText/>
    <List/>
    <Box/>
  </React.StrictMode>
);

