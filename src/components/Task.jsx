import React from 'react';
import '../App.css';

export default function Task({ task, onToggleStatus, onDelete }) {
  return (
    <div>
      <input 
        type="checkbox" 
        checked={task.status === 'completed'} 
        onChange={onToggleStatus} 
        disabled={task.status === 'completed'}
      />
      <span className={task.status === 'completed' ? 'completed' : ''}>
        {task.name}
      </span>
      <button type="button" onClick={onDelete}>Remove</button>
    </div>
  );
}