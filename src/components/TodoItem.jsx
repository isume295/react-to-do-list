/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import styles from '../style/TodoItem.module.scss';

export default function TodoItem({
  itemProp, handleChange, deleteItem, setUpdate,
}) {
  const [editing, setEditing] = useState(false);
  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  const handleEdit = () => {
    setEditing(true);
  };
  const handleUpdatedDone = (e) => {
    if (e.key === 'Enter') {
      setEditing(false);
    }
  };
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        <span style={itemProp.completed ? completedStyle : null}>
          {itemProp.title}
        </span>

        <button type="button" onClick={handleEdit}>
          <AiFillEdit />
        </button>
        <button
          type="button"
          onClick={() => deleteItem(itemProp.id)}
        >
          <FaTrash />
        </button>
      </div>
      <input
        type="text"
        value={itemProp.title}
        className={styles.textInput}
        style={editMode}
        onChange={(e) => setUpdate(e.target.value, itemProp.id)}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
}
