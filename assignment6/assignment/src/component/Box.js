import React, { useState } from 'react';
const Box = () => {
  // Define the initial state for each box
  const [boxes, setBoxes] = useState([
    { id: 1, color: 'aqua', size: '100px' },
    { id: 2, color: 'red', size: '100px' },
    { id: 3, color: 'black', size: '100px' },
    { id: 4, color: 'lightpink', size: '100px' },
    { id: 5, color: 'yellow', size: '100px' },
    { id: 6, color: 'lightgreen', size: '100px' },
  ]);
  

  // Define the handleClick function to change the color of a box
  const handleClick = (id) => {
    setBoxes(
      boxes.map((box) => {
        if (box.id === id) {
          return { ...box, color: getRandomColor() };
        }
        return box;
      })
    );
  };

  // Define the handleDoubleClick function to enlarge a box
  const handleDoubleClick = (id) => {
    setBoxes(
      boxes.map((box) => {
        if (box.id === id) {
          return { ...box, size: '150px' };
        }
        return box;
      })
    );
  };

  // Define the handleRightClick function to reset the style of a box
  const handleRightClick = (id) => {
    setBoxes(
      boxes.map((box) => {
        if (box.id === id) {
          return { ...box, color: 'blue', size: '100px' };
        }
        return box;
      })
    );
  };

  // Define a function to generate a random color
  const getRandomColor = () => {
    const colors = ['red', 'green', 'aqua', 'yellow', 'orange', 'purple'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div>
      {boxes.map((box) => (
        <div
          key={box.id}
          style={{
            width: box.size,
            height: box.size,
            backgroundColor: box.color,
            display: 'inline-block',
            margin: '10px',
            cursor: 'pointer',
          }}
          onClick={() => handleClick(box.id)}
          onDoubleClick={() => handleDoubleClick(box.id)}
          onContextMenu={(event) => {
            event.preventDefault();
            handleRightClick(box.id);
          }}
        />
      ))}
    </div>
  );
};

export default Box;
