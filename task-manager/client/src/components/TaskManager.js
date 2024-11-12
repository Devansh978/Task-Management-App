import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './TaskForm';

function TaskManager() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error.message);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm fetchTasks={fetchTasks} />
      <ul>
        {tasks.map(task => (
          <li key={task._id}>{task.title} - {task.category} - {new Date(task.deadline).toLocaleDateString()}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
