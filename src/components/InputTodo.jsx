/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

export default function InputTodo({ addNewItem }) {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const handleInput = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addNewItem(title);
      setTitle('');
    } else {
      setMessage('please enter your to-do');
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Add Todo..."
          value={title}
          onChange={handleInput}
          className="input-text"
        />
        <button type="submit" className="input-submit">
          <FaPlusCircle />
        </button>
      </form>
      <span className="submit-warning">{message}</span>
    </>
  );
}
