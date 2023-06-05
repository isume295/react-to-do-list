import React from 'react';
import TodoItem from './TodoItem';

export default function TodosList({
  list, handleChange, deleteItem, setUpdate,
}) {
  return (
    <ul>
      {list.map((todo) => (
        <TodoItem
          key={todo.id}
          itemProp={todo}
          handleChange={handleChange}
          deleteItem={deleteItem}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
}
