import React, { useState } from 'react';

export default function TaskForm({ onAddTask }) {
  const [task, setTask] = useState('');

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      onAddTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="new task ..."
        value={task}
        onChange={handleInputChange}
      />
      <button type="submit" className="btn-primary">Add</button>
    </form>
  );
}