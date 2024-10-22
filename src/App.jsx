import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import Task from './components/Task';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskIdCounter, setTaskIdCounter] = useState(0);

  const addTask = (taskName) => {
    const newTask = { id: Date.now(), name: taskName, status: 'pending' };
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

  return (
    <>
      <h1>Daily Planner</h1>
      <TaskForm onAddTask={addTask} />
      <h2>You have {remainingTasks} tasks remaining</h2>
      <div className="task-list">
        {tasks.map(task => (
          <Task 
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