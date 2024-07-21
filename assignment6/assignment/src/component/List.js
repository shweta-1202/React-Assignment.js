import React, { useState } from 'react';

const List = () => {
  const initialList = [
    { id: 1, name: 'Shweta' },
    { id: 2, name: 'Dev' },
    { id: 3, name: 'Vaishali' },
    { id: 4, name: 'Gola' },
    { id: 5, name: 'Manjiri' },
  ];

  const [list, setList] = useState(initialList);
  const [filterText, setFilterText] = useState('');
  const [newItemText, setNewItemText] = useState('');

  const handleFilter = (event) => {
    setFilterText(event.target.value);
  };

  const handleAddItem = (event) => {
    event.preventDefault();
    const newItem = { id: list.length + 1, name: newItemText };
    setList([...list, newItem]);
    setNewItemText('');
  };

  const filteredList = list.filter((item) => {
    return item.name.toLowerCase().includes(filterText.toLowerCase());
  });

  return (
    <div>
      <input
        type="text"
        value={filterText}
        onChange={handleFilter}
        placeholder="Filter list"
      />
      <br />
      <ul>
        {filteredList.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <br />
      <form onSubmit={handleAddItem}>
        <input
          type="text"
          value={newItemText}
          onChange={(event) => setNewItemText(event.target.value)}
          placeholder="Add new item"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default List;
