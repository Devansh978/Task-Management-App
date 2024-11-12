import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './TaskList.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/tasks')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      setTasks(tasks.filter(task => task._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="task-list-container">
      <h1 className="task-list-heading">Task List</h1>
      <Link to="/tasks/new" className="create-task-button">Create New Task</Link>
      
      <div className="tasks-grid">
        {tasks.map(task => (
          <div className="task-card" key={task._id}>
            <div className="task-content">
              <h2 className="task-title">{task.title}</h2>
              <p className="task-desc">{task.description}</p>
              <p className="task-category">Category: {task.category}</p>
              <p className="task-deadline">Deadline: {new Date(task.deadline).toLocaleString()}</p>
              <p className="task-reminder">Reminder: {new Date(task.reminder).toLocaleString()}</p>
            </div>
            <div className="task-actions">
              <Link to={`/tasks/edit/${task._id}`} className="edit-button">Edit</Link>
              <button className="delete-button" onClick={() => handleDelete(task._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
