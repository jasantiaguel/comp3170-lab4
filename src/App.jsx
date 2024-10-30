import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import Task from './components/Task';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskIdCounter, setTaskIdCounter] = useState(0);
  const [filter, setFilter] = useState('all');

  const addTask = (taskName) => {
    const newTask = { id: taskIdCounter, name: taskName, status: 'pending' };
    setTasks([...tasks, newTask]);
    setTaskIdCounter(taskIdCounter + 1);
  };

  const toggleTaskStatus = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, status: task.status === 'pending' ? 'completed' : 'pending' } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const remainingTasks = tasks.filter(task => task.status === 'pending').length;

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.status === 'completed';
    if (filter === 'pending') return task.status === 'pending';
    return true;
  });

  return (
    <>
      <h1>Daily Planner</h1>
      <TaskForm onAddTask={addTask} />
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('pending')}>Pending</button>
      </div>
      <h2>You have {remainingTasks} tasks remaining</h2>
      <div className="task-list">
        {filteredTasks.map(task => (
          <Task 
            key={task.id} 
            task={task} 
            onToggleStatus={() => toggleTaskStatus(task.id)} 
            onDelete={() => deleteTask(task.id)} 
          />
        ))}
      </div>
    </>
  );
}

export default App;