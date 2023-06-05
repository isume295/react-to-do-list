import React from 'react';
import TodoItem from './TodoItem';

export default function TodosList({ list }) {
  return (
    <ul>
      {list.map((todo) => (
        <TodoItem key={todo.id} itemProp={todo} />
      ))}
    </ul>
  );
}
