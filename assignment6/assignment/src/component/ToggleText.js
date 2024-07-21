import React, { useState } from 'react';
import './style.css'
const ToggleText = () => {
    const [showText, setShowText] = useState(false); // Initially, the paragraph is hidden
  
    // Function to toggle the visibility of the paragraph
    const handleToggle = () => {
      setShowText(!showText); // Toggle the state variable
    };
  
    // Function to reset the state to its initial state (paragraph hidden)
    const handleReset = () => {
      setShowText(false); // Reset the state variable
    };
  
    return (
      <div className="toggle-text-container">
        {/* Button to toggle the visibility of the paragraph */}
        <button onClick={handleToggle}>Toggle Text</button>
        <br />
        {/* Button to reset the state to its initial state */}
        <button onClick={handleReset}>Reset</button>
        <br />
        {/* Paragraph of text that is conditionally rendered */}
        {showText && (
          <p>Hiii This is Shweta Powar From Batch3</p>
        )}
      </div>
    );
  };
  
  export default ToggleText;